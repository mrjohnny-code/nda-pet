export const folders = [
  {
    id: 1,
    name: "Folder name 1",
    type: "folder",
    children: [
      {
        id: 1,
        name: "Item 1",
        type: "inner_item"
      }
    ]
  },
  {
    id: 2,
    name: "Folder name 2",
    type: "folder",
    children: [
      {
        id: 3,
        name: "Folder inner 1",
        type: "folder",
        children: [
          { id: 2, name: "Item inner 1", type: "inner_item" },
          { id: 3, name: "Item inner 2", type: "inner_item" }
        ]
      },
      {
        id: 4,
        name: "Folder inner 22",
        type: "folder",
        children: [
          { id: 4, name: "Item inner 11", type: "inner_item" },
          { id: 5, name: "Item inner 22", type: "inner_item" }
        ]
      },
      { id: 6, name: "Item 11", type: "inner_item" },
      { id: 7, name: "Item 22", type: "inner_item" },
      { id: 8, name: "Item 33", type: "inner_item" }
    ]
  }
];