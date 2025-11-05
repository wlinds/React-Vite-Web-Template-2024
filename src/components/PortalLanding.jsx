// PortalLanding.jsx
import { Zap, HardDrive, Gauge, Leaf, Download, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from './Header';

const DOWNLOAD_URL = 'https://github.com/wlinds/SR-Player/releases/tag/v0.1.0';
const GITHUB_URL = 'https://github.com/wlinds/SR-Player';

const PortalLanding = () => {
  const { t } = useTranslation();

  const handleDownload = async () => {
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const response = await fetch(`${supabaseUrl}/functions/v1/track-download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          version: 'v0.1.0',
        }),
      });

      if (!response.ok) {
        console.error('Error tracking download:', await response.text());
      }
    } catch (err) {
      console.error('Failed to track download:', err);
    } finally {
      window.open(DOWNLOAD_URL, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <Header />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12">
          <div className="space-y-6 lg:w-[55%]">
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-brand-400">{t('hero.title')}</span>
              <br />
              {t('hero.subtitle')}
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleDownload}
                className="bg-brand-400 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-brand-500 transition-colors flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                {t('hero.cta.download')}
              </button>
              <button className="bg-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-700 transition-colors">
                {t('hero.cta.learnMore')}
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="flex justify-center lg:justify-end lg:w-[45%]">
            <img
              src="/images/sr-player-025-11-04.png"
              className="w-full max-w-md lg:max-w-lg rounded-lg shadow-2xl border border-gray-800"
              alt="SR Player Interface"
            />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-20">
          {[
            {
              icon: <Zap className="w-8 h-8 text-brand-400" />,
              title: t('feature1.title'),
              description: t('feature1.description')
            },
            {
              icon: <HardDrive className="w-8 h-8 text-blue-400" />,
              title: t('feature2.title'),
              description: t('feature2.description')
            },
            {
              icon: <Gauge className="w-8 h-8 text-purple-400" />,
              title: t('feature3.title'),
              description: t('feature3.description')
            },
            {
              icon: <Leaf className="w-8 h-8 text-green-400" />,
              title: t('feature4.title'),
              description: t('feature4.description')
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-lg hover:bg-gray-900 transition-colors border border-gray-800/50">
              {feature.icon}
              <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t('about.title')}</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </div>

      {/* Developer Section */}
      <div className="bg-gray-950/50 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="lg:w-1/4 flex justify-center lg:justify-start">
              <Code2 className="w-24 h-24 text-brand-400" />
            </div>
            <div className="lg:w-3/4 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">{t('developer.title')}</h2>
              <p className="text-brand-400 text-xl font-medium">{t('developer.subtitle')}</p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('developer.description')}
              </p>
              <div className="pt-4">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-600 transition-colors"
                >
                  <Code2 className="w-5 h-5" />
                  {t('developer.cta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  export default PortalLanding;