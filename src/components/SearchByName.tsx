import { Input } from "antd";
import useCharacters from "../hooks/useCharacters";
import type { ChangeEvent } from "react";

const SearchByName = () => {
  const { setSearchTerm } = useCharacters();

  const onSearch = (val: string) => {
    setSearchTerm(val);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const { Search } = Input;
  return (
    <div
      style={{
        width: "25vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Search
        placeholder="Search by name"
        onSearch={onSearch}
        onChange={onChange}
        style={{ width: "20vw" }}
      />
    </div>
  );
};

export default SearchByName;
