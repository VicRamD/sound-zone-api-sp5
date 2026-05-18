export const permissionsSeed = [
  {
    name: "artist:create",
    description: "Permite crear artistas",
    class: "PERMISSION"
  },
  {
    name: "artist:read",
    description: "Permite ver artistas",
    class: "PERMISSION"
  },
  {
    name: "artist:update",
    description: "Permite actualizar artistas",
    class: "PERMISSION"
  },
  {
    name: "artist:delete",
    description: "Permite eliminar artistas",
    class: "PERMISSION"
  },

  {
    name: "song:create",
    description: "Permite crear canciones",
    class: "PERMISSION"
  },
  {
    name: "song:read",
    description: "Permite ver canciones",
    class: "PERMISSION"
  },
  {
    name: "song:update",
    description: "Permite actualizar canciones",
    class: "PERMISSION"
  },
  {
    name: "song:delete",
    description: "Permite eliminar canciones",
    class: "PERMISSION"
  },

  {
    name: "genre:create",
    description: "Permite crear géneros",
    class: "PERMISSION"
  },
  {
    name: "genre:read",
    description: "Permite ver géneros",
    class: "PERMISSION"
  },
  {
    name: "genre:update",
    description: "Permite actualizar géneros",
    class: "PERMISSION"
  },
  {
    name: "genre:delete",
    description: "Permite eliminar géneros",
    class: "PERMISSION"
  },

  {
    name: "album:create",
    description: "Permite crear álbumes",
    class: "PERMISSION"
  },
  {
    name: "album:read",
    description: "Permite ver álbumes",
    class: "PERMISSION"
  },
  {
    name: "album:update",
    description: "Permite actualizar álbumes",
    class: "PERMISSION"
  },
  {
    name: "album:delete",
    description: "Permite eliminar álbumes",
    class: "PERMISSION"
  },

  {
    name: "playlist:create",
    description: "Permite crear una playlist",
    class: "PERMISSION"
  },
  {
    name: "playlist:read",
    description: "Permite ver una playlist",
    class: "PERMISSION"
  },
  {
    name: "playlist:update",
    description: "Permite actualizar una playlist",
    class: "PERMISSION"
  },
  {
    name: "playlist:delete",
    description: "Permite eliminar una playlist",
    class: "PERMISSION"
  }
];

export const rolesSeed = [
  {
    name: "user",
    description: "Privilegios generales",
    permissions: [
      "6a0a66e0dae12f397c9ef982", "6a0a66e0dae12f397c9ef981", "6a0a66e0dae12f397c9ef983", "6a0a66e0dae12f397c9ef984",
      "6a0a66e0dae12f397c9ef98a", "6a0a66e0dae12f397c9ef989", "6a0a66e0dae12f397c9ef98b", "6a0a66e0dae12f397c9ef98c",
      "6a0a66e0dae12f397c9ef986", "6a0a66e0dae12f397c9ef985", "6a0a66e0dae12f397c9ef987", "6a0a66e0dae12f397c9ef988",
      "6a0a66e0dae12f397c9ef98e", "6a0a66e0dae12f397c9ef98d", "6a0a66e0dae12f397c9ef98f", "6a0a66e0dae12f397c9ef990",
      "6a0a66e0dae12f397c9ef992", "6a0a66e0dae12f397c9ef991", "6a0a66e0dae12f397c9ef993"
    ],
    class: "ROLE"
  },
  {
    name: "admin",
    description: "Maximos privilegios",
    permissions: [
      "6a0a66e0dae12f397c9ef982", "6a0a66e0dae12f397c9ef981", "6a0a66e0dae12f397c9ef983", "6a0a66e0dae12f397c9ef984",
      "6a0a66e0dae12f397c9ef98a", "6a0a66e0dae12f397c9ef989", "6a0a66e0dae12f397c9ef98b", "6a0a66e0dae12f397c9ef98c",
      "6a0a66e0dae12f397c9ef986", "6a0a66e0dae12f397c9ef985", "6a0a66e0dae12f397c9ef987", "6a0a66e0dae12f397c9ef988",
      "6a0a66e0dae12f397c9ef98e", "6a0a66e0dae12f397c9ef98d", "6a0a66e0dae12f397c9ef98f", "6a0a66e0dae12f397c9ef990",
      "6a0a66e0dae12f397c9ef992", "6a0a66e0dae12f397c9ef991", "6a0a66e0dae12f397c9ef993", "6a0a66e0dae12f397c9ef994"
    ],
    class: "ROLE"
  }
];