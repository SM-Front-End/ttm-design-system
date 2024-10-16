import {
  ChangeEvent,
  Children,
  cloneElement,
  useCallback,
  useState,
} from "react";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { SegmentedControlsOption } from "./SegmentedControlsOption";
import { SegmentedControlsProps } from "./types";
import {
  SegmentedControlsIndicatorStyle,
  SegmentedControlsStyle,
} from "./style.css";
import { useUID } from "react-uid";

function SegmentedControls(props: SegmentedControlsProps) {
  const [value, setValue] = useState(props.defaultValue);

  const uncontrolled = props.value == null;
  const { children, ...otherProps } = props;

  return (
    <ControlledRadio
      {...otherProps}
      value={uncontrolled ? value : props.value}
      onChange={(event) => {
        props.onChange?.(event);

        if (uncontrolled) {
          setValue(event.target.value);
        }
      }}
    >
      {children}
    </ControlledRadio>
  );
}

function ControlledRadio({
  className,
  children,
  disabled,
  value,
  shape = "rectangle",
  onChange,
  name,
}: SegmentedControlsProps) {
  const id = useUID();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
    },
    [onChange],
  );
  const checkedIndex = Children.map(children, (child) => {
    return child.props;
  }).findIndex((p) => p.value === value);

  const checked = checkedIndex !== -1;

  const numberOfChildren = Children.count(children);

  return (
    <div className={clsx([SegmentedControlsStyle({ shape }), className])}>
      <motion.div
        className={clsx([SegmentedControlsIndicatorStyle({ shape })])}
        style={{
          width: `calc((100% - 8px) / ${numberOfChildren})`,
        }}
        animate={checked ? "checked" : "unchecked"}
        variants={{
          checked: {
            opacity: 1,
            translateX: `${checkedIndex * 100}%`,
          },
          unchecked: {
            opacity: 0,
            translateX: 0,
          },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30, mass: 1 }}
      />
      {Children.map(children, (child) => {
        return cloneElement(child, {
          name: name ?? id,
          disabled,
          checked: value === child.props.value,
          onChange: handleChange,
        });
      })}
    </div>
  );
}

SegmentedControls.Option = SegmentedControlsOption;

export default SegmentedControls;
