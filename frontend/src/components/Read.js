import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  async function getData() {
    try {
      const response = await fetch("http://localhost:5000");
      const result = await response.json();

      if (!response.ok) {
        setError(result.error);
      } else {
        setData(result);
      }
    } catch (err) {
      setError("Failed to fetch data");
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/${id}`, {
        method: "DELETE"
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error);
      } else {
        setError("Deleted Successfully");
        setTimeout(() => {
          setError("");
          getData();
        }, 1000);
      }
    } catch (err) {
      setError("Failed to delete item");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(to right, #e0f2fe, #f0f9ff)",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          padding: "2rem",
        }}
      >
        {error && (
          <div
            style={{
              backgroundColor: "#f8d7da",
              padding: "10px",
              color: "#721c24",
              borderRadius: "5px",
              marginBottom: "15px",
              textAlign: "center"
            }}
          >
            {error}
          </div>
        )}

        <h2 className="text-center mb-4" style={{ color: "#1E3A8A", fontWeight: "bold" }}>
          All Data
        </h2>

        <div className="row">
          {data?.map((ele) => (
            <div key={ele._id} className="col-md-6 col-lg-4 col-xl-3 mb-4">
              <div
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                  transition: "transform 0.2s",
                  height: "100%",
                  padding: "1rem",
                  backgroundColor: "#ffffff"
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <h5 style={{ color: "#1E3A8A", fontWeight: "bold" }}>{ele.name}</h5>
                <h6 className="text-muted mb-2">{ele.email}</h6>
                <p className="text-muted mb-3">Age: {ele.age}</p>

                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => handleDelete(ele._id)}
                >
                  Delete
                </button>

                <Link to={`/${ele._id}`} className="btn btn-primary btn-sm">
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Read;
