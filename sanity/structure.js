import { CaseIcon, LemonIcon } from '@sanity/icons';
import { ListBuilder, structureTool } from 'sanity/structure';

export const myStructure = (S) => {
  return S.list()
    .title('Performance Detritus')
    .items([
      ...S.documentTypeListItems().reverse().filter((listItem) => {
        const id = listItem.getId();
        if (!id) return true; 
        return !['siteSettings', 'singleProject'].includes(id);
      }),
      // projects
      S.listItem()
      .title('Projects')
      .icon(LemonIcon) // Or whatever icon you prefer
      .child(S.documentTypeList('singleProject')),
      //contact
      S.listItem()
      .title('About')
      .icon(CaseIcon)
      .child(
        S.document()
          .schemaType('siteSettings')
          .documentId('siteSettings')
      ),
    ]);
};
