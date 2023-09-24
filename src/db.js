export const data = {
  categories: [
    {
      id: 1,
      name: 'Personal',
    },
    {
      id: 2,
      name: 'Work',
    },
    {
      id: 3,
      name: 'Errands',
    },
  ],
  tasks: [
    {
      id: 1,
      title: 'Finish Project Proposal',
      description: 'Prepare and finalize the project proposal document.',
      created: '2023-08-22T08:00:00Z',
      due_date: '2023-08-30T17:00:00Z',
      is_completed: false,
      is_important: true,
      my_day: true,
      planned: true,
      repeat: 'weekly',
      category_id: 2,
      remind_me: '2023-08-29T10:00:00Z',
      subtasks: [
        {
          id: 101,
          title: 'Gather Research Materials',
          is_completed: true,
        },
        {
          id: 102,
          title: 'Outline Key Points',
          is_completed: true,
        },
        {
          id: 103,
          title: 'Write Content',
          is_completed: false,
        },
        {
          id: 104,
          title: 'Proofread and Edit',
          is_completed: false,
        },
      ],
    },
    {
      id: 2,
      title: 'Buy Groceries',
      description: "Purchase items for the week's meals.",
      created: '2023-08-22T15:30:00Z',
      due_date: '2023-08-24T18:00:00Z',
      is_completed: false,
      is_important: false,
      my_day: false,
      planned: true,
      repeat: 'weekly',
      category_id: 1,
      remind_me: '2023-08-24T10:30:00Z',
      subtasks: [
        {
          id: 201,
          title: 'Vegetables',
          is_completed: false,
        },
        {
          id: 202,
          title: 'Fruits',
          is_completed: false,
        },
        {
          id: 203,
          title: 'Dairy Products',
          is_completed: false,
        },
        {
          id: 204,
          title: 'Proteins',
          is_completed: false,
        },
      ],
    },
  ],
}
