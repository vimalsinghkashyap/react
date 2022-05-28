import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAdd(inputText);
    event.preventDefault();
    setInputText({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={inputText.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={inputText.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
