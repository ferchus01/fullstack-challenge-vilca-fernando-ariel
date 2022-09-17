import React, { useEffect, useState } from "react";
import { getCharacters } from "../services/service";
import { CharacterItem } from "./CharacterItem";

export const CharacterList = () => {
  const [charList, setCharList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [urlImage, setUrlImage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => {
        console.log(data.results);
        setCharList(data.results);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading && <p>Loading</p>}
      <img src={urlImage} alt="image" />
      {charList.map((char) => (
        <CharacterItem key={char.id} {...char} setUrlImage={setUrlImage} />
      ))}
    </div>
  );
};
