import React from "react";
import style from "../Paginate/Paginate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions";
import { useEffect } from "react";

export default function Paginate(props) {
  const numPage = useSelector((state) => state.numPage);
  const dispatch = useDispatch();

  function next() {
    dispatch(nextPage());
  }

  function prev() {
    dispatch(prevPage());
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [numPage]);

  return (
    <div className={style.paginate}>
      {numPage > 1 && (
        <div className={style.paginationItems}>
          <button className={style.button_paginate} onClick={prev}>
            {"<"}
          </button>
          <p className={style.pageNumber}>{numPage - 1}</p>
        </div>
      )}

      <h3 className={style.pageNumber}>{numPage}</h3>

      {numPage <= props.cantPages && (
        <div className={style.paginationItems}>
          <p className={style.pageNumber}>{numPage + 1}</p>
          <button className={style.button_paginate} onClick={next}>
            {">"}
          </button>
        </div>
      )}
    </div>
  );
}
