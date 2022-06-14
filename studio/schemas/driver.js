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
      name: 'number',
      title: 'Number',
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
  ],
  preview: {
    select: {
      title: 'name',
    }
  }
}
