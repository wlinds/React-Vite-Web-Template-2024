CREATE TABLE IF NOT EXISTS downloads (
  id BIGSERIAL PRIMARY KEY,
  downloaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  version VARCHAR(50) NOT NULL,
  user_agent TEXT,
  ip_address INET,
  country VARCHAR(100),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_downloads_downloaded_at ON downloads(downloaded_at DESC);

CREATE INDEX IF NOT EXISTS idx_downloads_version ON downloads(version);

ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous downloads insert"
  ON downloads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view downloads"
  ON downloads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE OR REPLACE VIEW download_stats AS
SELECT
  version,
  COUNT(*) as total_downloads,
  COUNT(DISTINCT DATE(downloaded_at)) as days_active,
  MIN(downloaded_at) as first_download,
  MAX(downloaded_at) as latest_download
FROM downloads
GROUP BY version
ORDER BY version DESC;

GRANT SELECT ON download_stats TO authenticated;

COMMENT ON TABLE downloads IS 'Tracks SR-Player application downloads';
COMMENT ON COLUMN downloads.id IS 'Unique download record ID';
COMMENT ON COLUMN downloads.downloaded_at IS 'Timestamp when download occurred';
COMMENT ON COLUMN downloads.version IS 'Version of the application downloaded';
COMMENT ON COLUMN downloads.user_agent IS 'Browser user agent string for analytics';
COMMENT ON COLUMN downloads.ip_address IS 'IP address of the downloader';
COMMENT ON COLUMN downloads.country IS 'Country derived from IP address';
