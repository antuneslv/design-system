import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarType } from '@lva-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://picsum.photos/100',
    alt: '',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarType>

export const Primary: StoryObj<AvatarType> = {}

export const WithFallback: StoryObj<AvatarType> = {
  args: {
    src: undefined,
  },
}
