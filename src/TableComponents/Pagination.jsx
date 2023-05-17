export default function Pagination({ currentPage, setCurrentPage }) {
  const pages = Array.from({ length: 7 }, (_, i) => i + 1);
  console.log(currentPage);
  return (
    <div>
      {pages.map((page) => (
        <button onClick={() => setCurrentPage(page)}>{page}</button>
      ))}
    </div>
  );
}
