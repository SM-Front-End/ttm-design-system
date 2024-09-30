import "@ttm/react-components-layout/style.css";
import { Flex } from "@ttm/react-components-layout";
import React from "react";

export default {
  title: "React Components/Layout/Flex",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const FlexStory = {
  args: {
    as: "div",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
    style: {
      width: "300px",
    },
  },
  render: (args) => (
    <Flex {...args}>
      <div>테스트</div>
      <div>입니다</div>
    </Flex>
  ),
};
