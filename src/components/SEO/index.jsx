import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = '/logo.png',
  url,
  type = 'website',
  article = false 
}) => {
  const siteTitle = 'Bairesoft - Desarrollo de Software a Medida';
  const defaultDescription = 'Expertos en desarrollo de software personalizado, aplicaciones web, móviles y soluciones empresariales. Transformamos ideas en soluciones digitales innovadoras.';
  const defaultKeywords = 'desarrollo software, aplicaciones web, desarrollo móvil, software empresarial, transformación digital, tecnología, innovación';
  const siteUrl = 'https://bairesoft.com';

  const seo = {
    title: title ? `${title} | ${siteTitle}` : siteTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${url || ''}`,
    type: article ? 'article' : type,
  };

  return (
    <Helmet>
      {/* Metadatos básicos */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={seo.url} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Metadatos adicionales para artículos */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author} />
          {article.tags?.map((tag) => (
            <meta property="article:tag" content={tag} key={tag} />
          ))}
        </>
      )}

      {/* Schema.org markup para Google */}
      <script type="application/ld+json">
        {JSON.stringify({
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
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
