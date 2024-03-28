import { StoryFn, Meta } from "@storybook/react";
import MemeLoader from "./MemeLoader";

export default {
  title: "MemeLoader/Memes",
  component: MemeLoader,
} as Meta<typeof MemeLoader>;

const Template: StoryFn<typeof MemeLoader> = (args) => (
  <MemeLoader {...args} />
);

export const MemeTestDefault = Template.bind({});
MemeTestDefault.args = {
  meme: "racoon",
  title: "Hello World!",
  description: "Wtf is going on here???",
  muted: true,
};

export const MemeTestChipi = Template.bind({});
MemeTestChipi.args = {
  meme: "chipi",
  title: "Hello World!",
  description: "Wtf is going on here???",
  muted: true,
};
