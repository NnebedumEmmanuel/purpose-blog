import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name"></input>
        <input placeholder="Name"></input>
        <input placeholder="Name"></input>
        <input placeholder="Name"></input>
        <textarea placeholder="message" rows="4"></textarea>
        <button type="submit">Send Messages</button>
      </form>
    </div>
  );
}

export default ContactForm;
