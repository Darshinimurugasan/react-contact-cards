function ResponseList() {
  const responses =
    JSON.parse(localStorage.getItem("contactResponses")) || [];

  const deleteResponse = (index) => {
    const updated = responses.filter(
      (_, i) => i !== index
    );

    localStorage.setItem(
      "contactResponses",
      JSON.stringify(updated)
    );

    window.location.reload();
  };

  return (
    <div>
      <h2>Stored Responses</h2>

      {responses.length === 0 ? (
        <p>No responses found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {responses.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
                <td>{item.timestamp}</td>
                <td>
                  <button
                    onClick={() => deleteResponse(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ResponseList;