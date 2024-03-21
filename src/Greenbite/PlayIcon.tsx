import { memo, SVGProps } from 'react';

const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 43 43' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_67_8)'>
      <path
        d='M40.6436 17.8301L6.93354 0.5481C4.1946 -0.855386 0 0.506577 0 3.97792V38.5336C0 41.6478 3.89772 43.5247 6.93354 41.9634L40.6436 24.6897C43.6507 23.1534 43.6602 19.3664 40.6436 17.8301Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_67_8'>
        <rect width={42.9037} height={42.5198} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(PlayIcon);
export { Memo as PlayIcon };
