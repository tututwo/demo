import React, { useState, useEffect, useMemo } from "react";

import * as d3 from "d3";

import Table from "./Table";
import Pagination from "./TableComponents/Pagination";
export default function Container() {
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
  const currentPageData = useMemo(() => {
    const start = (currentPage - 1) * 10;
    const end = start + 10;
    const pageData = data.slice(start, end);

    const sortedData = isAscending
      ? pageData.sort((a, b) => d3.ascending(+a.POS, +b.POS))
      : pageData.sort((a, b) => d3.descending(+a.POS, +b.POS));

    return sortedData;
  }, [data, currentPage, isAscending]);
  
  function handleSort() {
    setIsAscending(!isAscending)
  }


  return (
    <div>
      {error && <div>{error}</div>}
      <h1>Leaderboard</h1>
      <button onClick={handleSort}>Sort by POS</button>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>

      <Table data={currentPageData}></Table>
    </div>
  );
}
