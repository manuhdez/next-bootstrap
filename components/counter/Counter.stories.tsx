import { ComponentStory, ComponentMeta } from '@storybook/react'
import Counter from './Counter'

export default {
  title: 'Design System/Atoms/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />

export const Primary = Template.bind({})
Primary.args = {
  initialCount: 0,
}

export const Initialized = Template.bind({})
Initialized.args = {
  initialCount: 10,
}
