import { useState, useEffect } from "react";

// Reusable Clock Component
function Clock({ country, timeZone }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString("en-US", {
        timeZone: timeZone,
        hour12: false,
      });
      setTime(now);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div style={styles.card}>
      <h3>{country}</h3>
      <h2>{time}</h2>
    </div>
  );
}

// Main App
function App() {
  return (
    <div style={styles.container}>
      <h1>World Clock 🌍</h1>

      <Clock country="India" timeZone="Asia/Kolkata" />
      <Clock country="USA (New York)" timeZone="America/New_York" />
      <Clock country="Japan" timeZone="Asia/Tokyo" />
    </div>
  );
}

// Simple Styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    margin: "15px auto",
    width: "250px",
    borderRadius: "10px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
  },
};

export default App;