import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const TimeBox = ({ size = 24, color = '#fff' }) => (
<Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 8v5l3 3M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
            stroke="#b08d57"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
</Svg>
)