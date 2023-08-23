import React, { useState } from "react";
import "./searchbar.css";
import { FaSearch } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function Searchbar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [WordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.food.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const ClearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          value={WordEntered}
          placeholder={placeholder}
          onChange={handleFilter}
        />
        <div className="searchIcons">
          {filteredData.length === 0 ? (
            <FaSearch />
          ) : (
            <GrClose id="clearbtn" onClick={ClearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 10).map((value, key) => {
            return (
              <div className="dataItem">
                <p>{value.food}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Searchbar;
