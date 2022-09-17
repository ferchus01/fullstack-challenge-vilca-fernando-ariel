import React from "react";

export const CharacterItem = ({
  image,
  name,
  status,
  species,
  setUrlImage,
}) => {
  return (
    <div onClick={() => setUrlImage(image)}>
      <img src={image} alt="image" />
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
    </div>
  );
};
