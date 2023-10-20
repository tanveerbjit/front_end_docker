import React from 'react';

function ProductImageCarousel({img}) {
  return (
    <div id="product-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner bg-light">
        <div className="carousel-item active">
          <img className="w-100 h-100" src={img} alt="Image" />
        </div>
      </div>
    </div>
  );
}

export default ProductImageCarousel;
