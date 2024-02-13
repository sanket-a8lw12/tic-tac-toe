import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [buttonText, setButtonText] = useState("Edit");
  const [player, setPlayer] = useState(name);

  // we can store html in js variable as well
  let playerName = <span className="player-name">{player}</span>;

  function handleClick() {
    if (isEditing == false) {
      setIsEditing(true);
      setButtonText("Save"); // To change the bitton text on click
    } else {
      setIsEditing(false);
      setButtonText("Edit");
    }
  }
  console.log("Is Editing = " + isEditing);

  function handleChange(event){
    console.log(event.target.value);
    setPlayer(event.target.value);
  }

  // now the story is like that if we click on edit button and if its state is true
  // then we have to display input field type textfield;
  // and onchange is applied on the input field not on button

  if (isEditing) {
    playerName = <input type="text" required onChange={handleChange} value={player}/>;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>
        {buttonText}
      </button>
    </li>
  );
}
