import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container">
      <form>
        <div className="my-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>

          <input type="text" className="form-control" id="phone" />
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <select className="form-select form-select-lg">
            <option>--Select a country--</option>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="mexico">Mexico</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea className="form-control" id="message" rows="3" />
        </div>
        <div className="mb-3">
          <p>When is the best time to contact you?</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="contact-time-preference"
              id="morning-contact-time-preference"
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
          <input className="form-check-input" type="checkbox" id="newsletter" />
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
