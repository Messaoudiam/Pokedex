import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <figure>
      {pokemon.imgSrc != null ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({ // "shape" = le type pour les objets
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }),
};

export default PokemonCard;
