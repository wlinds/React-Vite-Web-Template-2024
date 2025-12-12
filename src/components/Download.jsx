// Download.jsx
import { useEffect, useState } from 'react';
import { Download as DownloadIcon, ArrowLeft } from 'lucide-react';
import { SiApple, SiUbuntu } from 'react-icons/si';
import { FaWindows } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const VERSION = 'v0.6.33';
const GITHUB_RELEASE_BASE = `https://github.com/wlinds/SR-Player/releases/download/${VERSION}`;

const Download = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [userOS, setUserOS] = useState(null);

  useEffect(() => {
    const detectOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();

      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

      if (isMobile) {
        return null;
      }

      const platform = navigator.userAgentData?.platform?.toLowerCase() ?? '';

      if (platform === 'macos' || userAgent.includes('mac')) {
        return 'macos';
      } else if (platform === 'windows' || userAgent.includes('win')) {
        return 'windows';
      } else if (platform === 'linux' || userAgent.includes('linux')) {
        return 'linux';
      }

      return null;
    };

    setUserOS(detectOS());
  }, []);

  const versions = [
    {
      id: 'macos',
      name: 'macOS',
      icon: <SiApple className="w-8 h-8" />,
      version: VERSION,
      size: '4.61 MB',
      architecture: 'Universal (Intel + Apple Silicon)',
      downloadUrl: `${GITHUB_RELEASE_BASE}/SR-Player-${VERSION}-macos.zip`,
    },
    {
      id: 'windows',
      name: 'Windows',
      icon: <FaWindows className="w-8 h-8" />,
      version: VERSION,
      size: '4.14 MB',
      architecture: 'x64',
      downloadUrl: `${GITHUB_RELEASE_BASE}/sr-player-${VERSION}-setup.msi`,
    },
    {
      id: 'linux',
      name: 'Linux',
      icon: <SiUbuntu className="w-8 h-8" />,
      version: VERSION,
      size: '5.19 MB',
      architecture: 'x64',
      downloadUrl: `${GITHUB_RELEASE_BASE}/sr-player-${VERSION}-linux.tar.gz`,
    },
  ];

  const handleDownload = (url, osId) => {
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const data = JSON.stringify({ version: VERSION, os: osId });

      if (navigator.sendBeacon) {
        const blob = new Blob([data], { type: 'application/json' });
        navigator.sendBeacon(`${supabaseUrl}/functions/v1/track-download`, blob);
      } else {
        fetch(`${supabaseUrl}/functions/v1/track-download`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: data,
          keepalive: true
        }).catch(() => {});
      }
    } catch (err) {
      // Silently fail - download tracking is not critical
    }

    // Trigger direct download
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          {t('download.back')}
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {t('download.title')}
          </h1>
          <p className="text-gray-300 text-lg">
            {t('download.subtitle')}
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {versions.map((version) => {
            const isUserOS = userOS === version.id;

            return (
              <div
                key={version.id}
                className={`relative bg-gray-900/50 rounded-lg border transition-all ${
                  isUserOS
                    ? 'border-brand-400 shadow-lg shadow-brand-400/20'
                    : 'border-gray-800/50 hover:border-gray-700'
                }`}
              >
                {isUserOS && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-400 text-gray-900 px-4 py-1 rounded-full text-sm font-medium">
                    {t('download.recommended')}
                  </div>
                )}

                <div className="p-6 space-y-4">
                  {/* OS Icon and Name */}
                  <div className="flex items-center gap-3">
                    <div className={isUserOS ? 'text-brand-400' : 'text-gray-400'}>
                      {version.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{version.name}</h3>
                  </div>

                  {/* Version Info */}
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between">
                      <span>{t('download.version')}:</span>
                      <span className="text-white font-medium">{version.version}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('download.size')}:</span>
                      <span className="text-white font-medium">{version.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('download.architecture')}:</span>
                      <span className="text-white font-medium">{version.architecture}</span>
                    </div>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(version.downloadUrl, version.id)}
                    className={`w-full py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2 ${
                      isUserOS
                        ? 'bg-brand-400 text-gray-900 hover:bg-brand-500'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    <DownloadIcon className="w-5 h-5" />
                    {t('download.downloadButton')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            {t('download.releaseNotes')}{' '}
            <a
              href="https://github.com/wlinds/SR-Player/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-500 transition-colors"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Download;
