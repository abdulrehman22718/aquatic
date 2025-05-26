import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: "We're here to make pool maintenance easy & hassle free for you...",
    name: "Alex Michel",
    designation: "Ui/Ux Designer",
    image: "assets/img/testimonial/testi_3_1.jpg",
    rating: 4,
  },
  {
    text: "We meticulously test and balance the water chemistry during each service visit...",
    name: "Dianne Russell",
    designation: "Ui/Ux Designer",
    image: "assets/img/testimonial/testi_3_2.jpg",
    rating: 4,
  },
  {
    text: "Parallel task user friendly through supply are chains...",
    name: "Wade Warren",
    designation: "Ui/Ux Designer",
    image: "assets/img/testimonial/testi_3_3.jpg",
    rating: 4,
  },
  {
    text: "Continually utilize 24/365 bandwidth before real-time interfaces...",
    name: "David Marlo",
    designation: "Ui/Ux Designer",
    image: "assets/img/testimonial/testi_3_1.jpg",
    rating: 4,
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
