import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@lva-ui/react'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Primary: StoryObj = {
  args: {
    children: 'Send',
  },
}
