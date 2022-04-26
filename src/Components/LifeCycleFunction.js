import React, { useState, useEffect } from "react";
import axios from "axios";

const Lifecyclefunction = () => {
  let userAlbums = [];
  const [albums, setAlbums] = useState(userAlbums);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        // handle success
        //console.log(response);
        setAlbums(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div>
      <h1>Lifecyclefunction</h1>
      {albums.map((album) => {
        return (
          <div key={album.id}>
            <h1>{album.title}</h1>
            <h1>{album.userId}</h1>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Lifecyclefunction;
