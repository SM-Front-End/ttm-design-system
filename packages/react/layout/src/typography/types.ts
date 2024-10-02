import { classes } from "@ttm/themes";
import { AsElementProps, StyleProps } from "../core/types";
import { CSSProperties } from "@vanilla-extract/css";

export type TextProps = AsElementProps &
  StyleProps & {
    fontSize?: number;
    variant?: keyof typeof classes.typography.variant;
    align?: CSSProperties["textAlign"];
    casing?: CSSProperties["textTransform"];
    decoration?: CSSProperties["textDecoration"];
  };
