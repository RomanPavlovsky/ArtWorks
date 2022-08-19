import React from "react";
import styles from "./pagination.module.scss";
import ReactPaginate from "react-paginate";

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
  return (
    <div className={styles.container}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        previousLabel=""
        forcePage={currentPage - 1}
        onPageChange={(event) => onChangePage(event.selected + 1)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        activeClassName={styles.active}
        nextClassName={styles.next}
        previousClassName={styles.prev}
        disabledClassName={styles.disabled}
      />
    </div>
  );
};

export default Pagination;
