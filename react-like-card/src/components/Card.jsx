function Card({ name, likes, onLike }) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <p>Likes: {likes}</p>

      <button onClick={onLike}>
        ❤️ Like
      </button>
    </div>
  );
}

export default Card;