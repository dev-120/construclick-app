// import CementArgos from "./testImages/tool1.jpg";
// import tool2 from "./testImages/tool2.jpg";
// import tool3 from "./testImages/tool3.jpg";
// import item4 from "./testImages/item4.jpg";
// import item5 from "./testImages/item5.jpg";
// import item6 from "./testImages/item6.jpg";

import CementArgos from "../../assets/cement_image.jpg"
import AcrilicWaterproof from "../../assets/impermeabilizante_img.jpg"
import StuccoImage from "../../assets/stucco_img.jpg"
import PolisombraImg from "../../assets/polisombra_img.jpg"
import Mastic from "../../assets/masilla_img.jpg"
import Mesh from "../../assets/malla_img.jpg"

const exampleItems = [
  {
    productId: "LC93F",
    seller: "Ferreteria Santa Marta",
    rating: 4.0,
    img: [
      CementArgos,
      AcrilicWaterproof,
      PolisombraImg
    ],
    productTitle: "Cemento Argos 50kg",
    productPrice: 25900,
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
    productId: "J07GW",
    seller: "Ferreteria Santa Marta",
    rating: 2.5,
    img: [
      AcrilicWaterproof,
      CementArgos,
      AcrilicWaterproof,
      PolisombraImg
    ],
    productTitle: "Impermeabilizante Topex",
    productPrice: 61900,
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
    productId: "VO4IQ",
    seller: "Ferreteria Santa Marta",
    rating: 3.5,
    img: [
      StuccoImage,
      AcrilicWaterproof,
      Mastic,
      CementArgos,
      PolisombraImg
    ],
    productTitle: "Estucor estuco 5 kilos",
    productPrice: 7900,
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum, turpis quis tempor finibus, mauris felis tristique purus, sed consectetur sapien nisl ac lorem. Donec a nisl urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ultricies dui eu lectus viverra feugiat. Nunc vitae dolor mi. Sed blandit efficitur hendrerit. Vivamus nibh metus, commodo.",
    discount: 15,
    comments: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    ]
  },
  {
    productId: "OB8NE",
    seller: "Ferreteria Santa Marta",
    rating: 5.0,
    img: [
      PolisombraImg,
      StuccoImage,
      AcrilicWaterproof,
      CementArgos
    ],
    productTitle: "Polisombra Negra 80% 1m x 4m",
    productPrice: 7400,
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
    productId: "HTBFN",
    seller: "Ferreteria Santa Marta",
    rating: 1.0,
    img: [
      Mastic,
      StuccoImage,
      AcrilicWaterproof,
      CementArgos,
      PolisombraImg
    ],
    productTitle: "Masilla 1g 5.6k",
    productPrice: 15400,
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
    productId: "YV7AB",
    seller: "Ferreteria Santa Marta",
    rating: 4.5,
    img: [
      Mesh,
      StuccoImage,
      AcrilicWaterproof,
      CementArgos,
      PolisombraImg,
      Mastic
    ],
    productTitle: "Malla reja 1.20m x 3m",
    productPrice: 43400,
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
