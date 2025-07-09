import React from 'react';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import '../Products.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Modal.setAppElement('#root');

const ProductModal = ({ product, onClose }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <div className="modal-left">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {product?.images?.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Slide ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="modal-right">
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>{product.title}</h2>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Quality:</strong> {product.quality}</p>
          <p className='highlight'><strong>Highlight:</strong></p>
          <ul>{product?.highlights?.map(highlight => <li>{highlight}</li>)}</ul>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
