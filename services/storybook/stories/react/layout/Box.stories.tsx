import "@ttm/react-components-layout/style.css";
import { Box } from "@ttm/react-components-layout";

export default {
  title: "React Components/Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BoxStory = {
  args: {
    as: "button",
    padding: "5",
  },
};
