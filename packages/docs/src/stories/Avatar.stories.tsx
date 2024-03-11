import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@spaceghost-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
    alt: 'Space Ghost User',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
