export const postNewJoke = async (jokeObject) => {
  const postJoke = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObject),
  };
  console.log(postJoke);
  // Send the transient state to your API
  const response = await fetch("http://localhost:8088/jokes", postJoke);

};

export const getAllJokes = async () => {
  const res = await fetch("http://localhost:8088/jokes");
  return await res.json();
};

export const getToldJokes = async () => {
  const res = await fetch("http://localhost:8088/jokes?told=true");
  return await res.json();
};

export const getUntoldJokes = async () => {
  const res = await fetch("http://localhost:8088/jokes?told=false");
  return await res.json();
};

export const editedJokes = async (editedJoke) => {
  return (
    fetch(`http://localhost:8088/jokes`),
    {
      method: "PUT",
      headers: {
        "Content-Type": "application-json",
      },
      body: JSON.stringify(editedJoke),
    }
  );
};
