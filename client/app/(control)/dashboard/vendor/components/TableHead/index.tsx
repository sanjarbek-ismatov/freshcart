import "./TableHead.css";

function TableHead({ data }: { data: string[] }) {
  return (
    <thead>
      <tr>
        {data.map((e, i) => (
          <th
            key={i}
            className="py-2 text-slate-700 px-4 border-b border-gray-300 text-start"
          >
            {e}
          </th>
        ))}

        {/*<th className="py-2 text-slate-700 px-4 border-b border-gray-300 text-start">*/}
        {/*  Maxsulot nomi*/}
        {/*</th>*/}
        {/*<th className="py-2 text-slate-700 px-4 border-b border-gray-300 text-start">*/}
        {/*  Sanasi*/}
        {/*</th>*/}
        {/*<th className="py-2 text-slate-700 px-4 border-b border-gray-300 text-start">*/}
        {/*  Qiymati*/}
        {/*</th>*/}
        {/*<th className="py-2 text-slate-700 px-4 border-b border-gray-300 text-start">*/}
        {/*  Holati*/}
        {/*</th>*/}
      </tr>
    </thead>
  );
}

export default TableHead;
