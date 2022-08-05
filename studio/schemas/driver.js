import { UserIcon } from '@sanity/icons'

export default {
  name: 'driver',
  title: 'Driver',
  icon: UserIcon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'string'
    },
    {
      name: 'number',
      title: 'Number',
      type: 'number'
    },
    {
      name: 'contractStart',
      title: 'Contract Start',
      type: 'number'
    },
    {
      name: 'contractEnd',
      title: 'Contract End',
      type: 'number'
    },
    {
      name: 'team',
      title: 'Team',
      type: 'reference',
      to: [{type: 'team'}]
    },
    {
      name: 'contractStart2',
      title: '2 Contract Start',
      type: 'number'
    },
    {
      name: 'contractEnd2',
      title: '2 Contract End',
      type: 'number'
    },
    {
      name: 'team2',
      title: '2 Team',
      type: 'reference',
      to: [{type: 'team'}]
    },
  ],
  preview: {
    select: {
      title: 'name',
    }
  }
}
