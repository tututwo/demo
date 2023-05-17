import React, { useState, useEffect, useCallback } from "react";

import * as d3 from "d3";

import Table from "./Table";
import Pagination from "./TableComponents/Pagination";
export default function Abc() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(2);
  const [isAscending, setIsAscending] = useState(true);
  // const loadData = useCallback(() => {

  // }, []);
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await d3.csv("./data/table.csv");
        setData(data);
      } catch (err) {
        setError("Fail to Load Data");
        console.log(err);
      }
    };

    loadData();
  }, []);

  const currentPageData = data.filter(
    (row, index) => Math.ceil(index / 10) === currentPage
  );

  function handleSort() {
    setIsAscending(isAscending => !isAscending);
console.log(isAscending)
    // Sort the data array based on the current sorting order
    currentPageData.sort((a, b) => {
      if (isAscending) {
        return d3.ascending(+a.POS, +b.POS);
      } else {
        return d3.descending(+a.POS, +b.POS);
      }
    });
    console.log(currentPageData);
  }

  return (
    <div>
      {error && <div>{error}</div>}
      <h1>Leaderboard</h1>
      <button onClick={handleSort}>Sort by POS</button>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <Table data={currentPageData}></Table>
    </div>
  );
}
