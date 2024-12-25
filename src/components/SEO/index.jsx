import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = '/logo.png',
  url,
  type = 'website',
  article = false,
  lang = 'es',
  noindex = false,
  structuredData
}) => {
  const siteTitle = 'Bairesoft - Desarrollo de Software a Medida';
  const defaultDescription = 'Expertos en desarrollo de software personalizado, aplicaciones web, móviles y soluciones empresariales. Transformamos ideas en soluciones digitales innovadoras.';
  const defaultKeywords = 'desarrollo software, aplicaciones web, desarrollo móvil, software empresarial, transformación digital, tecnología, innovación, low-code, machine learning, consultoría IT';
  const siteUrl = process.env.NODE_ENV === 'production' ? 'https://bairesoft.com' : 'http://localhost:3000';

  const seo = {
    title: title ? `${title} | ${siteTitle}` : siteTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: image.startsWith('http') ? image : `${siteUrl}${image}`,
    url: `${siteUrl}${url || ''}`,
    type: article ? 'article' : type,
  };

  // Generar el schema por defecto si no se proporciona uno personalizado
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': article ? 'Article' : 'Organization',
    name: siteTitle,
    description: seo.description,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      'https://www.linkedin.com/company/bairesoft',
      'https://twitter.com/bairesoft',
      'https://github.com/bairesoft'
    ],
    ...(article && {
      headline: title,
      image: seo.image,
      datePublished: article.publishedTime,
      dateModified: article.modifiedTime,
      author: {
        '@type': 'Person',
        name: article.author
      }
    })
  };

  const schema = structuredData || defaultSchema;

  return (
    <Helmet>
      {/* Metadatos básicos */}
      <html lang={lang} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={seo.url} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta charSet="utf-8" />

      {/* Seguridad */}
      <meta http-equiv="X-Content-Type-Options" content="nosniff" />
      <meta http-equiv="X-Frame-Options" content="DENY" />
      <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

      {/* PWA */}
      <meta name="theme-color" content="#ffffff" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content={lang === 'es' ? 'es_ES' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:site" content="@bairesoft" />

      {/* Metadatos adicionales para artículos */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
          {article.tags?.map((tag) => (
            <meta property="article:tag" content={tag} key={tag} />
          ))}
        </>
      )}

      {/* Schema.org markup para Google */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      {/* Precargar recursos críticos */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  article: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      publishedTime: PropTypes.string,
      modifiedTime: PropTypes.string,
      author: PropTypes.string,
      section: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string)
    })
  ]),
  lang: PropTypes.string,
  noindex: PropTypes.bool,
  structuredData: PropTypes.object
};

export default React.memo(SEO);
