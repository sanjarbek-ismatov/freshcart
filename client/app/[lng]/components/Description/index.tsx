"use client";

function Description({ description }: { description: string }) {
  return (
    <div className="my-3">
      <div
        className="flex cursor-pointer justify-between items-center mb-3"
      >
        <h4 className="text-slate-800 font-semibold text-xl">
          Maxsulot haqida
        </h4>
      </div>
      <p
        className="text-slate-900 leading-7"
      >
        {description}
      </p>
    </div>
  );
}

export default Description;
