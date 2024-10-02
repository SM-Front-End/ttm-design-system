// import "@ttm/react-components-segmented-controls/style.css";
import { SegmentedControls } from "@ttm/react-components-segmented-controls";
import type { Meta } from "@storybook/react";

export default {
  title: "React Components/Components/SegmentedControls",
  component: SegmentedControls,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // size: {
    //   options: ["xl", "l", "m", "s", "t"],
    //   control: "select",
    // },
    // source: {
    //   type: "string",
    // },
  },
} as Meta<typeof SegmentedControls>;

export const SegmentedControlsStory = {
  args: {},
};
