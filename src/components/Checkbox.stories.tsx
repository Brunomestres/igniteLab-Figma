import { CheckboxProps, Checkbox } from "./Checkbox";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (story) => {
      return (
        <div className="flex items-center gap-2">
          {story()}
          <Text size="sm">Lembrar-me por 30 dias</Text>
        </div>
      )
    }
  ] ,
  argTypes: {}
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
