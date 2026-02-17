import { useState } from "react";

const App = () => {
  // Setup a count state value
  const [count, setCount] = useState(1);

  //OnChange Function
  function handleChange(e) {
    setCount(() => {
      const newCount = e.target.value;
      return newCount;
    });
  }

  // Handle Submit Function
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
    </section>
  );
};
export default App;
