import { clsx } from "clsx";
import { forwardRef, InputHTMLAttributes, Ref } from "react";
import {
  SegmentedControlsHiddenStyle,
  SegmentedControlsInputStyle,
  SegmentedControlsLabelStyle,
  SegmentedControlsOptionStyle,
  SegmentedControlsTextStyle,
} from "./style.css";
import { useUID } from "react-uid";

export const SegmentedControlsOption = forwardRef(
  (
    {
      className,
      children,
      checked,
      id: elementId,
      ...rest
    }: Omit<InputHTMLAttributes<HTMLInputElement>, "type">,
    forwardedRef: Ref<HTMLInputElement>,
  ) => {
    const uniqueId = useUID();
    const id = elementId ?? uniqueId;

    return (
      <div className={clsx([SegmentedControlsOptionStyle(), className])}>
        <input
          className={clsx([
            SegmentedControlsHiddenStyle(),
            SegmentedControlsInputStyle(),
          ])}
          id={id}
          type="radio"
          checked={checked}
          ref={forwardedRef}
          {...rest}
        />
        <label className={SegmentedControlsLabelStyle()} htmlFor={id}>
          <span
            className={clsx(
              SegmentedControlsTextStyle({
                checked,
              }),
            )}
          >
            {children}
          </span>
        </label>
      </div>
    );
  },
);
