import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  // function handleChange(e) {
  //   setText(e.target.value);
  // }

  function handleGetText() {
    fetch('www.getrandomtext.com')
      .then((r) => r.json())
      .then((data) => {
        setText("hello world")
      })
      .catch((error) => {
        setText("hello world")
      });
  }

  return (
    <div className="App">
      <p>
        <button onClick={handleGetText}>get text</button>
        <input type="text" name="inputHere" value={text} onChange={(e) => setText(e.target.value)} />
        {text.toUpperCase()}
      </p>
    </div>
  );
}

export default App;
