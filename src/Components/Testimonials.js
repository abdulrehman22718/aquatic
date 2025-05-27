import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: "Star Pools made our pool renovation project seamless and stress-free. Highly recommended!",
    name: "Alex Michel",
    designation: "Homeowner",
    image: "assets/img/testimonial/testi_3_1.jpg",
    rating: 5,
  },
  {
    text: "We trusted Star Pools with our new pool build, and the result exceeded all expectations.",
    name: "Dianne Russell",
    designation: "Property Manager",
    image: "assets/img/testimonial/testi_3_2.jpg",
    rating: 5,
  },
  {
    text: "Their expertise in pool design and attention to detail truly transformed our backyard.",
    name: "Wade Warren",
    designation: "Landscape Architect",
    image: "assets/img/testimonial/testi_3_3.jpg",
    rating: 5,
  },
  {
    text: "Star Pools delivered an outstanding pool renovation, bringing our vision to life perfectly.",
    name: "David Marlo",
    designation: "Real Estate Investor",
    image: "assets/img/testimonial/testi_3_1.jpg",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Testimonials</span>
          <h2 className="sec-title">Our Trusted Clients Feedback</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testi-item">
                <p className="testi-item_text">{item.text}</p>
                <div className="testi-item_wrapp">
              {/*    <div className="testi-item_profile">
                    <img src={item.image} alt="testimonial" />
                  </div>*/}
                  <div className="media-body">
                    <h3 className="box-title">{item.name}</h3>
                    <span className="testi-item_desig">{item.designation}</span>
                    <div className="star-icon">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fa-star ${
                            i < item.rating ? 'fa-solid' : 'fa-regular'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="testi-quote">
                  <img src="assets/img/icon/quote_3.svg" alt="quote" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
