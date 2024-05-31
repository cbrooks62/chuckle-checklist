import "./App.css";
import { useEffect, useState } from "react";
import {
  getAllJokes,
  getToldJokes,
  getUntoldJokes,
  postNewJoke,
  editedJokes,
} from "./services/jokeService.jsx";
import stevePic from "./assets/steve.png";

export const App = () => {
  const [newJoke, setNewJoke] = useState("");
  const [allJokes, setAllJokes] = useState([]);
  const [untoldJokes, setUntoldJokes] = useState([]);
  const [toldJokes, setToldJokes] = useState([]);

  useEffect(() => {
    getAllJokes().then((jokeArray) => {
      setAllJokes(jokeArray);
    });
  }, []);

  useEffect(() => {
    getUntoldJokes().then((unToldObj) => {
      setUntoldJokes(unToldObj);
    });
  }, []);

  useEffect(() => {
    getToldJokes().then((toldObj) => {
      setToldJokes(toldObj);
    });
  }, []);

  const handleStatusChange = async () => {
    const statusChange = {
      id: joke.id,
      text: joke.text,
      told: !joke.told,
    };
    await updateStatus(statusChange).then(() => {
      getStatusChange();
    });
  };

  return (
    <div className="app-container">
      <div className="app-heading">
        <div className="app-heading-circle ">
          <img className="app-logo " src={stevePic} alt="Good job Steve" />
        </div>
        <header className="app-heading-text">Chuckle Checklist</header>
      </div>
      <div className="joke-add-form">
        <div>
          <h2>Add Joke</h2>
        </div>
        <input
          className="joke-input joke-input:focus"
          type="text"
          placeholder="New One Liner"
          value={newJoke}
          onChange={(event) => {
            // What's the value of event?
            setNewJoke(event.target.value);
          }}
        />
        <button
          className="joke-input-submit joke-input-submit:hover
        joke-input-submit:active"
          onClick={() => {
            postNewJoke({ text: newJoke, told: false }).then(setNewJoke(""));
          }}
        >
          Add
        </button>
      </div>
      <div className="joke-lists-container">
        <div className="joke-list-container">
          <h2>
            Untold <span className="untold-count">{untoldJokes.length}</span>
          </h2>
          {untoldJokes.map((untoldJoke) => {
            return (
              <ul key={untoldJoke.id}>
                <li className="joke-list-item ">
                  <p className="joke-list-item-text">{untoldJoke.text}</p>
                  <div className="joke-list-action-toggle">
                    <button
                      className="fa-regular fa-face-meh joke-list-action-toggle :hover "
                      onClick={handleStatusChange}
                    ></button>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="joke-list-container">
          <h2>
            Told <span className="told-count">{toldJokes.length}</span>
          </h2>
          {toldJokes.map((toldJoke) => {
            return (
              <ul key={toldJoke.id}>
                <li className="joke-list-item ">
                  <p className="joke-list-item-text">{toldJoke.text}</p>
                  <div className="joke-list-action-toggle">
                    <button
                      i
                      className="fa-regular fa-face-laugh-squint joke-list-action-toggle :hover"
                      onClick={handleStatusChange}
                    ></button>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};
