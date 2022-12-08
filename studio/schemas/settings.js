import { CogIcon } from '@sanity/icons'


export default {
    name: 'settings',
    type: 'document',
    title: 'Settings',
    icon: CogIcon,
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
  