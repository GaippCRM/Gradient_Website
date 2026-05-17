import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
import SEO from '../components/SEO';

const TermsCondition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const termsSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://gradient-edu.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Terms and Conditions",
          "item": "https://gradient-edu.com/terms-condition"
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50/50 min-h-screen pb-24 font-sans">
      <SEO 
        title="Terms and Conditions | Gradient Edu Legal Agreement"
        description="Review the Terms and Conditions of using Gradient Edu. Read about our international admissions services, document handling policies, liability limitations, and user obligations."
        schemaMarkup={termsSchemas}
      />

      {/* Hero Header Section */}
      <div className="relative pt-20 pb-24 border-b border-gray-100 overflow-hidden bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/70">

        {/* Subtle Graph Paper Background overlay */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />

        {/* Floating Stars */}
        <div className="absolute top-16 right-[15%] text-yellow-400 opacity-60">
          <Star size={18} fill="currentColor" stroke="none" />
        </div>
        <div className="absolute bottom-24 left-[15%] text-yellow-400 opacity-60">
          <Star size={14} fill="currentColor" stroke="none" />
        </div>
        <div className="absolute bottom-16 right-[20%] text-yellow-400 opacity-60">
          <Star size={12} fill="currentColor" stroke="none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
          <span className="bg-blue-100 text-blue-600 rounded-full text-[10px] font-bold px-3 py-1 uppercase tracking-wider mb-6">
            Legal Document
          </span>
          <h1 className="text-4xl md:text-[44px] font-extrabold text-gray-900 mb-4 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-gray-500 text-[15px] mb-4 max-w-md">
            Please read these terms carefully before using Gradient Edu's services. Your continued use constitutes acceptance.
          </p>

          {/* Orange Squiggle */}
          <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
            <path d="M1 9.5C5.5 9.5 7.5 2.5 12 2.5C16.5 2.5 18.5 9.5 23 9.5C27.5 9.5 29.5 2.5 34 2.5C38.5 2.5 40.5 9.5 45 9.5C49.5 9.5 52.5 2.5 59 2.5" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-4 sm:px-6 -mt-8 relative z-20">

        {/* Description Box */}
        <div className="bg-[#EAF0FC] rounded-xl p-8 md:p-10 mb-8 border border-blue-100/50 text-center">
          <p className="text-[#4B5563] text-[15px] leading-[1.8] font-medium">
            Welcome to Gradient Edu. These Terms and Conditions govern your use of our services, website, and related platforms. By engaging with Gradient Edu, you confirm that you have read, understood, and agreed to these Terms. If you do not agree, you should not use our services. We reserve the right to update these Terms at any time. Continued use constitutes acceptance of the updated Terms.
          </p>
        </div>

        {/* 01 Scope of Services */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">01</span>
            <h3 className="text-gray-900 text-lg font-bold">Scope of Services</h3>
          </div>
          <div className="ml-[42px]">
            <p className="text-gray-500 text-[14px] leading-[1.8] mb-4">
              Gradient Edu provides end-to-end support for students seeking admission to international universities. Our services may include:
            </p>
            <ul className="text-gray-500 text-[14px] leading-[1.8] space-y-2 list-disc marker:text-blue-400 pl-4 mb-4">
              <li>Personalized counselling and course selection guidance</li>
              <li>University shortlisting and application strategy</li>
              <li>Documentation review (SOP, LOR, CV, academic records)</li>
              <li>Application submission support</li>
              <li>Interview and admission preparation</li>
              <li>Visa guidance and assistance</li>
              <li>Continuous updates and student support throughout the admission process</li>
            </ul>
            <p className="text-gray-500 text-[14px] leading-[1.8]">
              We do not provide financial, legal, or immigration advisory services beyond general guidance.
            </p>
          </div>
        </div>

        {/* 02 Service Charges */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">02</span>
            <h3 className="text-gray-900 text-lg font-bold">Service Charges</h3>
          </div>
          <ul className="text-gray-500 text-[14px] leading-relaxed space-y-3 ml-[42px] list-disc marker:text-blue-400">
            <li>Gradient Edu services may be free or paid, depending on the country, institution, or package.</li>
            <li>Any applicable fees will be clearly communicated in advance.</li>
            <li>Fees, once paid, are non-refundable unless explicitly agreed in writing.</li>
          </ul>
        </div>

        {/* 03 Documentation Handling */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">03</span>
            <h3 className="text-gray-900 text-lg font-bold">Documentation Handling</h3>
          </div>
          <div className="ml-[42px]">
            <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
              You agree to provide accurate, complete, and genuine information and documents.
            </p>
            <p className="text-[#374151] text-[15px] font-bold mb-3 tracking-wide">
              Gradient Edu:
            </p>
            <ul className="text-gray-500 text-[14px] leading-relaxed space-y-2 list-disc marker:text-blue-400 pl-4 mb-5">
              <li>Will review and process your documents for application purposes</li>
              <li>May share your documents with partner universities and institutions</li>
            </ul>
            <p className="text-[#374151] text-[15px] font-bold mb-3 tracking-wide">
              We are not responsible for:
            </p>
            <ul className="text-gray-500 text-[14px] leading-relaxed space-y-2 list-disc marker:text-blue-400 pl-4">
              <li>Incorrect or misleading information provided by you</li>
              <li>Rejection due to incomplete or inaccurate documentation</li>
            </ul>
          </div>
        </div>

        {/* 04 Consent for Data Sharing */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">04</span>
            <h3 className="text-gray-900 text-lg font-bold">Consent for Data Sharing</h3>
          </div>
          <div className="ml-[42px]">
            <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
              By using our services, you provide consent for Gradient Edu to:
            </p>
            <ul className="text-gray-500 text-[14px] leading-relaxed space-y-2 list-disc marker:text-blue-400 pl-4 mb-5">
              <li>Share your personal and academic information with partner universities</li>
              <li>Submit applications on your behalf</li>
              <li>Communicate with institutions regarding your application</li>
            </ul>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              All documents shared will be used strictly for admission-related purposes.
            </p>
          </div>
        </div>

        {/* 05 Right to Withdraw */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">05</span>
            <h3 className="text-gray-900 text-lg font-bold">Right to Withdraw</h3>
          </div>
          <div className="ml-[42px] text-gray-500 text-[14px] leading-[1.8]">
            You may withdraw your consent at any time by notifying us in writing. However, this may impact your application process. Gradient Edu will not be responsible for any delays or unsuccessful outcomes due to withdrawal.
          </div>
        </div>

        {/* 06 Data Protection & Confidentiality */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">06</span>
            <h3 className="text-gray-900 text-lg font-bold">Data Protection & Confidentiality</h3>
          </div>
          <div className="ml-[42px]">
            <p className="text-[#374151] text-[15px] font-bold mb-3 tracking-wide">
              We ensure:
            </p>
            <ul className="text-gray-500 text-[14px] leading-relaxed space-y-2 list-disc marker:text-blue-400 pl-4 mb-5">
              <li>Secure handling of personal data</li>
              <li>Use of data only for intended purposes</li>
              <li>No unauthorized sharing with third parties</li>
            </ul>
            <p className="text-[#374151] text-[15px] font-bold mb-3 tracking-wide">
              You have the right to:
            </p>
            <ul className="text-gray-500 text-[14px] leading-relaxed space-y-2 list-disc marker:text-blue-400 pl-4">
              <li>Access your data</li>
              <li>Request corrections</li>
              <li>Request deletion (subject to application requirements)</li>
            </ul>
          </div>
        </div>

        {/* 07 Limitation of Liability */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">07</span>
            <h3 className="text-gray-900 text-lg font-bold">Limitation of Liability</h3>
          </div>
          <div className="ml-[42px]">
            <p className="text-[#374151] text-[15px] font-bold mb-3 tracking-wide">
              Gradient Edu does not guarantee:
            </p>
            <ul className="text-gray-500 text-[14px] leading-relaxed space-y-2 list-disc marker:text-blue-400 pl-4 mb-5">
              <li>Admission to any university</li>
              <li>Visa approval</li>
              <li>Scholarships or funding</li>
            </ul>
            <p className="text-[#374151] text-[15px] font-bold mb-3 tracking-wide">
              We are not liable for:
            </p>
            <ul className="text-gray-500 text-[14px] leading-relaxed space-y-2 list-disc marker:text-blue-400 pl-4">
              <li>Decisions made by universities or immigration authorities</li>
              <li>Visa rejections or delays</li>
              <li>Any indirect or consequential losses</li>
            </ul>
          </div>
        </div>

        {/* 08 Student Responsibilities */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">08</span>
            <h3 className="text-gray-900 text-lg font-bold">Student Responsibilities</h3>
          </div>
          <div className="ml-[42px]">
            <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="text-gray-500 text-[14px] leading-relaxed space-y-2 list-disc marker:text-blue-400 pl-4 mb-5">
              <li>Provide truthful and complete information</li>
              <li>Respond promptly to communication</li>
              <li>Follow application deadlines</li>
              <li>Maintain professional conduct with our team</li>
            </ul>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Any misconduct may result in termination of services.
            </p>
          </div>
        </div>

        {/* 09 Termination of Services */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">09</span>
            <h3 className="text-gray-900 text-lg font-bold">Termination of Services</h3>
          </div>
          <div className="ml-[42px]">
            <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
              Either party may terminate the engagement with written notice. Gradient Edu reserves the right to terminate services if:
            </p>
            <ul className="text-gray-500 text-[14px] leading-relaxed space-y-2 list-disc marker:text-blue-400 pl-4">
              <li>There is a breach of these Terms</li>
              <li>Misrepresentation of information is found</li>
              <li>Unprofessional or abusive behaviour occurs</li>
              <li>Continuation of services is not feasible</li>
            </ul>
          </div>
        </div>

        {/* 10 Intellectual Property */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">10</span>
            <h3 className="text-gray-900 text-lg font-bold">Intellectual Property</h3>
          </div>
          <div className="ml-[42px] text-gray-500 text-[14px] leading-[1.8]">
            All content, materials, branding, and systems used by Gradient Edu are protected by intellectual property laws. You may not copy, reproduce, or distribute any materials without written permission.
          </div>
        </div>

        {/* 11 Use of Website */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">11</span>
            <h3 className="text-gray-900 text-lg font-bold">Use of Website</h3>
          </div>
          <div className="ml-[42px]">
            <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="text-gray-500 text-[14px] leading-relaxed space-y-2 list-disc marker:text-blue-400 pl-4">
              <li>Use the website for unlawful purposes</li>
              <li>Attempt unauthorized access</li>
              <li>Disrupt or misuse the platform</li>
            </ul>
          </div>
        </div>

        {/* 12 Disclaimer */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">12</span>
            <h3 className="text-gray-900 text-lg font-bold">Disclaimer</h3>
          </div>
          <div className="ml-[42px] text-gray-500 text-[14px] leading-[1.8]">
            All services are provided on a best-effort basis. Gradient Edu makes no warranties regarding the accuracy of third-party information, availability of universities or courses, or outcomes of applications.
          </div>
        </div>

        {/* 13 Indemnification */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">13</span>
            <h3 className="text-gray-900 text-lg font-bold">Indemnification</h3>
          </div>
          <div className="ml-[42px]">
            <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
              You agree to indemnify Gradient Edu against any claims, damages, or losses arising from:
            </p>
            <ul className="text-gray-500 text-[14px] leading-relaxed space-y-2 list-disc marker:text-blue-400 pl-4">
              <li>Your misuse of services</li>
              <li>Violation of these Terms</li>
              <li>Submission of false or misleading information</li>
            </ul>
          </div>
        </div>

        {/* 14 Governing Law */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">14</span>
            <h3 className="text-gray-900 text-lg font-bold">Governing Law</h3>
          </div>
          <div className="ml-[42px] text-gray-500 text-[14px] leading-[1.8]">
            These Terms shall be governed by and interpreted in accordance with applicable laws. Any disputes shall be subject to the jurisdiction of the courts in the relevant region.
          </div>
        </div>

        {/* 15 Entire Agreement */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">15</span>
            <h3 className="text-gray-900 text-lg font-bold">Entire Agreement</h3>
          </div>
          <div className="ml-[42px] text-gray-500 text-[14px] leading-[1.8]">
            These Terms, along with any service agreements or policies, constitute the full agreement between you and Gradient Edu.
          </div>
        </div>

        {/* 16 Severability & No Waiver */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">16</span>
            <h3 className="text-gray-900 text-lg font-bold">Severability & No Waiver</h3>
          </div>
          <div className="ml-[42px] text-gray-500 text-[14px] leading-[1.8]">
            If any provision of these Terms is found invalid, the remaining provisions will remain enforceable. Failure to enforce any provision does not constitute a waiver of rights.
          </div>
        </div>

        {/* 17 Contact Information */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-6">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">17</span>
            <h3 className="text-gray-900 text-lg font-bold">Contact Information</h3>
          </div>
          <div className="ml-[42px] bg-[#F4F2FF] rounded-lg p-6 border border-blue-100/30 inline-block w-full max-w-lg">
            <p className="text-gray-900 font-bold mb-1">Gradient Edu</p>
            <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
              Shams Business Centre,<br />
              Sharjah Media City,<br />
              Sharjah, UAE
            </p>
            <p className="text-gray-600 text-[14px] mb-2 cursor-pointer group">
              <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Email:</span> info@gradient-edu.com
            </p>
            <p className="text-gray-600 text-[14px] cursor-pointer group">
              <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Contact:</span> +44 7892 838321
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TermsCondition;
