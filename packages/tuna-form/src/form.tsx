/**
 * 搜索表单
 */
import React from "react";
import BaseCard from "@tuna/tuna-base-card";
import { FormProps } from "./common/interface";

export interface IFormValues {
  [key: string]: any;
}

function Form({ name }: FormProps) {
  return (
    <BaseCard>
      <div>Form: {name}</div>
    </BaseCard>
  );
}

export default Form;
