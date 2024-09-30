import "@ttm/react-components-layout/style.css";
import { Text } from "@ttm/react-components-layout";
import { classes, vars } from "@ttm/themes";
import type { Meta } from "@storybook/react";

export default {
  title: "React Components/Typography/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: Object.keys(classes.typography.variant),
      control: "select",
    },
  },
} as Meta<typeof Text>;

export const TextStory = {
  args: {
    children: "Hello World",
    color: "gray800",
  },
};

export const TextVariantStory = {
  args: {
    children: "This is H1",
    variant: "h1",
  },
};

export const TextFontSizeStory = {
  args: {
    children: "This is 50px",
    fontSize: 50,
  },
};
