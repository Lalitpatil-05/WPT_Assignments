import { useState, useEffect } from "react";

// Clock Component
function Clock({ country, timeZone, onRemove }) {
  const [time, setTime] = useState("");
  const [isPM, setIsPM] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const options = {
        timeZone: timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      const formatted = now.toLocaleTimeString("en-US", options);
      setTime(formatted);

      // Check AM / PM
      setIsPM(formatted.includes("PM"));
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, [timeZone]);

  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: isPM ? "#ffcccb" : "#cce5ff", // PM = red, AM = blue
      }}
    >
      <h3>{country}</h3>
      <h2>{time}</h2>

      <button onClick={onRemove} style={styles.btn}>
        ❌ Close
      </button>
    </div>
  );
}

// Main App
function App() {
  const [clocks, setClocks] = useState([
    { id: 1, country: "India", tz: "Asia/Kolkata" },
    { id: 2, country: "USA (New York)", tz: "America/New_York" },
    { id: 3, country: "Japan", tz: "Asia/Tokyo" },
  ]);

  // Remove clock
  const removeClock = (id) => {
    setClocks(clocks.filter((c) => c.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>World Clock 🌍</h1>

      {clocks.map((c) => (
        <Clock
          key={c.id}
          country={c.country}
          timeZone={c.tz}
          onRemove={() => removeClock(c.id)}
        />
      ))}
    </div>
  );
}

// Styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
  },
  card: {
    padding: "20px",
    margin: "15px auto",
    width: "260px",
    borderRadius: "10px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
  },
  btn: {
    marginTop: "10px",
    padding: "5px 10px",
    border: "none",
    background: "black",
    color: "white",
    cursor: "pointer",
  },
};

export default App;