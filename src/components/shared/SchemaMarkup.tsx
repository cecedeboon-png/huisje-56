export function SchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Huisje 56',
    description:
      'Vrijstaand A-frame piramidehuisje direct aan het water op Recreatiepark de Liuwe Daem in Gaastmeer, Friesland. Eigen aanlegsteiger, steigerterras, 4 slaapkamers voor 6 personen.',
    url: 'https://huisje56.nl',
    image: 'https://huisje56.nl/images/gallery/foto-aanzicht.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Liuwedaem 56',
      addressLocality: 'Gaastmeer',
      postalCode: '8611 JJ',
      addressRegion: 'Friesland',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.9856,
      longitude: 5.5582,
    },
    telephone: process.env.OWNER_PHONE ?? '+31622522854',
    email: process.env.OWNER_EMAIL ?? 'liuwedaem56@gmail.com',
    priceRange: '€€',
    numberOfRooms: 4,
    petsAllowed: false,
    checkinTime: '15:00',
    checkoutTime: '10:00',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parkeerplaats', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Terras aan het water', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Eigen aanlegsteiger', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Centrale verwarming', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Babyledikant', value: true },
    ],
    containsPlace: {
      '@type': 'Accommodation',
      name: 'Huisje 56 — Piramidehuisje aan het water',
      numberOfRooms: 4,
      floorSize: {
        '@type': 'QuantitativeValue',
        value: 70,
        unitCode: 'MTK',
      },
      occupancy: {
        '@type': 'QuantitativeValue',
        minValue: 1,
        maxValue: 6,
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
