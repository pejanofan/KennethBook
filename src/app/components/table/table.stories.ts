import { moduleMetadata } from '@storybook/angular';
import { TableComponent } from './table.component';
import { TableModule } from 'primeng/table';
import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Data/Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      declarations: [TableComponent],
      imports: [TableModule],
    }),
  ],
};

const Template: Story<TableComponent> = (args: TableComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};

Default.parameters = {
};
