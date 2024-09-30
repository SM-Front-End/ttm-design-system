import { classes } from "@ttm/themes";
import { recipe } from "@vanilla-extract/recipes";

export const textStyle = recipe({
  variants: {
    variant: {
      ...classes.typography.variant,
    },
    defaultVariants: {
      fontSize: "body2",
    },
  },
});
