import { FC } from 'react';

interface OverlayProps {
  id: string;
  count: number;
  className?: string;
}

const Overlay: FC<OverlayProps> = ({ id, className = '', count }) => {
  return (
    <div className={className} id={`overlay_${id}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  );
};

export default Overlay;
