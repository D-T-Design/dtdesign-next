export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fffd9deae7b49535ff7efb9',
                  title: 'Sanity Studio',
                  name: 'dtdesign-next-studio',
                  apiId: 'f7e2c5c3-0132-4131-8e6b-9d6c41eeea8d'
                },
                {
                  buildHookId: '5fffd9def74aab5ca113b9e2',
                  title: 'Landing pages Website',
                  name: 'dtdesign-next',
                  apiId: 'dabb03ef-9a94-4ed6-b70f-fd27a858a9e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/D-T-Design/dtdesign-next',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dtdesign-next.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
