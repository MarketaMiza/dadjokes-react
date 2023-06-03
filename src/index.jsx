import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import { Joke } from "./Joke/index.jsx";
import { jokes } from "./joke";

export const App = () => {

  const jokeComponents = jokes.map((joke) => {
    return (
      <Joke 
      key={joke.id}
      avatar={joke.avatar}
      name={joke.name}
      text={joke.text}
      likes={joke.likes}
      dislikes={joke.dislikes}
      />
    );

  });
  return (
    <div>   
      {jokeComponents}
    </div>
   
  );
};

createRoot(document.querySelector("#app")).render(<App />);
