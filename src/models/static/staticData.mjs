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
  },
  { name: "permission:create", description: "Permite crear permisos", class: "PERMISSION" },
  { name: "permission:read", description: "Permite ver permisos", class: "PERMISSION" },
  { name: "permission:update", description: "Permite actualizar permisos", class: "PERMISSION" },
  { name: "permission:delete", description: "Permite eliminar permisos", class: "PERMISSION" },
  { name: "permission:add", description: "Permite agregar permisos al sistema", class: "PERMISSION" },
  { name: "permission:remove", description: "Permite quitar permisos del sistema", class: "PERMISSION" },
  { name: "role:create", description: "Permite crear roles", class: "PERMISSION" },
  { name: "role:read", description: "Permite ver roles", class: "PERMISSION" },
  { name: "role:update", description: "Permite actualizar roles", class: "PERMISSION" },
  { name: "role:delete", description: "Permite eliminar roles", class: "PERMISSION" }
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
      "6a0a66e0dae12f397c9ef992", "6a0a66e0dae12f397c9ef991", "6a0a66e0dae12f397c9ef993", "6a0a66e0dae12f397c9ef994",
      "6a0b1c302ea6d3ce31925393", "6a0b1c302ea6d3ce31925392", "6a0b1c302ea6d3ce31925394", "6a0b1c302ea6d3ce31925395",
      "6a0b1c302ea6d3ce31925396", "6a0b1c302ea6d3ce31925397",
      "6a0b1c302ea6d3ce31925399", "6a0b1c302ea6d3ce31925398", "6a0b1c302ea6d3ce3192539a", "6a0b1c302ea6d3ce3192539b"
    ],
    class: "ROLE"
  }
];