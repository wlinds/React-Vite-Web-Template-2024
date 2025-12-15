import { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Feedback = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    // Core Feedback
    testerName: '',
    testerEmail: '',
    overallRating: '',
    whatWorkedWell: '',
    whatDidntWork: '',
    bugDescription: '',
    stepsToReproduce: '',
    expectedVsActual: '',
    // User Experience
    easeOfUseRating: '',
    mostValuableFeature: '',
    missingFeatures: '',
    wouldRecommend: '',
    additionalComments: '',
    // Technical Context
    deviceType: '',
    browserOS: '',
    screenshotLinks: '',
  });

  // Auto-detect browser/OS
  useEffect(() => {
    const detectBrowserOS = () => {
      const userAgent = navigator.userAgent;
      let browser = 'Unknown';
      let os = 'Unknown';

      // Detect browser
      if (userAgent.includes('Firefox')) browser = 'Firefox';
      else if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) browser = 'Chrome';
      else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) browser = 'Safari';
      else if (userAgent.includes('Edg')) browser = 'Edge';

      // Detect OS
      if (userAgent.includes('Windows')) os = 'Windows';
      else if (userAgent.includes('Mac')) os = 'macOS';
      else if (userAgent.includes('Linux')) os = 'Linux';
      else if (userAgent.includes('Android')) os = 'Android';
      else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) os = 'iOS';

      return `${browser} / ${os}`;
    };

    setFormData(prev => ({ ...prev, browserOS: detectBrowserOS() }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xpwveaen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `SR Player Beta Feedback - ${formData.testerName}`,
          timestamp: new Date().toISOString(),
          ...formData,
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      setFormData({
        testerName: '',
        testerEmail: '',
        overallRating: '',
        whatWorkedWell: '',
        whatDidntWork: '',
        bugDescription: '',
        stepsToReproduce: '',
        expectedVsActual: '',
        easeOfUseRating: '',
        mostValuableFeature: '',
        missingFeatures: '',
        wouldRecommend: '',
        additionalComments: '',
        deviceType: '',
        browserOS: formData.browserOS,
        screenshotLinks: '',
      });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-2";
  const sectionClasses = "bg-gray-900/50 rounded-xl border border-gray-800/50 p-6 space-y-6";

  const RatingButtons = ({ name, value, onChange, max = 5 }) => (
    <div className="flex gap-2">
      {[...Array(max)].map((_, i) => (
        <button
          key={i + 1}
          type="button"
          onClick={() => onChange({ target: { name, value: String(i + 1) } })}
          className={`w-10 h-10 rounded-lg font-medium transition-all ${
            value === String(i + 1)
              ? 'bg-brand-400 text-gray-900'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-12 lg:py-20">
        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          {t('feedback.back')}
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {t('feedback.title')}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('feedback.subtitle')}
          </p>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="mb-8 p-4 bg-green-900/30 border border-green-700 rounded-lg flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <p className="text-green-300">{t('feedback.successMessage')}</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-8 p-4 bg-red-900/30 border border-red-700 rounded-lg flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-red-400" />
            <p className="text-red-300">{t('feedback.errorMessage')}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Core Feedback Section */}
          <div className={sectionClasses}>
            <h2 className="text-xl font-semibold text-brand-400 border-b border-gray-800 pb-3">
              {t('feedback.coreFeedback')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>{t('feedback.testerName')} *</label>
                <input
                  type="text"
                  name="testerName"
                  value={formData.testerName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder={t('feedback.testerNamePlaceholder')}
                />
              </div>

              <div>
                <label className={labelClasses}>{t('feedback.testerEmail')} *</label>
                <input
                  type="email"
                  name="testerEmail"
                  value={formData.testerEmail}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder={t('feedback.testerEmailPlaceholder')}
                />
              </div>
            </div>

            <div>
              <label className={labelClasses}>{t('feedback.overallRating')} *</label>
              <RatingButtons
                name="overallRating"
                value={formData.overallRating}
                onChange={handleChange}
                max={5}
              />
              <p className="text-xs text-gray-500 mt-2">{t('feedback.ratingHint')}</p>
            </div>

            <div>
              <label className={labelClasses}>{t('feedback.whatWorkedWell')}</label>
              <textarea
                name="whatWorkedWell"
                value={formData.whatWorkedWell}
                onChange={handleChange}
                rows={3}
                className={inputClasses}
                placeholder={t('feedback.whatWorkedWellPlaceholder')}
              />
            </div>

            <div>
              <label className={labelClasses}>{t('feedback.whatDidntWork')}</label>
              <textarea
                name="whatDidntWork"
                value={formData.whatDidntWork}
                onChange={handleChange}
                rows={3}
                className={inputClasses}
                placeholder={t('feedback.whatDidntWorkPlaceholder')}
              />
            </div>
          </div>

          {/* Bug Reports Section */}
          <div className={sectionClasses}>
            <h2 className="text-xl font-semibold text-brand-400 border-b border-gray-800 pb-3">
              {t('feedback.bugReports')}
            </h2>

            <div>
              <label className={labelClasses}>{t('feedback.bugDescription')}</label>
              <textarea
                name="bugDescription"
                value={formData.bugDescription}
                onChange={handleChange}
                rows={3}
                className={inputClasses}
                placeholder={t('feedback.bugDescriptionPlaceholder')}
              />
            </div>

            <div>
              <label className={labelClasses}>{t('feedback.stepsToReproduce')}</label>
              <textarea
                name="stepsToReproduce"
                value={formData.stepsToReproduce}
                onChange={handleChange}
                rows={3}
                className={inputClasses}
                placeholder={t('feedback.stepsToReproducePlaceholder')}
              />
            </div>

            <div>
              <label className={labelClasses}>{t('feedback.expectedVsActual')}</label>
              <textarea
                name="expectedVsActual"
                value={formData.expectedVsActual}
                onChange={handleChange}
                rows={3}
                className={inputClasses}
                placeholder={t('feedback.expectedVsActualPlaceholder')}
              />
            </div>
          </div>

          {/* User Experience Section */}
          <div className={sectionClasses}>
            <h2 className="text-xl font-semibold text-brand-400 border-b border-gray-800 pb-3">
              {t('feedback.userExperience')}
            </h2>

            <div>
              <label className={labelClasses}>{t('feedback.easeOfUseRating')}</label>
              <RatingButtons
                name="easeOfUseRating"
                value={formData.easeOfUseRating}
                onChange={handleChange}
                max={5}
              />
              <p className="text-xs text-gray-500 mt-2">{t('feedback.easeOfUseHint')}</p>
            </div>

            <div>
              <label className={labelClasses}>{t('feedback.mostValuableFeature')}</label>
              <input
                type="text"
                name="mostValuableFeature"
                value={formData.mostValuableFeature}
                onChange={handleChange}
                className={inputClasses}
                placeholder={t('feedback.mostValuableFeaturePlaceholder')}
              />
            </div>

            <div>
              <label className={labelClasses}>{t('feedback.missingFeatures')}</label>
              <textarea
                name="missingFeatures"
                value={formData.missingFeatures}
                onChange={handleChange}
                rows={3}
                className={inputClasses}
                placeholder={t('feedback.missingFeaturesPlaceholder')}
              />
            </div>

            <div>
              <label className={labelClasses}>{t('feedback.wouldRecommend')}</label>
              <div className="flex gap-3">
                {['yes', 'maybe', 'no'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleChange({ target: { name: 'wouldRecommend', value: option } })}
                    className={`px-6 py-2 rounded-lg font-medium transition-all ${
                      formData.wouldRecommend === option
                        ? 'bg-brand-400 text-gray-900'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {t(`feedback.recommend.${option}`)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelClasses}>{t('feedback.additionalComments')}</label>
              <textarea
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleChange}
                rows={4}
                className={inputClasses}
                placeholder={t('feedback.additionalCommentsPlaceholder')}
              />
            </div>
          </div>

          {/* Technical Context Section */}
          <div className={sectionClasses}>
            <h2 className="text-xl font-semibold text-brand-400 border-b border-gray-800 pb-3">
              {t('feedback.technicalContext')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>{t('feedback.deviceType')}</label>
                <select
                  name="deviceType"
                  value={formData.deviceType}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">{t('feedback.selectDevice')}</option>
                  <option value="desktop">{t('feedback.device.desktop')}</option>
                  <option value="laptop">{t('feedback.device.laptop')}</option>
                  <option value="tablet">{t('feedback.device.tablet')}</option>
                  <option value="mobile">{t('feedback.device.mobile')}</option>
                </select>
              </div>

              <div>
                <label className={labelClasses}>{t('feedback.browserOS')}</label>
                <input
                  type="text"
                  name="browserOS"
                  value={formData.browserOS}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder={t('feedback.browserOSPlaceholder')}
                />
              </div>
            </div>

            <div>
              <label className={labelClasses}>{t('feedback.screenshotLinks')}</label>
              <input
                type="text"
                name="screenshotLinks"
                value={formData.screenshotLinks}
                onChange={handleChange}
                className={inputClasses}
                placeholder={t('feedback.screenshotLinksPlaceholder')}
              />
              <p className="text-xs text-gray-500 mt-2">{t('feedback.screenshotHint')}</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting || !formData.testerName || !formData.testerEmail || !formData.overallRating}
              className="px-8 py-4 bg-brand-400 text-gray-900 rounded-full font-semibold text-lg hover:bg-brand-500 transition-colors flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                  {t('feedback.submitting')}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t('feedback.submit')}
                </>
              )}
            </button>
          </div>
        </form>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            {t('feedback.privacyNote')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
