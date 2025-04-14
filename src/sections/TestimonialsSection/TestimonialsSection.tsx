import { Container } from "react-bootstrap";
import { useTheme } from "next-themes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./TestimonialsSection.scss";
import "swiper/css";
import "swiper/css/navigation";

interface TestimonialProps {
  name?: string;
  content: string;
  rating: number;
  image: string;
}

export default function TestimonialsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // const testimonials: TestimonialProps[] = [
  //   // ...
  // ];
  const testimonials: TestimonialProps[] = [
    {
      name: "Alfredo Lubin",
      content:
        "I really like the system at this management, i love recommending this software to you guys",
      rating: 5,
      image: "/images/1.png",
    },
    {
      name: "Jane Doe",
      content:
        "We align our success with the success of our customers which is why our offering transcends our software",
      rating: 4,
      image: "/images/1.png",
    },
    {
      name: "Ahmed Mostafa",
      content:
        "I really like the system at this management, i love recommending this software to you guys",
      rating: 5,
      image: "/images/1.png",
    },
    {
      name: "Ahmed Mostafa",
      content:
        "I really like the system at this management, i love recommending this software to you guys",
      rating: 5,
      image: "/images/1.png",
    },
  ];

  return (
    <div
      className={`testimonials-section ${isDark ? "dark-mode" : "light-mode"}`}
    >
      <Container>
        <div className="text-center mb-4">
          <span className="badge-testimonials">Testimonials</span>
          <h2 className="section-title">What are people saying</h2>
          <p className="description">
            "Thank you for your trust in Crypt Land!...
          </p>
        </div>

        <div className="testimonials-swiper-container">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            spaceBetween={15}
            slidesPerView={3}
            loop={true}
            centeredSlides={false}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 15 },
              992: { slidesPerView: 3, spaceBetween: 15 },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <p className="content">{item.content}</p>
                  <div className="user-info">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="user-img"
                    />
                    <div>
                      <h5>{item.name}</h5>
                      <div className="stars">
                        {[...Array(item.rating)].map((_, i) => (
                          <span key={i} className="star">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="quote-mark">"</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="navigation-buttons">
          <button className="nav-btn prev">❮</button>
          <button className="nav-btn next">❯</button>
        </div>
      </Container>
    </div>
  );
}
