import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from "react-bootstrap";
import { useTheme } from "next-themes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./TestimonialsSection.scss";
import "swiper/css";
import "swiper/css/navigation";
export default function TestimonialsSection() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    // const testimonials: TestimonialProps[] = [
    //   // ...
    // ];
    const testimonials = [
        {
            name: "Alfredo Lubin",
            content: "I really like the system at this management, i love recommending this software to you guys",
            rating: 5,
            image: "/images/1.png",
        },
        {
            name: "Jane Doe",
            content: "We align our success with the success of our customers which is why our offering transcends our software",
            rating: 4,
            image: "/images/1.png",
        },
        {
            name: "Ahmed Mostafa",
            content: "I really like the system at this management, i love recommending this software to you guys",
            rating: 5,
            image: "/images/1.png",
        },
        {
            name: "Ahmed Mostafa",
            content: "I really like the system at this management, i love recommending this software to you guys",
            rating: 5,
            image: "/images/1.png",
        },
    ];
    return (_jsx("div", { className: `testimonials-section ${isDark ? "dark-mode" : "light-mode"}`, children: _jsxs(Container, { children: [_jsxs("div", { className: "text-center mb-4", children: [_jsx("span", { className: "badge-testimonials", children: "Testimonials" }), _jsx("h2", { className: "section-title", children: "What are people saying" }), _jsx("p", { className: "description", children: "\"Thank you for your trust in Crypt Land!..." })] }), _jsx("div", { className: "testimonials-swiper-container", children: _jsx(Swiper, { modules: [Navigation], navigation: {
                            nextEl: ".next",
                            prevEl: ".prev",
                        }, spaceBetween: 15, slidesPerView: 3, loop: true, centeredSlides: false, breakpoints: {
                            0: { slidesPerView: 1, spaceBetween: 10 },
                            768: { slidesPerView: 2, spaceBetween: 15 },
                            992: { slidesPerView: 3, spaceBetween: 15 },
                        }, className: "testimonials-swiper", children: testimonials.map((item, index) => (_jsx(SwiperSlide, { className: "testimonial-slide", children: _jsxs("div", { className: "testimonial-card", children: [_jsx("p", { className: "content", children: item.content }), _jsxs("div", { className: "user-info", children: [_jsx("img", { src: item.image, alt: item.name, className: "user-img" }), _jsxs("div", { children: [_jsx("h5", { children: item.name }), _jsx("div", { className: "stars", children: [...Array(item.rating)].map((_, i) => (_jsx("span", { className: "star", children: "\u2605" }, i))) })] })] }), _jsx("div", { className: "quote-mark", children: "\"" })] }) }, index))) }) }), _jsxs("div", { className: "navigation-buttons", children: [_jsx("button", { className: "nav-btn prev", children: "\u276E" }), _jsx("button", { className: "nav-btn next", children: "\u276F" })] })] }) }));
}
