import React from "react";
import style from "./categories.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../Redux/Slices/categoriesSlice";
import { useLocation } from "react-router-dom";

const Categories = () => {
  const categories = [
    "All Artworks",
    "Sculpture",
    "Architecture",
    "Landscape",
    "Graphic Arts",
    "Portait",
    "Still Life",
  ];
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { categoryId } = useSelector((state) => state.categories);
  const onChangeCategory = (index) => dispatch(setCategoryId(index));
  const onPrevCategory = () =>
    categoryId > 0 ? dispatch(setCategoryId(categoryId - 1)) : 0;
  const onNextCategory = () =>
    categoryId < categories.length - 1
      ? dispatch(setCategoryId(categoryId + 1))
      : categoryId;
  return (
    <>
      {pathname !== "/*" && (
        <div className={style.wrapper}>
          <div className={style.container}>
            <ul>
              {categories.map((name, index) => (
                <li
                  key={index}
                  onClick={() => onChangeCategory(index)}
                  className={categoryId === index ? style.active : ""}
                >
                  {name}
                </li>
              ))}
            </ul>
            <i onClick={onPrevCategory} className={style.prev}></i>
            <i onClick={onNextCategory} className={style.next}></i>
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
