import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxType, Text } from '@lva-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxType>

export const Primary: StoryObj<BoxType> = {}
