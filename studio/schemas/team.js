import { UsersIcon } from '@sanity/icons'

export default {
    name: 'team',
    type: 'document',
    title: 'Team',
    icon: UsersIcon,
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'color',
        title: 'Color',
        type: 'color', 
      },
      {
        name:'lightText',
        title: 'White text color',
        type:'boolean',
      }
    ],
    preview: {
      select: {
        title: 'name',
      },
    }
  }
  