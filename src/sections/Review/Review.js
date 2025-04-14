import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Review.scss';
export default function Review() {
    const users = [
        '/images/1.png',
        '/images/3.png',
        '/images/3.png',
        '/images/4.png'
    ];
    return (_jsxs("div", { className: "review-wrapper", children: [_jsx("div", { className: "avatars-container", children: users.map((src, index) => (_jsx("img", { className: "avatar", src: src, alt: `User ${index + 1}`, style: { zIndex: users.length - index } }, index))) }), _jsx("div", { className: "review-text", children: "1,200+ reviews (4.9 of 5)" })] }));
}
;
