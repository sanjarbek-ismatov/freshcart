import "./TableBody.css";

function TableBody({ data }: { data: (string | number | JSX.Element)[] }) {
  return (
    <tr>
      {data.map((e, i) => (
        <td
          key={i}
          className="py-3 px-4 text-slate-700 border border-gray-300 text-start"
        >
          {e}
        </td>
      ))}
    </tr>
  );
}

export default TableBody;
