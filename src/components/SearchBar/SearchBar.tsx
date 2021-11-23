import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  searchQuery: Object;
  setSearchQuery: () => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  const history = useNavigate();

  const onSubmit = (e: any) => {
    e.prevent.default();
    history(`?s=${searchQuery}`);
  };
  return (
    <form
      autoComplete='off'
      action='/students'
      method='get'
      onSubmit={onSubmit}
    >
      <label htmlFor='header-search'>
        <span className='visually-hidden'>Search</span>
      </label>
      <input
      // value={searchQuery}
      // onInput={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
