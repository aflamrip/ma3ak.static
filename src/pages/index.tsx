import Head from 'next/head';
import { Dracula } from '@themes/dracula';
import { DATA } from '@lib/data';
import { GA4 } from '@utils/ga4';

export default function Home() {
  const { user, links } = DATA;
  const GA4ID = process.env.NEXT_PUBLIC_GA4_ID;

  const pageTitle = "معاك سينما | Ma3ak Cinema - روابط مشاهدة الأفلام والمسلسلات اون لاين";
  const pageDescription = "موقع معاك سينما Ma3ak Cinema لمشاهدة وتحميل أحدث الأفلام والمسلسلات العربية والأجنبية والتركية والأنمي مترجمة ومدبلجة بجودة عالية عبر a.ma3ak.top";
  const siteUrl = "https://ma3ak.ovh";
  const logoUrl = `${siteUrl}/images/logo.jpg`;

  const structuredDataWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "معاك سينما | Ma3ak Cinema",
    "alternateName": "Ma3ak Cinema",
    "url": siteUrl,
    "description": pageDescription,
    "inLanguage": "ar",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://a.ma3ak.top/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const structuredDataOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "معاك سينما",
    "url": siteUrl,
    "logo": logoUrl,
    "sameAs": [
      "https://a.ma3ak.top"
    ]
  };

  const structuredDataItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "أهم روابط موقع معاك سينما",
    "itemListElement": links.map((link, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": link.label.replace(/^[^\s]+\s/, ''),
      "url": link.url
    }))
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="معاك سينما, ma3ak cinema, ma3ak.ovh, a.ma3ak.top, افلام اون لاين, مسلسلات, انمي مترجم, مشاهدة افلام, افلام عربي, افلام اجنبي" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Canonical Link */}
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/images/favicon.png" type="image/png" />

        {/* Open Graph / Facebook */}
        <meta property="og:locale" content="ar_AR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="معاك سينما" />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="شعار معاك سينما Ma3ak Cinema" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={logoUrl} />

        {/* Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataItemList) }}
        />
      </Head>

      <Dracula data={DATA} />
      {GA4ID && <GA4 ga4Id={GA4ID} />}
    </>
  );
}
