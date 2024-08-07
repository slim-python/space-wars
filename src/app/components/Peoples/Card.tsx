import React from "react";

const Card = ({ type, character }: { type: any; character: any }) => {
  return (
    <div>
      <div className="card dark:text-gray-300">
        <img
          src={character.image}
          alt={character.name}
          className="card-image"
        />
        <div className="card-content mt-5">
          <p className="card-status">
            <strong>Status:</strong> {character.status}
          </p>
          <p className="card-species">
            <strong>Species:</strong> {character.species}
          </p>
          <p className="card-gender">
            <strong>Gender:</strong> {character.gender}
          </p>
          <p className="card-origin">
            <strong>Origin:</strong> {character.origin.name}
          </p>
          <p className="card-location">
            <strong>Location:</strong> {character.location.name}
          </p>
          <a
            href={character.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
