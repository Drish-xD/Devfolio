export default function Noise({ id }: { id: number }) {
  return (
    <svg style={{ display: 'none' }}>
      <defs>
        <filter id={`noise_${id}`}>
          <feTurbulence baseFrequency="0.7,0.8" seed="0" type="fractalNoise" result="static">
            <animate
              attributeName="seed"
              values="0;100"
              dur="800ms"
              repeatCount="1"
              begin={`card_${id}.mouseenter`}
              end={`card_${id}.mouseleave`}
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="static">
            <animate
              attributeName="scale"
              values="0;40;0"
              dur="800ms"
              repeatCount="1"
              begin={`card_${id}.mouseenter`}
              end={`card_${id}.mouseleave`}
            />
          </feDisplacementMap>
        </filter>
      </defs>
    </svg>
  );
}
