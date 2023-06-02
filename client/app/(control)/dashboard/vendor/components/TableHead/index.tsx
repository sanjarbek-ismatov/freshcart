import "./TableHead.css";

function TableHead() {
  return (
    <thead>
      <tr>
        <th className="py-2 text-slate-700 px-4 border-b border-gray-300 text-start">
          Buyurtma raqami
        </th>
        <th className="py-2 text-slate-700 px-4 border-b border-gray-300 text-start">
          Maxsulot nomi
        </th>
        <th className="py-2 text-slate-700 px-4 border-b border-gray-300 text-start">
          Sanasi
        </th>
        <th className="py-2 text-slate-700 px-4 border-b border-gray-300 text-start">
          Qiymati
        </th>
        <th className="py-2 text-slate-700 px-4 border-b border-gray-300 text-start">
          Holati
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;
