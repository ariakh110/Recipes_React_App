import React from "react";
import { useNavigate } from "react-router-dom";
//atom
import { atom, useAtom } from "jotai";
//icons
import { FaSearch } from "react-icons/fa";
//style
import { SearchForm } from "./Search.styles";

const valueSearch = atom("");

const Search = () => {
  const [search, setSearch] = useAtom(valueSearch);
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };
  return (
    <SearchForm onSubmit={onSubmitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          name=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </SearchForm>
  );
};

export default Search;
