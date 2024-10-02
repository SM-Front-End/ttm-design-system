import "@ttm/react-components-avatar/style.css";
import { Avatar } from "@ttm/react-components-avatar";
import type { Meta } from "@storybook/react";

export default {
  title: "React Components/Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xl", "l", "m", "s", "t"],
      control: "select",
    },
    source: {
      type: "string",
    },
  },
} as Meta<typeof Avatar>;

export const AvatarImageStory = {
  args: {
    name: "강동원",
    source:
      "https://img.freepik.com/free-psd/3d-render-of-avatar-character_23-2150611746.jpg",
  },
};

export const AvatarTextStory = {
  args: {
    name: "강동원",
  },
};
