import { useState } from "react";
import text from "./data";
import { nanoid } from "nanoid";

const App = () => {
  // Setup a count state value
  const [count, setCount] = useState(1);

  // Text state value
  const [userText, setUserText] = useState([]);

  //OnChange Function
  function handleChange(e) {
    setCount(() => {
      const newCount = e.target.value;
      return newCount;
    });
  }

  // Handle Submit Function
  function handleSubmit(e) {
    e.preventDefault();

    const newText = text.slice(0, count);
    setUserText(newText);
  }
  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="number">Paragraphs: </label>
        <input
          type="number"
          name="number"
          id="number"
          min={1}
          max={8}
          step={1}
          value={count}
          onChange={handleChange}
        />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {userText.map((paragraph) => {
          const id = nanoid();
          return <p key={id}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
