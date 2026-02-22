import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  sv: {
    translation: {
      // Hero Section
      "hero.title": "SR Player",
      "hero.subtitle": "Blixtsnabb radio från Sveriges Radio",
      "hero.description": "Sveriges snabbaste radiospelare. Startar på under en sekund. Alla kanaler från Sveriges Radio i kristallklar ljudkvalitet, paketerat i en ultralätt app som tar mindre än 5 MB lagringsutrymme.",
      "hero.cta.download": "Börja lyssna",
      "hero.cta.learnMore": "Var med och utveckla på GitHub",

      // Features Section
      "feature1.title": "Blixtsnabb start",
      "feature1.description": "Startar på under 1 sekund. Ingen väntan, bara direkt tillgång till dina favoritkanaler.",
      "feature2.title": "Ultra-kompakt",
      "feature2.description": "Mindre än 5 MB. Tar nästan ingen plats på din enhet men ger dig alla kanaler.",
      "feature3.title": "Silkeslen upplevelse",
      "feature3.description": "Blixtsnabb kanalväxling och responsiv design som fungerar perfekt även på äldre enheter.",
      "feature4.title": "Minimalt batteri",
      "feature4.description": "Optimerad för låg batterianvändning. Lyssna längre utan att ladda.",

      // Cross-Platform Section
      "crossplatform.title": "Fungerar på alla plattformar",
      "crossplatform.description": "SR Player finns tillgänglig för macOS, Linux och Windows. Samma snabba, lättviktiga upplevelse oavsett vilken plattform du använder. Native app för varje system - ingen Electron, bara ren prestanda.",

      // Privacy & Integrity Section
      "privacy.title": "Din integritet respekteras",
      "privacy.subtitle": "Absolut noll användarspårning",
      "privacy.description": "SR Player samlar inte in någon användardata överhuvudtaget. Inga cookies, ingen spårning, ingen analys av ditt lyssningsbeteende. Vi räknar endast antal nedladdningar - inget annat. Din musik, dina val, din integritet.",

      // About Section
      "about.title": "Sveriges lättaste radiospelare",
      "about.description": "SR Player är optimerad för hastighet. Varje detalj är finslipad för att ge dig den snabbaste och mest responsiva radioupplevelsen. Mindre än 5 MB installationsstorlek, men med all funktionalitet du behöver. Perfekt för dig som värdesätter prestanda och enkelhet.",

      // Developer Section
      "developer.title": "Öppen källkod",
      "developer.subtitle": "Byggt med moderna verktyg för maximal prestanda",
      "developer.description": "SR Player är fri programvara med öppen källkod. Skriven i Rust för minimal minnesanvändning och blixtsnabb exekvering. Hela projektet är tillgängligt på GitHub för utvecklare som vill bidra, lära sig eller bygga sina egna anpassade versioner.",
      "developer.cta": "Se på GitHub",

      // Download Page
      "download.title": "Ladda ner SR Player",
      "download.subtitle": "Välj version för ditt operativsystem",
      "download.back": "Tillbaka",
      "download.recommended": "Rekommenderad",
      "download.version": "Version",
      "download.size": "Storlek",
      "download.architecture": "Arkitektur",
      "download.downloadButton": "Ladda ner",
      "download.releaseNotes": "Se alla versioner och ändringsloggar på",

      // Footer
      "footer.rights": "Med stöd av Sveriges Radio API",
      "footer.terms": "Villkor",
      "footer.policy": "Integritetspolicy",

      // Terms of Service
      "terms.title": "Användarvillkor",
      "terms.intro": "Senast uppdaterad: november 2025",
      "terms.section1.title": "1. Acceptans av villkor",
      "terms.section1.content": "Genom att ladda ner, installera eller använda SR Player godkänner du dessa villkor. Om du inte accepterar villkoren, använd inte applikationen.",
      "terms.section2.title": "2. Licensiering",
      "terms.section2.content": "SR Player är fri programvara med öppen källkod som distribueras under Mozilla Public License 2.0 (MPL-2.0). Du får fritt använda, modifiera och distribuera applikationen i enlighet med licensvillkoren.",
      "terms.section3.title": "3. Användning av tjänsten",
      "terms.section3.content": "SR Player ger tillgång till radiokanaler från Sveriges Radio via deras publika API. Innehållet ägs av Sveriges Radio och omfattas av deras användarvillkor. Applikationen är avsedd för personligt bruk.",
      "terms.section4.title": "4. Tillgänglighet",
      "terms.section4.content": "Vi strävar efter att tillhandahålla kontinuerlig åtkomst till tjänsten, men garanterar inte att den alltid kommer att vara tillgänglig eller fri från fel. Tjänsten tillhandahålls 'som den är' utan garantier av något slag.",
      "terms.section5.title": "5. Ansvarsbegränsning",
      "terms.section5.content": "SR Player utvecklas och tillhandahålls utan kostnad. Vi ansvarar inte för eventuella direkta eller indirekta skador som uppstår vid användning av applikationen.",
      "terms.section6.title": "6. Ändringar av villkor",
      "terms.section6.content": "Vi förbehåller oss rätten att uppdatera dessa villkor när som helst. Väsentliga ändringar kommer att meddelas via applikationen eller projektets hemsida.",

      // Privacy Policy
      "policy.title": "Integritetspolicy",
      "policy.intro": "Senast uppdaterad: november 2025",
      "policy.section1.title": "1. Insamling av data",
      "policy.section1.content": "SR Player samlar in minimal data för att förbättra användarupplevelsen. Vi spårar endast nedladdningsstatistik (IP-adress och tidpunkt) via vår webbplats. Själva applikationen samlar inte in eller lagrar någon personlig information.",
      "policy.section2.title": "2. Användning av data",
      "policy.section2.content": "Den insamlade nedladdningsstatistiken används uteslutande för att förstå användningen av applikationen och förbättra tjänsten. Data delas inte med tredje part.",
      "policy.section3.title": "3. Cookies och spårning",
      "policy.section3.content": "Webbplatsen använder inga cookies för spårning. Applikationen använder lokal lagring i din enhet för att spara dina inställningar och favoriter, men denna data lämnar aldrig din enhet.",
      "policy.section4.title": "4. Radiostreaming",
      "policy.section4.content": "När du använder SR Player för att lyssna på radio, ansluter applikationen direkt till Sveriges Radios servrar. Din användning av Sveriges Radios tjänster omfattas av deras integritetspolicy.",
      "policy.section5.title": "5. Tredjepartstjänster",
      "policy.section5.content": "Applikationen använder Sveriges Radios publika API för att hämta kanalinformation och livestreamar. Vi har ingen kontroll över och tar inget ansvar för innehållet eller integritetspraxis hos Sveriges Radio.",
      "policy.section6.title": "6. Datasäkerhet",
      "policy.section6.content": "Vi implementerar rimliga säkerhetsåtgärder för att skydda insamlad data. Eftersom applikationen är öppen källkod kan du själv granska hur data hanteras.",
      "policy.section7.title": "7. Dina rättigheter",
      "policy.section7.content": "Du har rätt att begära radering av eventuell nedladdningsdata vi har lagrat. Kontakta oss via GitHub för sådana förfrågningar. All data som lagras lokalt i applikationen kan raderas genom att avinstallera applikationen.",
      "policy.section8.title": "8. Ändringar av policyn",
      "policy.section8.content": "Vi kan uppdatera denna integritetspolicy när som helst. Ändringar träder i kraft omedelbart vid publicering.",

      // Feedback Page
      "feedback.title": "Beta-feedback",
      "feedback.subtitle": "Hjälp oss att forbättra SR Player genom att dela din upplevelse. Din feedback är ovärderlig för att vi ska kunna bygga en bättre produkt.",
      "feedback.back": "Tillbaka",
      "feedback.coreFeedback": "Grundläggande feedback",
      "feedback.testerName": "Ditt namn",
      "feedback.testerNamePlaceholder": "Ange ditt namn",
      "feedback.testerEmail": "Din e-post",
      "feedback.testerEmailPlaceholder": "din@email.se",
      "feedback.overallRating": "Helhetsbetyg",
      "feedback.ratingHint": "1 = Väldigt missnöjd, 5 = Väldigt nöjd",
      "feedback.whatWorkedWell": "Vad fungerade bra?",
      "feedback.whatWorkedWellPlaceholder": "Beskriv positiva upplevelser och favoritfunktioner...",
      "feedback.whatDidntWork": "Vad fungerade inte?",
      "feedback.whatDidntWorkPlaceholder": "Beskriv frustrationer, förvirrande element eller problem...",
      "feedback.bugReports": "Buggrapporter",
      "feedback.bugDescription": "Buggbeskrivning",
      "feedback.bugDescriptionPlaceholder": "Kort sammanfattning av problemet...",
      "feedback.stepsToReproduce": "Steg för att återskapa",
      "feedback.stepsToReproducePlaceholder": "1. Öppna appen\n2. Klicka på...\n3. ...",
      "feedback.expectedVsActual": "Förväntat vs faktiskt beteende",
      "feedback.expectedVsActualPlaceholder": "Vad förväntade du dig skulle hända? Vad hände istället?",
      "feedback.userExperience": "Användarupplevelse",
      "feedback.easeOfUseRating": "Hur lätt var produkten att använda?",
      "feedback.easeOfUseHint": "1 = Väldigt svårt, 5 = Väldigt lätt",
      "feedback.mostValuableFeature": "Mest värdefulla funktion",
      "feedback.mostValuableFeaturePlaceholder": "Vilken funktion tyckte du var mest användbar?",
      "feedback.missingFeatures": "Saknade funktioner",
      "feedback.missingFeaturesPlaceholder": "Vilken funktionalitet förväntade du dig men hittade inte?",
      "feedback.wouldRecommend": "Skulle du rekommendera SR Player till andra?",
      "feedback.recommend.yes": "Ja",
      "feedback.recommend.maybe": "Kanske",
      "feedback.recommend.no": "Nej",
      "feedback.additionalComments": "Övriga kommentarer",
      "feedback.additionalCommentsPlaceholder": "Något annat du vill dela med oss?",
      "feedback.technicalContext": "Teknisk information",
      "feedback.deviceType": "Enhetstyp",
      "feedback.selectDevice": "Välj enhetstyp",
      "feedback.device.desktop": "Stationär dator",
      "feedback.device.laptop": "Bärbar dator",
      "feedback.device.tablet": "Surfplatta",
      "feedback.device.mobile": "Mobil",
      "feedback.browserOS": "Webbläsare / Operativsystem",
      "feedback.browserOSPlaceholder": "t.ex. Chrome / Windows 11",
      "feedback.screenshotLinks": "Skärmdumpslänkar",
      "feedback.screenshotLinksPlaceholder": "URL till skärmdumpar (valfritt)",
      "feedback.screenshotHint": "Du kan använda tjänster som Imgur eller Google Drive för att dela bilder",
      "feedback.submit": "Skicka feedback",
      "feedback.submitting": "Skickar...",
      "feedback.successMessage": "Tack för din feedback! Vi uppskattar att du tar dig tid att hjälpa oss förbättra SR Player.",
      "feedback.errorMessage": "Något gick fel. Försök igen senare eller kontakta oss via GitHub.",
      "feedback.privacyNote": "Din feedback lagras säkert och används endast för att förbättra SR Player.",
    }
  },
  en: {
    translation: {
      // Hero Section
      "hero.title": "SR Player",
      "hero.subtitle": "Lightning-fast radio from Swedish Radio",
      "hero.description": "Sweden's fastest radio player. Launches in under a second. All Swedish Radio channels in crystal-clear audio, packed in an ultra-lightweight app taking less than 5 MB storage.",
      "hero.cta.download": "Start listening",
      "hero.cta.learnMore": "Contribute on GitHub",

      // Features Section
      "feature1.title": "Instant launch",
      "feature1.description": "Starts in under 1 second. No waiting, just instant access to your favorite channels.",
      "feature2.title": "Ultra-compact",
      "feature2.description": "Less than 5 MB. Takes almost no space on your device but gives you all channels.",
      "feature3.title": "Silky smooth",
      "feature3.description": "Lightning-fast channel switching and responsive design that works perfectly even on older devices.",
      "feature4.title": "Minimal battery",
      "feature4.description": "Optimized for low battery consumption. Listen longer without charging.",

      // Cross-Platform Section
      "crossplatform.title": "Works on all platforms",
      "crossplatform.description": "SR Player is available for macOS, Linux, and Windows. The same fast, lightweight experience regardless of which platform you use. Native app for each system - no Electron, just pure performance.",

      // Privacy & Integrity Section
      "privacy.title": "Your privacy is respected",
      "privacy.subtitle": "Absolutely zero user tracking",
      "privacy.description": "SR Player does not collect any user data whatsoever. No cookies, no tracking, no analysis of your listening behavior. We only count the number of downloads - nothing else. Your music, your choices, your privacy.",

      // About Section
      "about.title": "Sweden's lightest radio player",
      "about.description": "SR Player is optimized for speed. Every detail is refined to give you the fastest and most responsive radio experience. Less than 5 MB installation size, but with all the functionality you need. Perfect for those who value performance and simplicity.",

      // Developer Section
      "developer.title": "Open Source",
      "developer.subtitle": "Built with modern tools for maximum performance",
      "developer.description": "SR Player is free and open source software. Written in Rust for minimal memory usage and lightning-fast execution. The entire project is available on GitHub for developers who want to contribute, learn, or build their own custom versions.",
      "developer.cta": "View on GitHub",

      // Download Page
      "download.title": "Download SR Player",
      "download.subtitle": "Choose the version for your operating system",
      "download.back": "Back",
      "download.recommended": "Recommended",
      "download.version": "Version",
      "download.size": "Size",
      "download.architecture": "Architecture",
      "download.downloadButton": "Download",
      "download.releaseNotes": "View all versions and changelog on",

      // Footer
      "footer.rights": "Powered by Swedish Radio API",
      "footer.terms": "Terms",
      "footer.policy": "Privacy Policy",

      // Terms of Service
      "terms.title": "Terms of Service",
      "terms.intro": "Last updated: November 2025",
      "terms.section1.title": "1. Acceptance of Terms",
      "terms.section1.content": "By downloading, installing, or using SR Player, you agree to these terms. If you do not accept these terms, do not use the application.",
      "terms.section2.title": "2. Licensing",
      "terms.section2.content": "SR Player is free and open source software distributed under the Mozilla Public License 2.0 (MPL-2.0). You are free to use, modify, and distribute the application in accordance with the license terms.",
      "terms.section3.title": "3. Use of Service",
      "terms.section3.content": "SR Player provides access to radio channels from Swedish Radio via their public API. The content is owned by Swedish Radio and subject to their terms of service. The application is intended for personal use.",
      "terms.section4.title": "4. Availability",
      "terms.section4.content": "We strive to provide continuous access to the service, but do not guarantee that it will always be available or free from errors. The service is provided 'as is' without warranties of any kind.",
      "terms.section5.title": "5. Limitation of Liability",
      "terms.section5.content": "SR Player is developed and provided at no cost. We are not liable for any direct or indirect damages arising from the use of the application.",
      "terms.section6.title": "6. Changes to Terms",
      "terms.section6.content": "We reserve the right to update these terms at any time. Significant changes will be communicated via the application or project website.",

      // Privacy Policy
      "policy.title": "Privacy Policy",
      "policy.intro": "Last updated: November 2025",
      "policy.section1.title": "1. Data Collection",
      "policy.section1.content": "SR Player collects minimal data to improve user experience. We only track download statistics (IP address and timestamp) via our website. The application itself does not collect or store any personal information.",
      "policy.section2.title": "2. Use of Data",
      "policy.section2.content": "The collected download statistics are used exclusively to understand application usage and improve the service. Data is not shared with third parties.",
      "policy.section3.title": "3. Cookies and Tracking",
      "policy.section3.content": "The website does not use cookies for tracking. The application uses local storage on your device to save your settings and favorites, but this data never leaves your device.",
      "policy.section4.title": "4. Radio Streaming",
      "policy.section4.content": "When you use SR Player to listen to radio, the application connects directly to Swedish Radio's servers. Your use of Swedish Radio's services is subject to their privacy policy.",
      "policy.section5.title": "5. Third-Party Services",
      "policy.section5.content": "The application uses Swedish Radio's public API to fetch channel information and livestreams. We have no control over and assume no responsibility for the content or privacy practices of Swedish Radio.",
      "policy.section6.title": "6. Data Security",
      "policy.section6.content": "We implement reasonable security measures to protect collected data. Since the application is open source, you can review how data is handled yourself.",
      "policy.section7.title": "7. Your Rights",
      "policy.section7.content": "You have the right to request deletion of any download data we have stored. Contact us via GitHub for such requests. All data stored locally in the application can be deleted by uninstalling the application.",
      "policy.section8.title": "8. Changes to Policy",
      "policy.section8.content": "We may update this privacy policy at any time. Changes take effect immediately upon publication.",

      // Feedback Page
      "feedback.title": "Beta Feedback",
      "feedback.subtitle": "Help us improve SR Player by sharing your experience. Your feedback is invaluable in helping us build a better product.",
      "feedback.back": "Back",
      "feedback.coreFeedback": "Core Feedback",
      "feedback.testerName": "Your name",
      "feedback.testerNamePlaceholder": "Enter your name",
      "feedback.testerEmail": "Your email",
      "feedback.testerEmailPlaceholder": "your@email.com",
      "feedback.overallRating": "Overall rating",
      "feedback.ratingHint": "1 = Very dissatisfied, 5 = Very satisfied",
      "feedback.whatWorkedWell": "What worked well?",
      "feedback.whatWorkedWellPlaceholder": "Describe positive experiences and favorite features...",
      "feedback.whatDidntWork": "What didn't work?",
      "feedback.whatDidntWorkPlaceholder": "Describe frustrations, confusing elements, or issues...",
      "feedback.bugReports": "Bug Reports",
      "feedback.bugDescription": "Bug description",
      "feedback.bugDescriptionPlaceholder": "Brief summary of the problem...",
      "feedback.stepsToReproduce": "Steps to reproduce",
      "feedback.stepsToReproducePlaceholder": "1. Open the app\n2. Click on...\n3. ...",
      "feedback.expectedVsActual": "Expected vs actual behavior",
      "feedback.expectedVsActualPlaceholder": "What did you expect to happen? What happened instead?",
      "feedback.userExperience": "User Experience",
      "feedback.easeOfUseRating": "How easy was the product to use?",
      "feedback.easeOfUseHint": "1 = Very difficult, 5 = Very easy",
      "feedback.mostValuableFeature": "Most valuable feature",
      "feedback.mostValuableFeaturePlaceholder": "Which feature did you find most useful?",
      "feedback.missingFeatures": "Missing features",
      "feedback.missingFeaturesPlaceholder": "What functionality did you expect but didn't find?",
      "feedback.wouldRecommend": "Would you recommend SR Player to others?",
      "feedback.recommend.yes": "Yes",
      "feedback.recommend.maybe": "Maybe",
      "feedback.recommend.no": "No",
      "feedback.additionalComments": "Additional comments",
      "feedback.additionalCommentsPlaceholder": "Anything else you'd like to share with us?",
      "feedback.technicalContext": "Technical Context",
      "feedback.deviceType": "Device type",
      "feedback.selectDevice": "Select device type",
      "feedback.device.desktop": "Desktop",
      "feedback.device.laptop": "Laptop",
      "feedback.device.tablet": "Tablet",
      "feedback.device.mobile": "Mobile",
      "feedback.browserOS": "Browser / Operating System",
      "feedback.browserOSPlaceholder": "e.g. Chrome / Windows 11",
      "feedback.screenshotLinks": "Screenshot links",
      "feedback.screenshotLinksPlaceholder": "URL to screenshots (optional)",
      "feedback.screenshotHint": "You can use services like Imgur or Google Drive to share images",
      "feedback.submit": "Submit Feedback",
      "feedback.submitting": "Submitting...",
      "feedback.successMessage": "Thank you for your feedback! We appreciate you taking the time to help us improve SR Player.",
      "feedback.errorMessage": "Something went wrong. Please try again later or contact us via GitHub.",
      "feedback.privacyNote": "Your feedback is stored securely and used only to improve SR Player.",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default to English, will be overridden by geo-detection
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true
    }
  });

// Detect country via IP and switch to Swedish if in Sweden
fetch('https://ipapi.co/country_code/')
  .then(res => res.text())
  .then(countryCode => {
    if (countryCode.trim() === 'SE') {
      i18n.changeLanguage('sv');
    }
  })
  .catch(() => {
    // Silently fall back to default (English)
  });

export default i18n;
