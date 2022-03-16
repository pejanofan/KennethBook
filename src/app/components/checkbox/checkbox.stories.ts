import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

export default {
  title: 'Input/Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [CheckboxComponent],
      imports: [CheckboxModule, CommonModule, BrowserModule],
    }),
  ],
};

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  group: false
};

export const Group = Template.bind({});
Group.args = {
  group: true
};
