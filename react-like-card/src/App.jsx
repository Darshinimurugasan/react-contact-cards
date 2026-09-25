import { useState } from "react";
import "./App.css";

function App() {
  const [likes, setLikes] = useState([
    { id: 1, name: "Virat Kohli", likes: 0 },
    { id: 2, name: "MS Dhoni", likes: 0 },
    { id: 3, name: "Rohit Sharma", likes: 0 },
  ]);

  const [player, setPlayer] = useState("");

  const handleLike = (id) => {
    setLikes(
      likes.map((card) =>
        card.id === id
          ? { ...card, likes: card.likes + 1 }
          : card
      )
    );
  };

  const resetLikes = () => {
    setLikes(
      likes.map((card) => ({
        ...card,
        likes: 0,
      }))
    );
  };

  const totalLikes = likes.reduce(
    (sum, card) => sum + card.likes,
    0
  );

  const mostLiked =
    likes.length > 0
      ? likes.reduce((prev, current) =>
          prev.likes > current.likes ? prev : current
        )
      : null;

  const addPlayer = () => {
    if (player.trim() !== "") {
      setLikes([
        ...likes,
        {
          id: Date.now(),
          name: player,
          likes: 0,
        },
      ]);
      setPlayer("");
    }
  };

  const sortPlayers = () => {
    const sorted = [...likes].sort(
      (a, b) => b.likes - a.likes
    );
    setLikes(sorted);
  };

  return (
    <div className="container">
      <h1>🏏 React Like Cards</h1>

      <h2>Total Likes: {totalLikes}</h2>

      {mostLiked && (
        <h3>
          👑 Most Liked Player: {mostLiked.name}
        </h3>
      )}

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Player Name"
          value={player}
          onChange={(e) =>
            setPlayer(e.target.value)
          }
        />

        <button onClick={addPlayer}>
          Add Player
        </button>
      </div>

      <div className="top-buttons">
        <button onClick={resetLikes}>
          Reset Likes
        </button>

        <button onClick={sortPlayers}>
          Sort By Likes
        </button>
      </div>

      {likes.map((card) => (
        <div key={card.id} className="card">
          <h2>{card.name}</h2>

          <p>Likes: {card.likes}</p>

          <button
            onClick={() =>
              handleLike(card.id)
            }
          >
            ❤️ Like
          </button>

          <button
            className="delete-btn"
            onClick={() =>
              setLikes(
                likes.filter(
                  (item) =>
                    item.id !== card.id
                )
              )
            }
          >
            🗑 Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;