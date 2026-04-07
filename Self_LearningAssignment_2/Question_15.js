import { useState, useEffect } from "react";

// Clock Component
function Clock({ country, timeZone, onRemove }) {
  const [time, setTime] = useState("");
  const [isPM, setIsPM] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      setTime(formatted);
      setIsPM(formatted.includes("PM"));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: isPM ? "#ffcccb" : "#cce5ff",
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
  const [clocks, setClocks] = useState([]);
  const [selected, setSelected] = useState("");

  // Available time zones
  const options = [
    { country: "India", tz: "Asia/Kolkata" },
    { country: "USA (New York)", tz: "America/New_York" },
    { country: "Japan", tz: "Asia/Tokyo" },
    { country: "UK (London)", tz: "Europe/London" },
    { country: "Australia (Sydney)", tz: "Australia/Sydney" },
  ];

  // Add clock
  const addClock = () => {
    if (!selected) return;

    const selectedObj = options.find((o) => o.tz === selected);

    // Prevent duplicate
    if (clocks.some((c) => c.tz === selected)) {
      alert("Clock already added!");
      return;
    }

    setClocks([
      ...clocks,
      { id: Date.now(), country: selectedObj.country, tz: selected },
    ]);
  };

  // Remove clock
  const removeClock = (id) => {
    setClocks(clocks.filter((c) => c.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>World Clock 🌍</h1>

      {/* Dropdown + Button */}
      <div>
        <select onChange={(e) => setSelected(e.target.value)}>
          <option value="">Select Country</option>
          {options.map((o, i) => (
            <option key={i} value={o.tz}>
              {o.country}
            </option>
          ))}
        </select>

        <button onClick={addClock} style={styles.addBtn}>
          ➕ Add
        </button>
      </div>

      {/* Render Clocks */}
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
  addBtn: {
    marginLeft: "10px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default App;