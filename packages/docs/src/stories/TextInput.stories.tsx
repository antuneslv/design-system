import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputType } from '@lva-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    Story => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputType>

export const Primary: StoryObj<TextInputType> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputType> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputType> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}
