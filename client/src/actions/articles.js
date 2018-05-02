export const createArticle = ({ title, content }) => (
  {
    type: 'CREATE_ARTICLE',
    article: {
      id: Number(new Date()),
      title,
      content
    }
  }
);

export const editArticle = (id, { title, content }) => (
  {
    type: 'EDIT_ARTICLE',
    id,
    article: {
      title,
      content
    }
  }
);

export const deleteArticle = (id) => (
  {
    type: 'DELETE_ARTICLE',
    id
  }
);


