import React from 'react';
import { termsContent, privacyContent } from './legalShiz';

const LegalPage = ({ content }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">{content.title}</h1>
        <div className="space-y-6 text-gray-300">
          {content.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-semibold mb-4 text-white">
                {section.title}
              </h2>
              <p>{section.content}</p>
              {section.list && (
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export const TermsPage = () => {
  return <LegalPage content={termsContent} />;
};

export const PrivacyPage = () => {
  return <LegalPage content={privacyContent} />;
};