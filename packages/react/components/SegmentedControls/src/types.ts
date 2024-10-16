import { ComponentProps, InputHTMLAttributes, ReactElement } from "react";
import { SegmentedControlsOption } from "./SegmentedControlsOption";

type SegmentedControlsOptionElement = ReactElement<
  ComponentProps<typeof SegmentedControlsOption>
>;

export type SegmentedControlsProps = {
  children: SegmentedControlsOptionElement | SegmentedControlsOptionElement[];
  shape?: "rectangle" | "round";
} & Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "disabled" | "value" | "defaultValue" | "onChange" | "name"
>;
