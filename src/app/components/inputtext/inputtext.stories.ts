import { moduleMetadata } from '@storybook/angular';
import { InputtextComponent } from './inputtext.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Input/Inputtext',
  component: InputtextComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputtextComponent],
      imports: [InputTextModule, PasswordModule ],
    }),
  ],
};

const Template: Story<InputtextComponent> = (args: InputtextComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};

Default.parameters = {
};
