import { sourceUrlGenerator } from '../../../src/js/utils/sourceUrlGenerator';

const sourceUrl = sourceUrlGenerator();

const testPosts = [
  {
    id: 7647,
    slug: 'donec-vel-volutpat',
    title: {
      rendered: 'Donec vel volutpat',
    },
    content: {
      rendered:
        '<section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis libero at sapien tempus semper. Mauris quis ante velit. Donec vel volutpat sapien, eu efficitur mi. Etiam lacinia finibus erat, a porttitor massa auctor ut. Duis mauris nunc, sagittis non lobortis sed, volutpat quis dui. In accumsan blandit vestibulum. Aliquam erat volutpat.</p>\n</section>',
      protected: false,
    },
    excerpt: {
      rendered: '<p>Nunc quis libero</p>\n',
      protected: false,
    },
    featured_media: 7634,
    'snapshot-category': [71],
  },
  {
    id: 7646,
    slug: 'donec-ut-eros',
    title: {
      rendered: 'Donec ut eros',
    },
    content: {
      rendered:
        '<section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at placerat orci. Cras at nisi venenatis, finibus nisl non, pharetra enim. Aenean ut rhoncus elit. Mauris posuere risus risus, ut fermentum ligula ornare id. Donec ut eros ut nisi vulputate condimentum.</p>\n<p>Vivamus maximus metus sed tortor luctus lobortis. Phasellus orci magna, tempus non nisl at, hendrerit lobortis magna. Suspendisse potenti. Fusce sed sodales mi.</p>\n</section>',
      protected: false,
    },
    excerpt: {
      rendered: '<p>Phasellus orci magna</p>\n',
      protected: false,
    },
    featured_media: 7635,
    'snapshot-category': [71],
  },
  {
    id: 7645,
    slug: 'vivamus-ullamcorper',
    title: {
      rendered: 'Vivamus ullamcorper',
    },
    content: {
      rendered:
        '<section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus ac tortor eget euismod. Quisque sit amet eros rhoncus ipsum condimentum hendrerit at non tortor. Vivamus ullamcorper arcu eget consequat commodo. Fusce vitae metus ullamcorper, vulputate dolor eget, cursus purus. Etiam eu porta nibh. Praesent volutpat tincidunt sem sed faucibus. Nulla facilisis, massa ut gravida interdum, ex sem tempor libero, sit amet gravida eros sem in mi.</p>\n</section>',
      protected: false,
    },
    excerpt: {
      rendered: '<p>Nulla facilisis</p>\n',
      protected: false,
    },
    featured_media: 7636,
    'snapshot-category': [71],
  },
  {
    id: 7644,
    slug: 'vestibulum-dapibus',
    title: {
      rendered: 'Vestibulum dapibus',
    },
    content: {
      rendered:
        '<section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus accumsan hendrerit. Duis mattis posuere nibh, id hendrerit arcu volutpat ullamcorper. Etiam in neque quis nunc convallis maximus quis at enim. Maecenas ac tellus ac leo aliquet venenatis. Nullam et sem non tellus viverra pellentesque. Proin nec dapibus massa. Nam gravida malesuada eros, a elementum urna sagittis vel.</p>\n<p>Morbi nec lobortis mi. Suspendisse fermentum metus id lorem faucibus ultricies. Suspendisse potenti. In vel tortor eget sem malesuada venenatis rhoncus nec odio. Aliquam facilisis mattis sem convallis lacinia. Nullam quis dictum odio.</p>\n</section>',
      protected: false,
    },
    excerpt: {
      rendered: '<p>Nam gravida malesuada</p>\n',
      protected: false,
    },
    featured_media: 7637,
    'snapshot-category': [71],
  },
  {
    id: 7643,
    slug: 'ut-eget-orci',
    title: {
      rendered: 'Ut eget orci',
    },
    content: {
      rendered:
        '<section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget orci a felis interdum dictum in in eros. In id sem rhoncus, fringilla mauris ac, lobortis libero. Donec ex turpis, viverra quis malesuada vel, congue vitae neque. Ut facilisis vulputate tortor aliquam cursus. Nunc urna elit, fermentum et dignissim et, bibendum ullamcorper metus. Nam pretium lectus a auctor hendrerit. Maecenas interdum dignissim diam quis ullamcorper. Cras vulputate id dolor non vehicula. Sed pellentesque eget lorem dignissim faucibus. Duis scelerisque blandit egestas.</p>\n</section>',
      protected: false,
    },
    excerpt: {
      rendered: '<p>Integer cursus </p>\n',
      protected: false,
    },
    featured_media: 7638,
    'snapshot-category': [71],
  },
  {
    id: 7642,
    slug: 'praesent-sollicitudin',
    title: {
      rendered: 'Praesent sollicitudin',
    },
    content: {
      rendered:
        '<section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin odio et arcu vestibulum imperdiet. Mauris malesuada urna felis. Vivamus vel odio in nunc fringilla vulputate non a lorem. Aliquam sollicitudin sodales malesuada. Donec at tincidunt turpis, venenatis porta purus. Praesent sagittis, est sit amet elementum tincidunt, est urna consequat lectus, non lobortis ipsum metus ac leo. Etiam ac blandit diam, eu tempor lectus. Maecenas nisi sem, elementum non fermentum placerat, porttitor nec ligula. Pellentesque elit massa, volutpat quis lorem in, consectetur aliquet dolor.</p>\n<p>Ut efficitur vehicula sapien, vel ornare orci euismod quis. Mauris et augue maximus, mollis felis eu, vehicula enim. Phasellus sed felis nec tellus auctor efficitur vitae in lectus. Cras pretium venenatis imperdiet. Sed interdum lectus viverra accumsan facilisis.</p>\n</section>',
      protected: false,
    },
    excerpt: {
      rendered: '<p>Curabitur mauris urna</p>\n',
      protected: false,
    },
    featured_media: 7639,
    'snapshot-category': [71],
  },
  {
    id: 7641,
    slug: 'nullam-ultricies',
    title: {
      rendered: 'Nullam ultricies',
    },
    content: {
      rendered:
        '<section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin odio et arcu vestibulum imperdiet. Mauris malesuada urna felis. Vivamus vel odio in nunc fringilla vulputate non a lorem. Aliquam sollicitudin sodales malesuada. Donec at tincidunt turpis, venenatis porta purus. Praesent sagittis, est sit amet elementum tincidunt, est urna consequat lectus, non lobortis ipsum metus ac leo. Etiam ac blandit diam, eu tempor lectus.</p>\n<p>Maecenas nisi sem, elementum non fermentum placerat, porttitor nec ligula. Pellentesque elit massa, volutpat quis lorem in, consectetur aliquet dolor. Ut efficitur vehicula sapien, vel ornare orci euismod quis. Mauris et augue maximus, mollis felis eu, vehicula enim. Phasellus sed felis nec tellus auctor efficitur vitae in lectus. Cras pretium venenatis imperdiet. Sed interdum lectus viverra accumsan facilisis.</p>\n</section>',
      protected: false,
    },
    excerpt: {
      rendered: '<p>Sed at efficitur</p>\n',
      protected: false,
    },
    featured_media: 7640,
    'snapshot-category': [71],
  },
];

const testMedia = [
  {
    id: 7640,
    media_details: {
      sizes: {
        medium: {
          file: 'concept-idea-innovation-212286-300x200.jpg',
          width: 300,
          height: 200,
          mime_type: 'image/jpeg',
          source_url: sourceUrl(),
        },
        large: {
          file: 'concept-idea-innovation-212286-1024x683.jpg',
          width: 1024,
          height: 683,
          mime_type: 'image/jpeg',
          source_url: sourceUrl(),
        },
      },
    },
  },
  {
    id: 7639,
    media_details: {
      sizes: {
        medium: {
          file: 'boy-child-clouds-346796-300x200.jpg',
          width: 300,
          height: 200,
          mime_type: 'image/jpeg',
          source_url: sourceUrl(),
        },
        large: {
          file: 'boy-child-clouds-346796-1024x683.jpg',
          width: 1024,
          height: 683,
          mime_type: 'image/jpeg',
          source_url: sourceUrl(),
        },
      },
    },
  },
  {
    id: 7638,
    media_details: {
      sizes: {
        medium: {
          file: 'pexels-photo-325521-300x200.jpeg',
          width: 300,
          height: 200,
          mime_type: 'image/jpeg',
          source_url: sourceUrl(),
        },
        large: {
          file: 'pexels-photo-325521-1024x683.jpeg',
          width: 1024,
          height: 683,
          mime_type: 'image/jpeg',
          source_url: sourceUrl(),
        },
      },
    },
  },
  {
    id: 7637,
    media_details: {
      sizes: {
        medium: {
          file: 'adult-aged-blur-834863-300x200.jpg',
          width: 300,
          height: 200,
          mime_type: 'image/jpeg',
          source_url: sourceUrl(),
        },
        large: {
          file: 'adult-aged-blur-834863-1024x683.jpg',
          width: 1024,
          height: 683,
          mime_type: 'image/jpeg',
          source_url: sourceUrl(),
        },
      },
    },
  },
  {
    id: 7636,
    media_details: {
      sizes: {
        medium: {
          file: 'adult-beautiful-girl-blue-875862-300x200.jpg',
          width: 300,
          height: 200,
          mime_type: 'image/jpeg',
          source_url: sourceUrl(),
        },
        large: {
          file: 'adult-beautiful-girl-blue-875862-1024x683.jpg',
          width: 1024,
          height: 683,
          mime_type: 'image/jpeg',
          source_url: sourceUrl(),
        },
      },
    },
  },
  {
    id: 7635,
    media_details: {
      sizes: {
        medium: {
          file: 'chill-guy-high-tatras-91224-300x200.jpg',
          width: 300,
          height: 200,
          mime_type: 'image/jpeg',
          source_url: sourceUrl(),
        },
        large: {
          file: 'chill-guy-high-tatras-91224-1024x682.jpg',
          width: 1024,
          height: 682,
          mime_type: 'image/jpeg',
          source_url: sourceUrl(),
        },
      },
    },
  },
  {
    id: 7634,
    media_details: {
      sizes: {
        medium: {
          file: 'alone-backlit-clouds-297977-300x200.jpg',
          width: 300,
          height: 200,
          mime_type: 'image/jpeg',
          source_url: sourceUrl(),
        },
        large: {
          file: 'alone-backlit-clouds-297977-1024x683.jpg',
          width: 1024,
          height: 683,
          mime_type: 'image/jpeg',
          source_url: sourceUrl(),
        },
      },
    },
  },
];

const testPostsWithMedia = [
  {
    id: 7647,
    slug: 'donec-vel-volutpat',
    title: {
      rendered: 'Donec vel volutpat',
    },
    content: {
      rendered:
        '<section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis libero at sapien tempus semper. Mauris quis ante velit. Donec vel volutpat sapien, eu efficitur mi. Etiam lacinia finibus erat, a porttitor massa auctor ut. Duis mauris nunc, sagittis non lobortis sed, volutpat quis dui. In accumsan blandit vestibulum. Aliquam erat volutpat.</p>\n</section>',
      protected: false,
    },
    excerpt: {
      rendered: '<p>Nunc quis libero</p>\n',
      protected: false,
    },
    featured_media: 7634,
    'snapshot-category': [71],
    image: {
      id: 7634,
      media_details: {
        sizes: {
          medium: {
            file: 'alone-backlit-clouds-297977-300x200.jpg',
            width: 300,
            height: 200,
            mime_type: 'image/jpeg',
            source_url: sourceUrl(),
          },
          large: {
            file: 'alone-backlit-clouds-297977-1024x683.jpg',
            width: 1024,
            height: 683,
            mime_type: 'image/jpeg',
            source_url: sourceUrl(),
          },
        },
      },
    },
  },
  {
    id: 7646,
    slug: 'donec-ut-eros',
    title: {
      rendered: 'Donec ut eros',
    },
    content: {
      rendered:
        '<section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at placerat orci. Cras at nisi venenatis, finibus nisl non, pharetra enim. Aenean ut rhoncus elit. Mauris posuere risus risus, ut fermentum ligula ornare id. Donec ut eros ut nisi vulputate condimentum.</p>\n<p>Vivamus maximus metus sed tortor luctus lobortis. Phasellus orci magna, tempus non nisl at, hendrerit lobortis magna. Suspendisse potenti. Fusce sed sodales mi.</p>\n</section>',
      protected: false,
    },
    excerpt: {
      rendered: '<p>Phasellus orci magna</p>\n',
      protected: false,
    },
    featured_media: 7635,
    'snapshot-category': [71],
    image: {
      id: 7635,
      media_details: {
        sizes: {
          medium: {
            file: 'chill-guy-high-tatras-91224-300x200.jpg',
            width: 300,
            height: 200,
            mime_type: 'image/jpeg',
            source_url: sourceUrl(),
          },
          large: {
            file: 'chill-guy-high-tatras-91224-1024x682.jpg',
            width: 1024,
            height: 682,
            mime_type: 'image/jpeg',
            source_url: sourceUrl(),
          },
        },
      },
    },
  },
  {
    id: 7645,
    slug: 'vivamus-ullamcorper',
    title: {
      rendered: 'Vivamus ullamcorper',
    },
    content: {
      rendered:
        '<section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus ac tortor eget euismod. Quisque sit amet eros rhoncus ipsum condimentum hendrerit at non tortor. Vivamus ullamcorper arcu eget consequat commodo. Fusce vitae metus ullamcorper, vulputate dolor eget, cursus purus. Etiam eu porta nibh. Praesent volutpat tincidunt sem sed faucibus. Nulla facilisis, massa ut gravida interdum, ex sem tempor libero, sit amet gravida eros sem in mi.</p>\n</section>',
      protected: false,
    },
    excerpt: {
      rendered: '<p>Nulla facilisis</p>\n',
      protected: false,
    },
    featured_media: 7636,
    'snapshot-category': [71],
    image: {
      id: 7636,
      media_details: {
        sizes: {
          medium: {
            file: 'adult-beautiful-girl-blue-875862-300x200.jpg',
            width: 300,
            height: 200,
            mime_type: 'image/jpeg',
            source_url: sourceUrl(),
          },
          large: {
            file: 'adult-beautiful-girl-blue-875862-1024x683.jpg',
            width: 1024,
            height: 683,
            mime_type: 'image/jpeg',
            source_url: sourceUrl(),
          },
        },
      },
    },
  },
  {
    id: 7644,
    slug: 'vestibulum-dapibus',
    title: {
      rendered: 'Vestibulum dapibus',
    },
    content: {
      rendered:
        '<section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus accumsan hendrerit. Duis mattis posuere nibh, id hendrerit arcu volutpat ullamcorper. Etiam in neque quis nunc convallis maximus quis at enim. Maecenas ac tellus ac leo aliquet venenatis. Nullam et sem non tellus viverra pellentesque. Proin nec dapibus massa. Nam gravida malesuada eros, a elementum urna sagittis vel.</p>\n<p>Morbi nec lobortis mi. Suspendisse fermentum metus id lorem faucibus ultricies. Suspendisse potenti. In vel tortor eget sem malesuada venenatis rhoncus nec odio. Aliquam facilisis mattis sem convallis lacinia. Nullam quis dictum odio.</p>\n</section>',
      protected: false,
    },
    excerpt: {
      rendered: '<p>Nam gravida malesuada</p>\n',
      protected: false,
    },
    featured_media: 7637,
    'snapshot-category': [71],
    image: {
      id: 7637,
      media_details: {
        sizes: {
          medium: {
            file: 'adult-aged-blur-834863-300x200.jpg',
            width: 300,
            height: 200,
            mime_type: 'image/jpeg',
            source_url: sourceUrl(),
          },
          large: {
            file: 'adult-aged-blur-834863-1024x683.jpg',
            width: 1024,
            height: 683,
            mime_type: 'image/jpeg',
            source_url: sourceUrl(),
          },
        },
      },
    },
  },
  {
    id: 7643,
    slug: 'ut-eget-orci',
    title: {
      rendered: 'Ut eget orci',
    },
    content: {
      rendered:
        '<section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget orci a felis interdum dictum in in eros. In id sem rhoncus, fringilla mauris ac, lobortis libero. Donec ex turpis, viverra quis malesuada vel, congue vitae neque. Ut facilisis vulputate tortor aliquam cursus. Nunc urna elit, fermentum et dignissim et, bibendum ullamcorper metus. Nam pretium lectus a auctor hendrerit. Maecenas interdum dignissim diam quis ullamcorper. Cras vulputate id dolor non vehicula. Sed pellentesque eget lorem dignissim faucibus. Duis scelerisque blandit egestas.</p>\n</section>',
      protected: false,
    },
    excerpt: {
      rendered: '<p>Integer cursus </p>\n',
      protected: false,
    },
    featured_media: 7638,
    'snapshot-category': [71],
    image: {
      id: 7638,
      media_details: {
        sizes: {
          medium: {
            file: 'pexels-photo-325521-300x200.jpeg',
            width: 300,
            height: 200,
            mime_type: 'image/jpeg',
            source_url: sourceUrl(),
          },
          large: {
            file: 'pexels-photo-325521-1024x683.jpeg',
            width: 1024,
            height: 683,
            mime_type: 'image/jpeg',
            source_url: sourceUrl(),
          },
        },
      },
    },
  },
  {
    id: 7642,
    slug: 'praesent-sollicitudin',
    title: {
      rendered: 'Praesent sollicitudin',
    },
    content: {
      rendered:
        '<section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin odio et arcu vestibulum imperdiet. Mauris malesuada urna felis. Vivamus vel odio in nunc fringilla vulputate non a lorem. Aliquam sollicitudin sodales malesuada. Donec at tincidunt turpis, venenatis porta purus. Praesent sagittis, est sit amet elementum tincidunt, est urna consequat lectus, non lobortis ipsum metus ac leo. Etiam ac blandit diam, eu tempor lectus. Maecenas nisi sem, elementum non fermentum placerat, porttitor nec ligula. Pellentesque elit massa, volutpat quis lorem in, consectetur aliquet dolor.</p>\n<p>Ut efficitur vehicula sapien, vel ornare orci euismod quis. Mauris et augue maximus, mollis felis eu, vehicula enim. Phasellus sed felis nec tellus auctor efficitur vitae in lectus. Cras pretium venenatis imperdiet. Sed interdum lectus viverra accumsan facilisis.</p>\n</section>',
      protected: false,
    },
    excerpt: {
      rendered: '<p>Curabitur mauris urna</p>\n',
      protected: false,
    },
    featured_media: 7639,
    'snapshot-category': [71],
    image: {
      id: 7639,
      media_details: {
        sizes: {
          medium: {
            file: 'boy-child-clouds-346796-300x200.jpg',
            width: 300,
            height: 200,
            mime_type: 'image/jpeg',
            source_url: sourceUrl(),
          },
          large: {
            file: 'boy-child-clouds-346796-1024x683.jpg',
            width: 1024,
            height: 683,
            mime_type: 'image/jpeg',
            source_url: sourceUrl(),
          },
        },
      },
    },
  },
  {
    id: 7641,
    slug: 'nullam-ultricies',
    title: {
      rendered: 'Nullam ultricies',
    },
    content: {
      rendered:
        '<section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin odio et arcu vestibulum imperdiet. Mauris malesuada urna felis. Vivamus vel odio in nunc fringilla vulputate non a lorem. Aliquam sollicitudin sodales malesuada. Donec at tincidunt turpis, venenatis porta purus. Praesent sagittis, est sit amet elementum tincidunt, est urna consequat lectus, non lobortis ipsum metus ac leo. Etiam ac blandit diam, eu tempor lectus.</p>\n<p>Maecenas nisi sem, elementum non fermentum placerat, porttitor nec ligula. Pellentesque elit massa, volutpat quis lorem in, consectetur aliquet dolor. Ut efficitur vehicula sapien, vel ornare orci euismod quis. Mauris et augue maximus, mollis felis eu, vehicula enim. Phasellus sed felis nec tellus auctor efficitur vitae in lectus. Cras pretium venenatis imperdiet. Sed interdum lectus viverra accumsan facilisis.</p>\n</section>',
      protected: false,
    },
    excerpt: {
      rendered: '<p>Sed at efficitur</p>\n',
      protected: false,
    },
    featured_media: 7640,
    'snapshot-category': [71],
    image: {
      id: 7640,
      media_details: {
        sizes: {
          medium: {
            file: 'concept-idea-innovation-212286-300x200.jpg',
            width: 300,
            height: 200,
            mime_type: 'image/jpeg',
            source_url: sourceUrl(),
          },
          large: {
            file: 'concept-idea-innovation-212286-1024x683.jpg',
            width: 1024,
            height: 683,
            mime_type: 'image/jpeg',
            source_url: sourceUrl(),
          },
        },
      },
    },
  },
];

const testState = {
  posts: testPosts,
};

module.exports = {
  testPosts,
  testMedia,
  testPostsWithMedia,
  testState,
};
