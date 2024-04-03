import PropTypes from "prop-types";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handlePrevious = () => setPokemonIndex(pokemonIndex - 1);

  const handleNext = () => setPokemonIndex(pokemonIndex + 1);

  return (
    <nav>
      <button
        type="button"
        onClick={handlePrevious}
        disabled={pokemonIndex === 0}
      >
        Précédent
      </button>

      <button
        type="button"
        onClick={handleNext}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        Suivant
      </button>
    </nav>
  );
}

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
