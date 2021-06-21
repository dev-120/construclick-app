import tool1 from "./testImages/tool1.jpg";
import tool2 from "./testImages/tool2.jpg";
import tool3 from "./testImages/tool3.jpg";
import item4 from "./testImages/item4.jpg";
import item5 from "./testImages/item5.jpg";
import item6 from "./testImages/item6.jpg";

const exampleItems = [
  {
    productId: "LC93f",
    seller: "Ferreteria Santa Marta",
    rating: 4.0,
    img: [
      tool2,
      tool1,
      tool3,
      item4
    ],
    productTitle: "Tabla de Cortar",
    productPrice: 40000,
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum, turpis quis tempor finibus, mauris felis tristique purus, sed consectetur sapien nisl ac lorem. Donec a nisl urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ultricies dui eu lectus viverra feugiat. Nunc vitae dolor mi. Sed blandit efficitur hendrerit. Vivamus nibh metus, commodo.",
    discount: 5,
    comments: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    ]
  },
  {
    productId: "J07Gw",
    seller: "Ferreteria Santa Marta",
    rating: 2.5,
    img: [
      tool1,
      tool1,
      tool3,
      item4
    ],
    productTitle: "Espatula",
    productPrice: 28000,
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum, turpis quis tempor finibus, mauris felis tristique purus, sed consectetur sapien nisl ac lorem. Donec a nisl urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ultricies dui eu lectus viverra feugiat. Nunc vitae dolor mi. Sed blandit efficitur hendrerit. Vivamus nibh metus, commodo.",
    discount: 10,
    comments: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    ]
  },
  {
    productId: "vo4iq",
    seller: "Ferreteria Santa Marta",
    rating: 3.5,
    img: [
      tool3,
      tool2,
      tool1,
      item4
    ],
    productTitle: "Espatula Pequeña",
    productPrice: 40000,
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum, turpis quis tempor finibus, mauris felis tristique purus, sed consectetur sapien nisl ac lorem. Donec a nisl urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ultricies dui eu lectus viverra feugiat. Nunc vitae dolor mi. Sed blandit efficitur hendrerit. Vivamus nibh metus, commodo.",
    discount: 30,
    comments: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    ]
  },
  {
    productId: "Ob8Ne",
    seller: "Ferreteria Santa Marta",
    rating: 5.0,
    img: [
      item4,
      tool2,
      tool3,
      item4
    ],
    productTitle: "Costal",
    productPrice: 28000,
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum, turpis quis tempor finibus, mauris felis tristique purus, sed consectetur sapien nisl ac lorem. Donec a nisl urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ultricies dui eu lectus viverra feugiat. Nunc vitae dolor mi. Sed blandit efficitur hendrerit. Vivamus nibh metus, commodo.",
    discount: 10,
    comments: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    ]
  },
  {
    productId: "htBFn",
    seller: "Ferreteria Santa Marta",
    rating: 1.0,
    img: [
      item5,
      tool2,
      tool3,
      item4
    ],
    productTitle: "Espatula de madera",
    productPrice: 50000,
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum, turpis quis tempor finibus, mauris felis tristique purus, sed consectetur sapien nisl ac lorem. Donec a nisl urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ultricies dui eu lectus viverra feugiat. Nunc vitae dolor mi. Sed blandit efficitur hendrerit. Vivamus nibh metus, commodo.",
    discount: 10,
    comments: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    ]
  },
  {
    productId: "Yv7aB",
    seller: "Ferreteria Santa Marta",
    rating: 4.5,
    img: [
      item6,
      tool2,
      tool3,
      item4
    ],
    productTitle: "Tabla de cortar",
    productPrice: 59999,
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum, turpis quis tempor finibus, mauris felis tristique purus, sed consectetur sapien nisl ac lorem. Donec a nisl urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ultricies dui eu lectus viverra feugiat. Nunc vitae dolor mi. Sed blandit efficitur hendrerit. Vivamus nibh metus, commodo.",
    discount: 50,
    comments: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    ]
  },
];



export default exampleItems;
