import "./Order.css";

function Order() {
  return (
    <div className="container mx-auto my-20">
      <h1 className="font-medium my-4 text-slate-800 text-xl">
        Oxirgi buyurtmalar
      </h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300 text-start">
              Buyurtma raqami
            </th>
            <th className="py-2 px-4 border-b border-gray-300 text-start">
              Maxsulot nomi
            </th>
            <th className="py-2 px-4 border-b border-gray-300 text-start">
              Sanasi
            </th>
            <th className="py-2 px-4 border-b border-gray-300 text-start">
              Qiymati
            </th>
            <th className="py-2 px-4 border-b border-gray-300 text-start">
              Holati
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 px-4 border-b border-gray-100 text-start">
              #0000001
            </td>
            <td className="py-3 px-4 border-b border-gray-100 text-start">
              Snikers
            </td>
            <td className="py-3 px-4 border-b border-gray-100 text-start">
              07.09.2023
            </td>
            <td className="py-3 px-4 border-b border-gray-100 text-start">
              20$
            </td>
            <td className="py-3 px-4 border-b border-gray-100 text-start">
              Bajarilmoqda
            </td>
          </tr>
          <tr>
            <td className="py-3 px-4 border-b border-gray-100 text-start">
              #0000001
            </td>
            <td className="py-3 px-4 border-b border-gray-100 text-start">
              Snikers
            </td>
            <td className="py-3 px-4 border-b border-gray-100 text-start">
              07.09.2023
            </td>
            <td className="py-3 px-4 border-b border-gray-100 text-start">
              20$
            </td>
            <td className="py-3 px-4 border-b border-gray-100 text-start">
              Bajarilmoqda
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-100 text-start">
              #0000001
            </td>
            <td className="py-2 px-4 border-b border-gray-100 text-start">
              Snikers
            </td>
            <td className="py-2 px-4 border-b border-gray-100 text-start">
              07.09.2023
            </td>
            <td className="py-2 px-4 border-b border-gray-100 text-start">
              20$
            </td>
            <td className="py-2 px-4 border-b border-gray-100 text-start">
              Bajarilmoqda
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Order;
