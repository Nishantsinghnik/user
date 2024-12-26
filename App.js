import React, { useEffect, useState } from "react";
import "./App.css"; // Create a CSS file for styling

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUserData(data.results[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="app">
      <h1>USER PROFILE</h1>
      {userData ? (
        <div className="card">
          <div className="profile">
            <img
              src={userData.picture.large}
              alt="User Profile"
              className="profile-picture"
            />
          </div>
          <div className="data">
            <h2>{`${userData.name.title} ${userData.name.first} ${userData.name.last}`}</h2>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Phone:</strong> {userData.phone}
            </p>
            <p>
              <strong>Cell:</strong> {userData.cell}
            </p>
            <p>
              <strong>Username:</strong> {userData.login.username}
            </p>
            <p>
              <strong>Location:</strong>{" "}
              {`${userData.location.street.number} ${userData.location.street.name}, ${userData.location.city}, ${userData.location.state}, ${userData.location.country}, ${userData.location.postcode}`}
            </p>
            <p>
              <strong>Coordinates:</strong>{" "}
              {`Lat: ${userData.location.coordinates.latitude}, Long: ${userData.location.coordinates.longitude}`}
            </p>
            <p>
              <strong>Timezone:</strong>{" "}
              {`${userData.location.timezone.description} (UTC ${userData.location.timezone.offset})`}
            </p>
            <p>
              <strong>Date of Birth:</strong>{" "}
              {new Date(userData.dob.date).toLocaleDateString()} (
              {userData.dob.age} years old)
            </p>
            <p>
              <strong>Registered:</strong>{" "}
              {new Date(userData.registered.date).toLocaleDateString()} (
              {userData.registered.age} years ago)
            </p>
            <p>
              <strong>Nationality:</strong> {userData.nat}
            </p>
            <p>
              <strong>ID:</strong>{" "}
              {userData.id.name
                ? `${userData.id.name}: ${userData.id.value}`
                : "N/A"}
            </p>
          </div>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}

export default App;
