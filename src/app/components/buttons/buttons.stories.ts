import { moduleMetadata } from '@storybook/angular';
import { ButtonsComponent } from './buttons.component';
import { ButtonModule } from 'primeng/button';
import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Buttons/Button',
  component: ButtonsComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonsComponent],
      imports: [ButtonModule],
    }),
  ],
};

const Template: Story<ButtonsComponent> = (args: ButtonsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  type: 'default'
};

Default.parameters = {
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary'
};

export const Basic = Template.bind({});
Basic.args = {
  type: 'basic'
};
