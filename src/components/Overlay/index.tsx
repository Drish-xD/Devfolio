import { CSSProperties, FC } from 'react';

import styles from './overlay.module.scss';

interface OverlayProps {
  name: string;
  count: number;
  dir: 'row' | 'col';
  bg?: {
    color?: string;
    blur?: number;
  };
}

const Overlay: FC<OverlayProps> = ({ name, count, dir, bg }) => {
  return (
    <div
      className={`${styles.overlay} ${styles[dir]} overlay_${name}`}
      style={
        {
          '--count': count,
          '--bgBlur': `${bg?.blur || 25}%`,
          '--bgColor': bg?.color
        } as CSSProperties
      }
    >
      {Array.from({ length: count }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  );
};

export default Overlay;
