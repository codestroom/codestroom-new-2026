const ITEMS = [
  'Restaurants',
  'Religious Organizations',
  'Entrepreneurs',
  'Public Leaders',
  'E-commerce',
  'Retail',
  'Personal Brands',
  'And More',
];

export default function Marquee() {
  const items = [...ITEMS, ...ITEMS];
  return (
    <div className="strip">
      <div className="strip-track">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
