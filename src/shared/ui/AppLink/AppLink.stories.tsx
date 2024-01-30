import type { Meta, StoryObj } from "@storybook/react";

import { AppLink } from "./AppLink";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof AppLink> = {
 component: AppLink,
 title: "widgets/AppLink",
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const LightClear: Story = {
 render: () => <AppLink to="/">AppLink</AppLink>,
};

export const DarkClear: Story = {
 decorators: [ThemeDecorator(Theme.DARK)],
 render: () => <AppLink to="/">AppLink</AppLink>,
};

export const LightOutline: Story = {
 render: () => (
  <AppLink variant="outlined" to="/">
   AppLink
  </AppLink>
 ),
};

export const DarkOutline: Story = {
 decorators: [ThemeDecorator(Theme.DARK)],
 render: () => (
  <AppLink variant="outlined" to="/">
   AppLink
  </AppLink>
 ),
};
export const LightFilled: Story = {
 render: () => (
  <AppLink variant="filled" to="/">
   AppLink
  </AppLink>
 ),
};

export const DarkFilled: Story = {
 decorators: [ThemeDecorator(Theme.DARK)],
 render: () => (
  <AppLink variant="filled" to="/">
   AppLink
  </AppLink>
 ),
};
