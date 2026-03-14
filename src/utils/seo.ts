import siteConfig from '@data/siteConfig.json';
import openingHours from '@data/openingHours.json';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export function getPageTitle(pageTitle?: string): string {
  if (!pageTitle) return siteConfig.name;
  return `${pageTitle} · ${siteConfig.name}`;
}

export function generateLocalBusinessSchema() {
  const dayMap: Record<string, string> = {
    Montag: 'Monday',
    Dienstag: 'Tuesday',
    Mittwoch: 'Wednesday',
    Donnerstag: 'Thursday',
    Freitag: 'Friday',
    Samstag: 'Saturday',
    Sonntag: 'Sunday',
  };

  const openingHoursSpec = openingHours
    .filter((h) => h.open)
    .map((h) => {
      const dayOfWeek = dayMap[h.day] || h.day;
      if (h.hours.includes('und')) {
        const parts = h.hours.split(' und ');
        return parts.map((part) => {
          const times = part.replace(/ Uhr/g, '').trim().split(' – ');
          return {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek,
            opens: times[0],
            closes: times[1],
          };
        });
      }
      const times = h.hours.replace(/ Uhr/g, '').trim().split(' – ');
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek,
        opens: times[0],
        closes: times[1],
      };
    })
    .flat();

  return {
    '@context': 'https://schema.org',
    '@type': 'PhysicalTherapy',
    name: siteConfig.name,
    description: siteConfig.tagline,
    url: 'https://therapiezentrum-ziesemer.de',
    telephone: '+492174892426',
    email: siteConfig.email,
    image: 'https://therapiezentrum-ziesemer.de/images/og-default.png',
    logo: 'https://therapiezentrum-ziesemer.de/favicon.svg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressCountry: 'DE',
    },
    openingHoursSpecification: openingHoursSpec,
    priceRange: '€',
  };
}
