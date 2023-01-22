import { useEffect, React } from "react";
import { getFromResult, getPagesCount, getToResult } from "../utils/pages";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchItems,
  setCurrentPage,
  resetPage,
} from "../Redux/Slices/itemsSlice";

import ItemCard from "../components/ItemCard";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import styles from "./home.module.scss";

const Home = () => {
  const { items, loading, totalCount, currentPage, limitPage, removeId } =
    useSelector((state) => state.items);
  const { categoryId } = useSelector((state) => state.categories);
  const { searchValue } = useSelector((state) => state.search);
  const { length } = items;
  const totalPages = getPagesCount(totalCount, limitPage);
  const fromResult = getFromResult(currentPage, limitPage);
  const toResult = getToResult(fromResult, length);
  const category = categoryId > 0 ? categoryId : null;
  const dispatch = useDispatch();

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
  const getData = () => {
    dispatch(fetchItems({ limitPage, currentPage, category, searchValue }));
  };

  useEffect(() => {
    getData();
  }, [currentPage, categoryId, searchValue, removeId]);

  useEffect(() => {
    dispatch(resetPage());
  }, [categoryId, searchValue]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>Artworks</h2>
        </div>
        <div className={styles.search}>
          <Search />
        </div>
        {loading === "error" ? (
          alert("server error , try again")
        ) : loading === "pending" ? (
          <Loader />
        ) : searchValue !== "" && items.length < 1 ? (
          <div className={styles.empty}>
            <h2>Sorry! No result found...</h2>
          </div>
        ) : (
          <div className={styles.items}>
            {items.map((arr) => (
              <ItemCard key={arr.id} {...arr} />
            ))}
          </div>
        )}
        <div className={styles.pagination}>
          {totalPages > 1 ? (
            <Pagination
              onChangePage={onChangePage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          ) : null}
          {totalCount > 0 ? (
            <div className={styles.result}>
              <p>
                {items.length === totalCount
                  ? `${items.length} of ${totalCount} Results`
                  : `${fromResult} - ${toResult} of ${totalCount}`}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
