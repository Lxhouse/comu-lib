import type { Meta, StoryObj } from '@storybook/react';
import ShowHello from '../components/ShowHello';

const meta: Meta<typeof ShowHello> = {
  title: 'components/showHello',
  component: ShowHello,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '一个简单的问候语展示组件，支持自定义文本。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '要显示的问候语文本',
      defaultValue: 'Hello!',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Hello!' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Hello!',
  },
};

export const ChineseGreeting: Story = {
  args: {
    text: '你好！',
  },
};

export const LongGreeting: Story = {
  args: {
    text: 'Hello, nice to meet you!',
  },
};
