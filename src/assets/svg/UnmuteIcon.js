import Svg, { Path } from 'react-native-svg';

export const UnmuteIcon = ({ size = 24, color = '#000', strokeWidth = 2 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 9v6h4l5 5V4l-5 5H4Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);