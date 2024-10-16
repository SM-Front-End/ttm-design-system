import "@ttm/react-components-segmented-controls/style.css";
import React from "react";
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
    shape: {
      options: ["round", "rectangle"],
      control: "select",
    },
  },
  decorators: [
    (Story, context) => (
      <div style={{ width: "355px" }}>
        <Story {...context} />
      </div>
    ),
  ],
} as Meta<typeof SegmentedControls>;

export const SegmentedControlsStory = {
  args: {
    shape: "rectangle",
  },
  decorators: [
    (_, context) => (
      <SegmentedControls defaultValue={"치킨"} shape={context.args.shape}>
        <SegmentedControls.Option value={"치킨"}>
          {"치킨"}
        </SegmentedControls.Option>
        <SegmentedControls.Option value={"피자"}>
          {"피자"}
        </SegmentedControls.Option>
      </SegmentedControls>
    ),
  ],
};

export const ThreeSegmentedControlsStory = {
  args: {
    shape: "rectangle",
  },
  decorators: [
    (_, context) => (
      <SegmentedControls defaultValue={"치킨"} shape={context.args.shape}>
        <SegmentedControls.Option value={"치킨"}>
          {"치킨"}
        </SegmentedControls.Option>
        <SegmentedControls.Option value={"피자"}>
          {"피자"}
        </SegmentedControls.Option>
        <SegmentedControls.Option value={"햄버거"}>
          {"햄버거"}
        </SegmentedControls.Option>
      </SegmentedControls>
    ),
  ],
};
