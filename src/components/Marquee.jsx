const ITEMS = [
  'Product Engineering',
  'Performance Marketing',
  'Cloud & DevOps',
  'Brand Strategy',
  'SEO & Content',
  'App Development',
  'Data & Analytics',
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
