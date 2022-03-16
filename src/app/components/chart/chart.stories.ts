import { moduleMetadata } from '@storybook/angular';
import { ChartComponent } from './chart.component';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ChartModule } from 'primeng/chart';

export default {
  title: 'Charts/Chart',
  component: ChartComponent,
  decorators: [
    moduleMetadata({
      declarations: [ChartComponent],
      imports: [ChartModule],
    }),
  ],
};

const Template: Story<ChartComponent> = (args: ChartComponent) => ({
  props: args,
});

export const LineChart = Template.bind({});
LineChart.args = {
  type: 'line'
};

export const PieChart = Template.bind({});
PieChart.args = {
  type: 'pie'
};
