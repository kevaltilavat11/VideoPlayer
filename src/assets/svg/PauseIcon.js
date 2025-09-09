import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

export const PauseIcon = ({ size = 24, color = '#fff' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x="6" y="5" width="4" height="14" fill={color} />
    <Rect x="14" y="5" width="4" height="14" fill={color} />
  </Svg>
);