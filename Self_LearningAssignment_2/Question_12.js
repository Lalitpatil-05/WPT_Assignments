import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    course: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Validation
  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name is required";
    if (!form.email.includes("@")) err.email = "Valid email required";
    if (!form.gender) err.gender = "Select gender";
    if (!form.course) err.course = "Select course";

    return err;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();

    if (Object.keys(err).length === 0) {
      setSubmitted(true);
      setErrors({});
    } else {
      setErrors(err);
      setSubmitted(false);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <br />
        Gender:
        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
        <br />
        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}

        <br />
        <select name="course" onChange={handleChange}>
          <option value="">Select Course</option>
          <option>BCA</option>
          <option>BSc</option>
          <option>BTech</option>
        </select>
        <br />
        {errors.course && <p style={{ color: "red" }}>{errors.course}</p>}

        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {submitted && <h3 style={{ color: "green" }}>Form Submitted Successfully!</h3>}
    </div>
  );
}

export default App;