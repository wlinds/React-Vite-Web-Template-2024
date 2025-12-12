// PortalLanding.jsx
import { Zap, HardDrive, Gauge, Leaf, Download, Code2, Monitor, Shield } from 'lucide-react';
import { SiApple, SiUbuntu } from 'react-icons/si';
import { FaWindows } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const GITHUB_URL = 'https://github.com/wlinds/SR-Player';

const PortalLanding = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDownload = () => {
    navigate('/download');
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
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-700 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                {t('hero.cta.learnMore')}
              </a>
            </div>
          </div>

          {/* Featured Image */}
          <div className="flex justify-center lg:justify-end lg:w-[45%]">
            <img
              src="/images/sr-player-v0.5.0-25-11-11.png"
              className="w-full max-w-md lg:max-w-lg rounded-lg shadow-2xl border border-gray-800"
              alt="SR Player Interface"
            />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 lg:mt-20">
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
            <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800/50">
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

      {/* Cross-Platform Section */}
      <div className="bg-gray-900/30 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="lg:w-1/4 flex justify-center lg:justify-start">
              <Monitor className="w-24 h-24 text-brand-400" />
            </div>
            <div className="lg:w-3/4 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">{t('crossplatform.title')}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('crossplatform.description')}
              </p>
              <div className="flex gap-6 pt-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <SiApple className="w-7 h-7" />
                  <span className="font-medium">macOS</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <SiUbuntu className="w-7 h-7" />
                  <span className="font-medium">Linux / Ubuntu</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <FaWindows className="w-7 h-7" />
                  <span className="font-medium">Windows</span>
                </div>
              </div>
              <div className="pt-4 flex justify-left">
                <button
                  onClick={handleDownload}
                  className="bg-brand-400 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-brand-500 transition-colors inline-flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {t('hero.cta.download')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy & Integrity Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="lg:w-1/4 flex justify-center lg:justify-start">
            <Shield className="w-24 h-24 text-brand-400" />
          </div>
          <div className="lg:w-3/4 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">{t('privacy.title')}</h2>
            <p className="text-brand-400 text-xl font-medium">{t('privacy.subtitle')}</p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('privacy.description')}
            </p>
          </div>
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