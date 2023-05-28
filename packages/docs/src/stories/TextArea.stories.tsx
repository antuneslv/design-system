import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaType } from '@lva-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    Story => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaType>

export const Primary: StoryObj<TextAreaType> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaType> = {
  args: {
    disabled: true,
  },
}
