import { useState } from 'react';

function Home() {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);
  const handleUpper = () => setText(text.toUpperCase());
  const handleLower = () => setText(text.toLowerCase());
  const handleTrim = () => setText(text.trim());
  const handleClear = () => setText('');
  const handleRemoveExtraSpaces = () => setText(text.replace(/\s+/g, ' ').trim());
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('Text copied!');
  };

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const readingTime = (wordCount / 120).toFixed(2);

  return (
    <div className="container">
      <h2>
      Type your content and choose how you want the case to be changed
      </h2>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here..."
        rows={8}
      />

      <div className="button-group">
        <button className="blue" onClick={handleUpper}>Uppercase</button>
        <button className="blue" onClick={handleLower}>Lowercase</button>
        <button className="blue" onClick={handleTrim}>Trim</button>
        <button className="blue" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        <button className="red" onClick={handleClear}>Clear</button>
        <button className="green" onClick={handleCopy}>Copy</button>
      </div>

      <div className="report">
        <p>Character count: {charCount}</p>
        <p>Word count: {wordCount}</p>
        <p>Estimated reading time: {readingTime} minutes</p>
      </div>

      <div className="preview">
        <h3>Preview:</h3>
        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
      </div>
    </div>
  );
}

export default Home;
