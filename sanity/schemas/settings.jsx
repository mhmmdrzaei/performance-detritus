export default {
    name: 'siteSettings',
    title: 'Site Info',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Site Title',
        type: 'string'
      },
      {
        name: 'about_text',
        title: 'About Text',
        type: 'array', 
         of: [{type: 'block',
         marks: {
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'External link',
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL'
                },
                {
                  title: 'Open in new tab',
                  name: 'blank',
                  type: 'boolean'
                }
              ]
            },
          ]
        },
        
        }]
      },
      {
        title: 'Social',
        name: 'socialInfo',
        type: 'array',
        of: [
          {
            type: 'social'
            
          }
          
        ]    
      },
      {
        title: 'Hero Image',
        name: 'hero_image',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'attribution',
            type: 'string',
            title: 'Alt',
          }
        ]
      },
      {
        name:'backgroundimgs',
        title: 'Background Images',
        type: 'array',
        of:[

            {
              title: 'image',
              name: 'bgImage',
              type: 'image',

              fields: [

                {
                  name: 'classImg',
                  type: 'string',
                  title: 'CSS Class'
                }
              ]
            },
          ] 

      },
  
      {
        name: 'seo',
        title: 'SEO info',
        type: 'seo'
      }


      
    ]
  }