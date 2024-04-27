import { memo } from 'react';

interface OverlayProps {
  id: string;
  count: number;
  className?: string;
}

const Overlay = memo(function Overlay({ id, className = '', count }: OverlayProps) {
  return (
    <div className={className} id={`overlay_${id}`} aria-hidden='true'>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  );
});

export default Overlay;
