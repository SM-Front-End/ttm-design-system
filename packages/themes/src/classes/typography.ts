import { typography } from "../variables";

const baseStyle = {
  lineHeight: typography.lineHeight[187],
  letterSpacing: typography.letterSpacing["Negative03"],
};

export const text = {
  h1: {
    ...baseStyle,
    fontSize: typography.fontSize[24],
    fontWeight: typography.fontWeight[700],
  },
  h2: {
    ...baseStyle,
    fontSize: typography.fontSize[22],
    fontWeight: typography.fontWeight[700],
  },
  h3: {
    ...baseStyle,
    fontSize: typography.fontSize[20],
    fontWeight: typography.fontWeight[700],
  },
  h4: {
    ...baseStyle,
    fontSize: typography.fontSize[18],
    fontWeight: typography.fontWeight[700],
  },
  h5: {
    ...baseStyle,
    fontSize: typography.fontSize[16],
    fontWeight: typography.fontWeight[700],
  },
  h6: {
    ...baseStyle,
    fontSize: typography.fontSize[15],
    fontWeight: typography.fontWeight[700],
  },
  h7: {
    ...baseStyle,
    fontSize: typography.fontSize[14],
    fontWeight: typography.fontWeight[700],
  },
  h8: {
    ...baseStyle,
    fontSize: typography.fontSize[13],
    fontWeight: typography.fontWeight[700],
  },
  body1: {
    ...baseStyle,
    fontSize: typography.fontSize[18],
    fontWeight: typography.fontWeight[400],
  },
  body2: {
    ...baseStyle,
    fontSize: typography.fontSize[16],
    fontWeight: typography.fontWeight[400],
  },
  body3: {
    ...baseStyle,
    fontSize: typography.fontSize[15],
    fontWeight: typography.fontWeight[400],
  },
  body4: {
    ...baseStyle,
    fontSize: typography.fontSize[14],
    fontWeight: typography.fontWeight[400],
  },
  body5: {
    ...baseStyle,
    fontSize: typography.fontSize[13],
    fontWeight: typography.fontWeight[400],
  },
  body6: {
    ...baseStyle,
    fontSize: typography.fontSize[12],
    fontWeight: typography.fontWeight[400],
  },
};
