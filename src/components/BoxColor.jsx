import React from 'react';

const BoxColor = ({ r, g, b }) => {
  /*const accurateRed = r > 256 ? 256 : r;
  const accurateGreen = g > 256 ? 256 : g;
  const accurateBlue = b > 256 ? 256 : b;*/
  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  const hexColor = rgbToHex(r, g, b);
  const textColor = r + g + b > (255 * 3) / 2 ? 'black' : 'white';
  return (
    <div style={{ backgroundColor: rgbColor }}>
      {rgbColor}
      <br />
      {hexColor}
    </div>
  );
};

export default BoxColor;
