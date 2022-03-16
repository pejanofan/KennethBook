import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonModule } from 'primeng/button';
import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Button Component',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [ButtonModule],
    }),
  ],
};
