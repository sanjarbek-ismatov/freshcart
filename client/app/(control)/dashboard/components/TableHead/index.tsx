"use client";

function TableHead({ data }: { data: (number | string | JSX.Element)[] }) {
  return (
    <thead>
      <tr>
        {data.map((e, i) => (
          <th
            key={i}
            className="py-2 z-20 text-slate-700 px-4 border-b border-gray-300 text-start"
          >
            {e}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
