import React from "react";
import { DessertItem } from "../../types";
import DessertCard from "../../components/CakeCard";

const desserts: DessertItem[] = [
  {
    id: 1,
    title: "Кремовый замок",
    description: "Нежный крем любого цвета на выбор, вафельная основа",
    price: 150,
    image: "images/dessert01.png",
  },
  {
    id: 2,
    title: "Малиновый рай",
    description: "Воздушный крем, темная основа и ягода малины",
    price: 150,
    image: "images/dessert02.png",
  },
  {
    id: 3,
    title: "Фейерверк",
    description: "Разноцветные крем, с бисквитной основой",
    price: 150,
    image: "images/dessert03.png",
  },
  {
    id: 4,
    title: "Шоколадный мир",
    description: "Ореховая стружка, нежный крем и шоколадная основа",
    price: 150,
    image: "images/dessert04.png",
  },
  {
    id: 5,
    title: "Слезы дракона",
    description: "Нежный крем любого цвета на выбор, вафельная основа",
    price: 150,
    image: "images/dessert05.png",
  },
  {
    id: 6,
    title: "Летняя фантазия",
    description: "Украшения в форме сердец, для любимого человека",
    price: 150,
    image: "images/dessert06.png",
  },
  {
    id: 7,
    title: "Мыс безумия",
    description: "Разноцветная основа, стружка и нежный крем",
    price: 150,
    image: "images/dessert07.png",
  },
  {
    id: 8,
    title: "Облачная сказка",
    description: "Светлая основа, нежный крем со стружкой сверху",
    price: 150,
    image: "images/dessert08.png",
  },
  {
    id: 9,
    title: "Темный рыцарь",
    description: "Тёмная основа, нежный крем и вкусные шарики",
    price: 150,
    image: "images/dessert09.png",
  }
];

const ProductsSection: React.FC = () => {
  return (
    <div id="catalog" className="showcase">
      <div className="container">
        <div className="showcase-title">
          Для любых событий и дорогих вам людей
        </div>
        <div className="showcase-grid">
          {desserts.map((item) => (
            <DessertCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
