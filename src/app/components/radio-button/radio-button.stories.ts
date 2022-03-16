import { moduleMetadata } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export default {
  title: 'Input/RadioButton',
  component: RadioButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [RadioButtonComponent],
      imports: [RadioButtonModule, FormsModule, CommonModule],
    }),
  ],
};

const Template: Story<RadioButtonComponent> = (args: RadioButtonComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  type: 'default'
};

Default.parameters = {
};

export const RadioGroup = Template.bind({});
RadioGroup.args = {
  type: 'Radiogroup'
};
