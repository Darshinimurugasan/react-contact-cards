import React from "react";

function ResponseList({ responses, deleteResponse }) {
  return (
    <div className="card-container">
      {responses.length === 0 ? (
        <p>No Responses Yet</p>
      ) : (
        responses.map((item, index) => (
          <div className="contact-card" key={index}>
            <h3>👤 {item.name}</h3>

            <p>
              <strong>📧 Email:</strong> {item.email}
            </p>

            <p>
              <strong>💬 Message:</strong> {item.message}
            </p>

            <p>
              <strong>🕒 Time:</strong> {item.timestamp}
            </p>

            <button
              className="delete-btn"
              onClick={() => deleteResponse(index)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ResponseList;