import { CSSProperties, FC } from 'react';

import styles from './overlay.module.scss';

interface OverlayProps {
  name: string;
  count: number;
  dir: 'row' | 'col';
}

const Overlay: FC<OverlayProps> = ({ name, count, dir }) => {
  return (
    <div
      className={`${styles.overlay} ${styles[dir]} overlay_${name}`}
      style={{ '--count': count } as CSSProperties}
    >
      {Array.from({ length: count }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  );
};

export default Overlay;
