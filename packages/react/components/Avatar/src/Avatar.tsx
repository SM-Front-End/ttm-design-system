import { clsx } from "clsx";
import { AvatarProps } from "./types";
import { containerStyle, imageStyle, placeholderStyle } from "./style.css";

export const Avatar = (props: AvatarProps) => {
  const { size = "m", name, source } = props;
  return (
    <div className={clsx([containerStyle({ size })])}>
      {name && (
        <span className={clsx([placeholderStyle({ size })])}>{name[0]}</span>
      )}
      {source && (
        <img
          className={clsx([imageStyle({ size })])}
          src={source}
          alt={name ?? source}
        />
      )}
    </div>
  );
};
