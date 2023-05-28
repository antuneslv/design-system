import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepType } from '@lva-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    Story => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepType>

export const Primary: StoryObj<MultiStepType> = {
  args: {},
}

export const Full: StoryObj<MultiStepType> = {
  args: {
    currentStep: 4,
  },
}
