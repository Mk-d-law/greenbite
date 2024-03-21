import { memo } from 'react';
import type { FC } from 'react';

import resets from './_resets.module.css';
import classes from './App.module.css';
import { Greenbite } from './Greenbite/Greenbite.js';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Greenbite />
    </div>
  );
});
