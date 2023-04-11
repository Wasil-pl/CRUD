const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '02-02-2022',
      author: 'John Doe',
      category: 'Sport',
    },
    {
      id: '2',
      title: 'Article title 1',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '03-02-2022',
      author: 'John Doe',
      category: 'Movies',
    },
    {
      id: '3',
      title: 'Article title 2',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '04-02-2022',
      author: 'John Doe',
      category: 'Movies',
    },
    {
      id: '4',
      title: 'Article title 3',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '05-02-2022',
      author: 'John Doe',
      category: 'News',
    },
  ],
  categories: ['Sport', 'News', 'Movies'],
};

export default initialState;
