export default function TableRow({ row }) {

  const {FAV, POS, MOV, PLAYER, OVERALL, THRU} = row
  return (
    <>
      <tr>
        <td>
          <div>{FAV}</div>
        </td>
        <td>
          <div>{POS}</div>
        </td>
        <td>
          <div>{MOV}</div>
        </td>
        <td>
          <div>{PLAYER}</div>
        </td>
        <td>
          <div>{OVERALL}</div>
        </td>
        <td>
          <div>{THRU}</div>
        </td>
      </tr>
    </>
  );
}
