import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const PlayIcon = ({ size = 24, color = '#fff' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M8 5v14l11-7-11-7z"
      fill={color}
    />
  </Svg>
);