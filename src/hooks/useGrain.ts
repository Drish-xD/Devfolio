import { useLayoutEffect, useRef } from 'react';

const useGrained = () => {
  const mainRef = useRef<HTMLElement>(null);

  const grained = (element: HTMLElement) => {
    if (!element) return;
    // Set style for parent
    const prefixes = ['', '-moz-', '-o-animation-', '-webkit-', '-ms-'];

    // Default option values
    const options = {
      animate: true,
      patternWidth: 100,
      patternHeight: 100,
      grainOpacity: 0.04,
      grainDensity: 1,
      grainWidth: 0.8,
      grainHeight: 0.8,
      grainChaos: 0.4,
      grainSpeed: 15
    };

    const generateNoise = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = options.patternWidth;
      canvas.height = options.patternHeight;
      for (let w = 0; w < options.patternWidth; w += options.grainDensity) {
        for (let h = 0; h < options.patternHeight; h += options.grainDensity) {
          const rgb = Math.floor(Math.random() * 256);
          ctx!.fillStyle = `rgba(${rgb}, ${rgb}, ${rgb}, ${options.grainOpacity})`;
          ctx!.fillRect(w, h, options.grainWidth, options.grainHeight);
        }
      }
      return canvas.toDataURL('image/png');
    };

    const addCSSRule = (sheet: CSSStyleSheet, selector: string, rules: string, index?: number) => {
      const ins = selector.length ? `${selector} {${rules}}` : rules;
      sheet.insertRule(ins, index);
    };

    const noise = generateNoise();

    let animation = '';
    const keyFrames = [
      '0%:-10%,10%',
      '10%:-25%,0%',
      '20%:-30%,10%',
      '30%:-30%,30%',
      '40%::-20%,20%',
      '50%:-15%,10%',
      '60%:-20%,20%',
      '70%:-5%,20%',
      '80%:-25%,5%',
      '90%:-30%,25%',
      '100%:-10%,10%'
    ];

    for (let pre = prefixes.length - 1; pre >= 0; pre--) {
      animation += `@${prefixes[pre]}keyframes grained{`;
      for (let key = 0; key < keyFrames.length; key++) {
        const keyVal = keyFrames[key].split(':');
        animation += `${keyVal[0]} {`;
        animation += `${prefixes[pre]}transform: translate(${keyVal[1]});`;
        animation += '}';
      }
      animation += '}';
    }

    // Add animation keyframe
    const animationAdded = document.getElementById('grained-animation');
    if (animationAdded) {
      animationAdded.parentElement?.removeChild(animationAdded);
    }
    const style = document.createElement('style');
    style.id = 'grained-animation';
    style.innerHTML = animation;
    document.body.appendChild(style);

    // Add customized style
    const styleAdded = document.getElementById('grained-animation-' + element.id);
    if (styleAdded) {
      styleAdded.parentElement?.removeChild(styleAdded);
    }

    const customStyle = document.createElement('style');
    customStyle.id = 'grained-animation-' + element.id;
    document.body.appendChild(customStyle);

    let rule = `background-image: url(${noise});`;
    rule += 'position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;';
    for (let pre = prefixes.length - 1; pre >= 0; pre--) {
      if (options.animate) {
        rule += `${prefixes[pre]}animation-name: grained;`;
        rule += `${prefixes[pre]}animation-iteration-count: infinite;`;
        rule += `${prefixes[pre]}animation-duration: ${options.grainChaos}s;`;
        rule += `${prefixes[pre]}animation-timing-function: steps(${options.grainSpeed}, end);`;
      }
    }

    const selectorElement = `#${element.id}::before`;

    addCSSRule(customStyle.sheet!, selectorElement, rule);
  };

  useLayoutEffect(() => {
    grained(mainRef.current!);
  }, [mainRef]);

  return mainRef;
};

export default useGrained;
