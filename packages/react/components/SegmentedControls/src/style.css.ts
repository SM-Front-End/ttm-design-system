import { vars } from "@ttm/themes";
import { recipe } from "@vanilla-extract/recipes";

export const SegmentedControlsStyle = recipe({
  base: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: vars.colors.$scale.gray[200],
  },
  variants: {
    shape: {
      rectangle: { borderRadius: 8 },
      round: { borderRadius: 24 },
    },
  },
});

export const SegmentedControlsOptionStyle = recipe({
  base: {
    zIndex: 1,
    flex: 1,
    height: 34,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    shape: {
      rectangle: { borderRadius: 8 },
      round: { borderRadius: 24 },
    },
  },
});

export const SegmentedControlsIndicatorStyle = recipe({
  base: {
    position: "absolute",
    top: 2,
    bottom: 2,
    left: 2,
    right: 2,
    zIndex: 0,
    opacity: 0,
    backgroundColor: "white",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.09)",
  },
  variants: {
    shape: {
      rectangle: { borderRadius: 8 },
      round: { borderRadius: 24 },
    },
  },
});

export const SegmentedControlsHiddenStyle = recipe({
  base: {
    position: "absolute",
    padding: 0,
    margin: "-1px",
    width: 1,
    height: 1,
    border: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
    WebkitAppearance: "none",
  },
});

export const SegmentedControlsLabelStyle = recipe({
  base: {
    width: "100%",
    textAlign: "center",
    cursor: "pointer",
    margin: 0,
    color: vars.colors.$scale.gray[800],
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    WebkitAppearance: "none",
  },
});

export const SegmentedControlsInputStyle = recipe({
  base: {
    color: vars.colors.$scale.gray[400],
  },
});

export const SegmentedControlsTextStyle = recipe({
  base: {
    fontSize: 13,
    maxWidth: "100%",
    whiteSpace: "nowrap",
    translate: "color 0.2s ease",
  },
  variants: {
    checked: {
      true: {
        color: vars.colors.$scale.gray[800],
        fontWeight: vars.typography.fontWeight[700],
      },
      false: {
        color: vars.colors.$scale.gray[600],
        fontWeight: vars.typography.fontWeight[400],
      },
    },
  },
});
