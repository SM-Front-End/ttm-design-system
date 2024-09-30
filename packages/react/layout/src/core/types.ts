import { vars } from "@ttm/themes";
import { StyleSprinkles } from "./style.css";

// palette
type GrayKeys = keyof (typeof vars.colors.$scale)["gray"]; // '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800'
type VioletKeys = keyof (typeof vars.colors.$scale)["violet"]; // '200' | '400' | '500' | '600' | '800'
type RedKeys = keyof (typeof vars.colors.$scale)["red"]; // '500' | '600
type OrangeKeys = keyof (typeof vars.colors.$scale)["orange"]; // '500' | '600
type GreenKeys = keyof (typeof vars.colors.$scale)["green"]; // '500' | '600
type BlueKeys = keyof (typeof vars.colors.$scale)["blue"]; // '500' | '600
export type Color = keyof typeof vars.colors.$scale;

type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">;

export type AsElementProps = AsProps & ElementProps;

export type ColorProps = {
  color?:
    | `${Color}${GrayKeys}`
    | `${Color}${VioletKeys}`
    | `${Color}${RedKeys}`
    | `${Color}${OrangeKeys}`
    | `${Color}${GreenKeys}`
    | `${Color}${BlueKeys}`;
  // background?: Color;
};

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;
