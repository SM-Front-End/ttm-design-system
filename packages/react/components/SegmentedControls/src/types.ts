export type SegmentedControlsProps = {
  size?: "xl" | "l" | "m" | "s" | "t";
  radius?: number;
  name?: string;
  source?: string;
  backgroundColor?: string;
  svg?: React.ReactNode;
  email?: string;
  className?: string;
  onPress?: () => void;
  onLongPress?: () => void;
};
