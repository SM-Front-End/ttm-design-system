import * as React from "react";
import { TextProps } from "./types";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { vars } from "@ttm/themes";
import { clsx } from "clsx";
import { extractSprinkleProps } from "../utils/properties";
import { textStyle } from "./style.css";
import { Color } from "../core/types";

export const Text = React.forwardRef(
  (props: TextProps, ref: React.Ref<HTMLElement>) => {
    const {
      as = "span",
      color = "gray800",
      // background,
      children,
      fontSize,
    } = props;
    const match = color.match(/([a-zA-Z]+)(\d+)/)!;
    const $color = match[0] as Color;
    const $brightness = match[1] as string;

    return React.createElement(
      as,
      {
        ...props,
        ref,
        className: clsx([
          BaseStyle,
          StyleSprinkles(
            extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
          ),
          textStyle({
            fontSize,
          }),
          props.className,
        ]),
        style: {
          //@ts-ignore
          color: color && vars.colors.$scale?.[$color]?.[$brightness],
          // background: background && vars.colors.$scale?.[background]?.[100],
          ...props.style,
        },
      },
      children,
    );
  },
);
