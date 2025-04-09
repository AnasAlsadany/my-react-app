import './Review.scss';

export default function Review () {
  const users = [
    '/images/1.png',
    '/images/3.png',
    '/images/3.png',
    '/images/4.png'
  ];

  return (
    <div className="review-wrapper">
      <div className="avatars-container">
        {users.map((src, index) => (
          <img
            key={index}
            className="avatar"
            src={src}
            alt={`User ${index + 1}`}
            style={{ zIndex: users.length - index }}
          />
        ))}
      </div>
      <div className="review-text">1,200+ reviews (4.9 of 5)</div>
    </div>
  );
};

