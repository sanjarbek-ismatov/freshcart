import "./TableBody.css";

function TableBody({ data }: { data: string[] }) {
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
      {/*<td className="py-3 px-4 text-slate-700 border border-gray-300 text-start">*/}
      {/*  #0000001*/}
      {/*</td>*/}
      {/*<td className="py-3 px-4 border border-gray-300 text-start">Snikers</td>*/}
      {/*<td className="py-3 px-4 border border-gray-300 text-start">*/}
      {/*  07.09.2023*/}
      {/*</td>*/}
      {/*<td className="py-3 px-4 border border-gray-300 text-start">20$</td>*/}
      {/*<td className="py-3 px-4 border border-gray-300 text-start">*/}
      {/*  Bajarilmoqda*/}
      {/*</td>*/}
    </tr>
  );
}

export default TableBody;
