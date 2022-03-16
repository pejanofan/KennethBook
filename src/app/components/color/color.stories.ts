import { moduleMetadata } from '@storybook/angular';
import { ColorComponent } from './color.component';
import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Customize/Style',
  component: ColorComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ],
};

const Template: Story<ColorComponent> = (args: ColorComponent) => ({
  props: args,
});

export const Status = Template.bind({});
Status.args = {
};

Status.parameters = {
};
