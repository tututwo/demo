import TableRow from "./TableComponents/TableRow";

export default function Table({ data }) {
  
  return (
    <>
      <table>
        <thead></thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow row={row} key={row.FAV+row.MOV+index}></TableRow>
          ))}
        </tbody>
      </table>
    </>
  );
}
