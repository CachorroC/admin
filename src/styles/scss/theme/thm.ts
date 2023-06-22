import tinycolor from 'tinycolor2';
const totalShades = 16;
const totalBrightnessSteps = 255;
const steps = totalBrightnessSteps / totalShades;
console.log(
  steps
);

const primaryHue = 333;
const primarySaturation = 97;
const primaryValue = 27;

const primaryColor = tinycolor(
  {
    h: primaryHue,
    s: primarySaturation,
    v: primaryValue,
  }
);
console.log(
  primaryColor
);

const getPrimaryBrightness = primaryColor.getBrightness();
console.log(
  getPrimaryBrightness
);
