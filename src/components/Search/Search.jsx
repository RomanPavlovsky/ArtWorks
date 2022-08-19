import React from "react";
import styles from "./search.module.scss";
import { useDispatch } from "react-redux";
import { useCallback, useState, useRef } from "react";
import { setSearchValue } from "../../Redux/Slices/searchSlice";
import debounce from "lodash.debounce";

const Search = () => {
  const dispatch = useDispatch();

  // autotarget afcter close
  const inputRef = useRef();
  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };
  // debounce
  const [value, setValue] = useState("");

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter the title of the artwork"
        onChange={onChangeInput}
        value={value}
      />
      <div className={styles.search_icon}></div>
      {value && <div onClick={onClickClear} className={styles.remove}></div>}
    </div>
  );
};

export default Search;
