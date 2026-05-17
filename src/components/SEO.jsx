import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = 'website',
  ogTitle,
  ogDescription,
  ogImage,
  schemaMarkup,
}) => {
  const defaultTitle = 'Gradient Edu - International Education & Study Abroad Services';
  const defaultDescription =
    'Gradient Edu helps students study abroad in the UK, Germany, USA, Australia, and Ireland. Explore top universities, find courses, and get expert guidance.';
  const defaultKeywords =
    'study abroad, study in UK, study in Germany, study in USA, study in Australia, study in Ireland, international education, course search, university application';
  const siteUrl = 'https://gradient-edu.com';
  const defaultImage = `${siteUrl}/image/logo_second.png`;

  const seoTitle = title ? title : defaultTitle;
  const seoDescription = description ? description : defaultDescription;
  const seoKeywords = keywords ? keywords : defaultKeywords;
  
  // Construct absolute canonical URL based on the current window location unless overridden
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const seoCanonicalUrl = canonicalUrl || `${siteUrl}${currentPath === '/' ? '' : currentPath}`;
  
  const seoOgTitle = ogTitle || seoTitle;
  const seoOgDescription = ogDescription || seoDescription;
  const seoOgImage = ogImage || defaultImage;
  const seoOgUrl = seoCanonicalUrl;

  return (
    <Helmet>
      {/* General Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={seoCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="Gradient Edu" />
      <meta property="og:title" content={seoOgTitle} />
      <meta property="og:description" content={seoOgDescription} />
      <meta property="og:image" content={seoOgImage} />
      <meta property="og:url" content={seoOgUrl} />
      <meta property="og:type" content={ogType} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoOgTitle} />
      <meta name="twitter:description" content={seoOgDescription} />
      <meta name="twitter:image" content={seoOgImage} />

      {/* Structured Data (Schema Markup) */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
