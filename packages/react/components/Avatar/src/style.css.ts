import { vars } from "@ttm/themes";
import { recipe } from "@vanilla-extract/recipes";

export const containerStyle = recipe({
  base: {
    position: "relative",
    backgroundColor: vars.colors.$scale.gray[100],
    border: `1px solid ${vars.colors.$scale.gray[200]}`,
    borderRadius: 9999,
    overflow: "hidden",
  },
  variants: {
    size: {
      xl: {
        width: 100,
        height: 100,
      },
      l: {
        width: 64,
        height: 64,
      },
      m: {
        width: 44,
        height: 44,
      },
      s: {
        width: 32,
        height: 32,
      },
      t: {
        width: 24,
        height: 24,
      },
    },
  },
});

export const placeholderStyle = recipe({
  base: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: vars.colors.$scale.gray[700],
  },
  variants: {
    size: {
      xl: {
        fontSize: vars.typography.fontSize[44],
        fontWeight: vars.typography.fontWeight[700],
      },
      l: {
        fontSize: vars.typography.fontSize[24],
        fontWeight: vars.typography.fontWeight[700],
      },
      m: {
        fontSize: vars.typography.fontSize[18],
        fontWeight: vars.typography.fontWeight[700],
      },
      s: {
        fontSize: vars.typography.fontSize[14],
        fontWeight: vars.typography.fontWeight[700],
      },
      t: {
        fontSize: vars.typography.fontSize[13],
        fontWeight: vars.typography.fontWeight[700],
      },
    },
  },
});

export const placeholderTextStyle = recipe({
  base: {
    fontSize: 20,
    color: "#a0a6b0",
  },
});

export const imageStyle = recipe({
  base: {
    position: "absolute",
  },
  variants: {
    size: {
      xl: {
        width: 100,
        height: 100,
      },
      l: {
        width: 64,
        height: 64,
      },
      m: {
        width: 44,
        height: 44,
      },
      s: {
        width: 32,
        height: 32,
      },
      t: {
        width: 24,
        height: 24,
      },
    },
  },
});
