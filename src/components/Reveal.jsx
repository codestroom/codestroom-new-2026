import { useEffect, useRef, useState } from 'react';

export default function Reveal({ as: Tag = 'div', immediate = false, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate]);

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
