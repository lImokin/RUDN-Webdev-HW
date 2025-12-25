import React from "react";

const GallerySection: React.FC = () => {
  return (
    <div className="gallery-section">
      <div className="container">
        <div className="gallery-heading-block">
          <span className="gallery-heading">Сделали более 3.000 заказов за 2 года</span>
        </div>
        <div className="gallery-subheading-block">
          <span className="gallery-subheading">
            Посмотрите фото реальных заказов из нашего instagram
          </span>
        </div>
        <div className="gallery-grid">
          <img src="images/gallery01.png" alt="" />
          <img src="images/gallery02.png" alt="" />
          <img src="images/gallery03.png" alt="" />
          <img src="images/gallery04.png" alt="" />
          <img src="images/gallery05.png" alt="" />
          <img src="images/gallery06.png" alt="" />
          <img src="images/gallery07.png" alt="" />
          <img src="images/gallery08.png" alt="" />
          <img src="images/gallery09.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
