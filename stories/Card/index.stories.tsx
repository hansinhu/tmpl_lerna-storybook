import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Card, { IProps } from "../../packages/card/src/index";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
} as Meta;

const Template: Story<IProps> = (args) => (
  <Card {...args}>
    <p>hello world</p>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  title: "Card Title",
};
