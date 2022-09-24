import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Checkbox from "./Checkbox";
import RadioButtons from "./RadioButtons";
import Select from "./Select";
import Textarea from "./Textarea";
import TextInput from "./TextInput";

function App() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState(""); // change to "usa" for default selection
  const [message, setMessage] = useState("");
  const [contactTimePreference, setContactTimePreference] =
    useState("afternoon");
  const [isOptedInToNewsletter, setIsOptedInToNewsletter] = useState(false); // change to true for default check

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      name,
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
          <TextInput
            id="name"
            label="Name"
            value={name}
            onChange={(updatedName) => {
              setName(updatedName);
            }}
          />
        </div>
        <div className="my-3">
          <TextInput
            id="phone"
            label="Phone"
            value={phoneNumber}
            onChange={(updatedPhoneNumber) => {
              setPhoneNumber(updatedPhoneNumber);
            }}
          />
        </div>
        <div className="mb-3">
          <Select
            label="Country"
            value={country}
            options={[
              { value: "", label: "--Select a Country--" },
              { value: "usa", label: "United States" },
              { value: "canada", label: "Canada" },
              { value: "mexico", label: "Mexico" },
            ]}
            onChange={(updatedCountry) => {
              setCountry(updatedCountry);
            }}
          />
        </div>
        <div className="mb-3">
          <Textarea
            label="Message"
            id="message"
            value={message}
            onChange={(updatedMessage) => {
              setMessage(updatedMessage);
            }}
          />
        </div>
        <div className="mb-3">
          <p>When is the best time to contact you?</p>
          <RadioButtons
            name="contact-time-preference"
            options={[
              { value: "morning", label: "Morning" },
              { value: "afternoon", label: "Afternoon" },
            ]}
            value={contactTimePreference}
            onChange={(updatedContactTimePreference) => {
              setContactTimePreference(updatedContactTimePreference);
            }}
          />
        </div>
        <div className="mb-3">
          <Checkbox
            id="newsletter"
            label="Check if you'd like to opt-in to our newsletter"
            checked={isOptedInToNewsletter}
            onChange={(updatedIsOptedInToNewsletter) => {
              setIsOptedInToNewsletter(updatedIsOptedInToNewsletter);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
