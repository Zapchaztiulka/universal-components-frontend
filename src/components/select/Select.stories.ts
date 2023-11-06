import type { Meta, StoryObj } from '@storybook/react';

import CustomSelect from './Select';


const meta = {
  title: 'Select/Component',
  component: CustomSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof CustomSelect>;

const items = [
  {
    children: [
      {
        children: [
          {
            id: 6,
            name: 'Green',
          },
          {
            id: 7,
            name: 'Blue',
          },
          {
            children: [
              {
                id: 9,
                name: 'The push() method adds new items to the end of an array, and returns the new length.',
              },
              {
                id: 10,
                name: 'Hot',
              },
              {
                id: 11,
                name: 'Cold',
              },
            ],
            id: 8,
            name: 'Red',
          },
        ],
        id: 3,
        name: 'Moscow',
      },
      {
        id: 4,
        name: 'New York',
      },
      {
        id: 5,
        name: 'Paris',
      },
    ],
    id: 1,
    name: 'Accounting',
  },
  {
    id: 2,
    name: 'Management',
  }
]


export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Select value",
    items,
    selectedIds: [8,7]
  },
}; 