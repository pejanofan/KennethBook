import { moduleMetadata } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Components/Dropdown',
  component: DropdownComponent,
  decorators: [
    moduleMetadata({
      declarations: [DropdownComponent],
      imports: [DropdownModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, CommonModule],
    }),
  ],
};

const Template: Story<DropdownComponent> = (args: DropdownComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};

// export const Group = Template.bind({});
// Group.args = {
// };

