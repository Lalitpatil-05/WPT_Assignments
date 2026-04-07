import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addClock, removeClock } from "./clockSlice";
import Clock from "./Clock";

function App() {
  const clocks = useSelector((state) => state.clocks);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");

  const options = [
    { country: "India", tz: "Asia/Kolkata" },
    { country: "USA (New York)", tz: "America/New_York" },
    { country: "Japan", tz: "Asia/Tokyo" },
    { country: "UK (London)", tz: "Europe/London" },
  ];

  const handleAdd = () => {
    if (!selected) return;

    const obj = options.find((o) => o.tz === selected);

    dispatch(
      addClock({
        id: Date.now(),
        country: obj.country,
        tz: obj.tz,
      })
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Redux World Clock 🌍</h1>

      <select onChange={(e) => setSelected(e.target.value)}>
        <option value="">Select Country</option>
        {options.map((o, i) => (
          <option key={i} value={o.tz}>
            {o.country}
          </option>
        ))}
      </select>

      <button onClick={handleAdd}>➕ Add</button>

      {clocks.map((c) => (
        <Clock
          key={c.id}
          country={c.country}
          timeZone={c.tz}
          onRemove={() => dispatch(removeClock(c.id))}
        />
      ))}
    </div>
  );
}

export default App;