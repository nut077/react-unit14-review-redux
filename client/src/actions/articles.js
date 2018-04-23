export const editArticle = (id, article) => (
  {
    type: 'EDIT_ARTICLE',
    id,
    article
  }
);