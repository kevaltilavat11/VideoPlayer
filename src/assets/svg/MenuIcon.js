import React from 'react';
import Svg, { Circle } from 'react-native-svg';

export const MenuIcon = ({
  size = 24,
  color = '#000',
  orientation = 'vertical', // 'vertical' or 'horizontal'
}) => {
  const isVertical = orientation === 'vertical';

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {isVertical ? (
        <>
          <Circle cx="12" cy="5" r="2" fill={color} />
          <Circle cx="12" cy="12" r="2" fill={color} />
          <Circle cx="12" cy="19" r="2" fill={color} />
        </>
      ) : (
        <>
          <Circle cx="5" cy="12" r="2" fill={color} />
          <Circle cx="12" cy="12" r="2" fill={color} />
          <Circle cx="19" cy="12" r="2" fill={color} />
        </>
      )}
    </Svg>
  );
};