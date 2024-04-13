import "./SearchBar.scss";
import SearchIcon from '../../assets/svg/search.svg';
const SearchBar = (props) => {
    const { placeholderText } = props;
  return (
    <section className="searchbar">
      <input className="searchbar__search-input" name="search" type="text" placeholder={placeholderText} />
      <img className="searchbar__btn" src={SearchIcon} alt="search icon"/>
    </section>
  );
};

export default SearchBar;