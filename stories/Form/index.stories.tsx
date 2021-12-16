import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import BaseCard from "../../packages/tuna-base-card/src";
import { BaseForm } from "../../packages/tuna-form/src";
import { FormProps } from "../../packages/tuna-form/src/common/interface";

export default {
  title: "Tuna_Component/BaseForm",
  component: BaseForm,
  argTypes: {},
} as Meta;

const Template: Story<FormProps> = (args) => {
  return <BaseForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: "hansin",
};
