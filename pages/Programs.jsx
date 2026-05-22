import { useEffect, useState } from "react";

function Programs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    major: "",
  });

  const [registrations, setRegistrations] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedRegistrations = localStorage.getItem("registrations");

    if (savedRegistrations) {
      setRegistrations(JSON.parse(savedRegistrations));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("registrations", JSON.stringify(registrations));
  }, [registrations]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      formData.fullName === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.major === ""
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    const newRegistration = {
      id: Date.now(),
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      major: formData.major,
    };

    setRegistrations([...registrations, newRegistration]);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      major: "",
    });

    setMessage("Program registered successfully.");
  }

  function dropRegistration(id) {
    const updatedRegistrations = registrations.filter(
      (registration) => registration.id !== id
    );

    setRegistrations(updatedRegistrations);
    setMessage("Registration dropped successfully.");
  }

  return (
    <main className="main-box">
      <div className="wrap">
        <section className="title-box">
          <h2>Program Registration</h2>
        </section>

        <section className="form-box">
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />

            <label>Select Major</label>
            <select name="major" value={formData.major} onChange={handleChange}>
              <option value="">Choose a major</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Business Administration">
                Business Administration
              </option>
              <option value="Engineering">Engineering</option>
              <option value="Education">Education</option>
              <option value="Pharmacy">Pharmacy</option>
            </select>

            <button type="submit">Register</button>
          </form>

          {message && <p className="message">{message}</p>}
        </section>

        <section className="title-box">
          <h2>My Registered Programs</h2>
        </section>

        {registrations.length === 0 ? (
          <section className="content-box">
            <p>No registered programs yet.</p>
          </section>
        ) : (
          <section className="cards">
            {registrations.map((registration) => (
              <div className="card" key={registration.id}>
                <h3>{registration.major}</h3>
                <p>
                  <strong>Name:</strong> {registration.fullName}
                </p>
                <p>
                  <strong>Email:</strong> {registration.email}
                </p>
                <p>
                  <strong>Phone:</strong> {registration.phone}
                </p>

                <button
                  className="drop-button"
                  onClick={() => dropRegistration(registration.id)}
                >
                  Drop Registration
                </button>
              </div>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

export default Programs;