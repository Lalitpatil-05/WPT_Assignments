import { useState, useEffect } from "react";

function Clock({ country, timeZone, onRemove }) {
  const [time, setTime] = useState("");
  const [isPM, setIsPM] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const formatted = new Date().toLocaleTimeString("en-US", {
        timeZone,
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
        margin: "15px auto",
        padding: "20px",
        width: "250px",
        borderRadius: "10px",
        backgroundColor: isPM ? "#ffcccb" : "#cce5ff",
      }}
    >
      <h3>{country}</h3>
      <h2>{time}</h2>

      <button onClick={onRemove}>❌ Close</button>
    </div>
  );
}

export default Clock;