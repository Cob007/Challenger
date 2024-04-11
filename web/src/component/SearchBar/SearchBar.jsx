import "./SearchBar.scss";
import SearchIcon from '';
const SearchBar = () => {
  return (
    <section className="searchbar">
      <input className="searchbar__search-input" name="search" type="text" placeholder="Search" />
      <img className="searchbar__btn" src={SearchIcon} alt="search icon"/>
    </section>
  );
};

export default Searchbar;