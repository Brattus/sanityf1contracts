import { CalendarIcon } from '@sanity/icons'

export default {
    name: 'circuit',
    type: 'document',
    title: 'Circuit',
    icon: CalendarIcon,
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'contractEnd',
        title: 'Contract End',
        type: 'number'
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'string'
      },
      {
        name: 'activeThisYear',
        title: 'Active this year',
        type: 'boolean'
      },
      {
        name: 'raceDate',
        title: 'Race date this year',
        type: 'date',
      }
    ],
    preview: {
      select: {
        title: 'name',
      },
    }
  }
  