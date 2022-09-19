import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState(""); // change to "usa" for default selection
  const [message, setMessage] = useState("");
  const [contactTimePreference, setContactTimePreference] =
    useState("afternoon");
  const [isOptedInToNewsletter, setIsOptedInToNewsletter] = useState(false); // change to true for default check

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      phoneNumber,
      country,
      message,
      contactTimePreference,
      isOptedInToNewsletter,
    });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>

          <input
            type="text"
            className="form-control"
            id="phone"
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <select
            className="form-select form-select-lg"
            value={country}
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          >
            <option value="">--Select a country--</option>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="mexico">Mexico</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <p>When is the best time to contact you?</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="contact-time-preference"
              id="morning-contact-time-preference"
              value="morning"
              onChange={(event) => {
                setContactTimePreference(event.target.value);
              }}
              checked={contactTimePreference === "morning"}
            />
            <label
              className="form-check-label"
              htmlFor="morning-contact-time-preference"
            >
              Morning
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="contact-time-preference"
              id="afternoon-contact-time-preference"
              value="afternoon"
              onChange={(event) => {
                setContactTimePreference(event.target.value);
              }}
              checked={contactTimePreference === "afternoon"}
            />
            <label
              className="form-check-label"
              htmlFor="afternoon-contact-time-preference"
            >
              Afternoon
            </label>
          </div>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="newsletter"
            checked={isOptedInToNewsletter}
            onChange={(event) => {
              setIsOptedInToNewsletter(event.target.checked);
            }}
          />
          <label className="form-check-label" htmlFor="newsletter">
            Check if you'd like to opt-in to our newsletter
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
