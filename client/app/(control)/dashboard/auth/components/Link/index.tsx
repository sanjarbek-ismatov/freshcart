import "./Link.css";
import Link from "next/link";

function LinkComponent() {
  return (
    <div className="text-center mt-14">
      <h1 className="font-bolder text-3xl my-3">
        Assalomu alaykum, xush kelibsiz!
      </h1>
      <div>
        <Link
          className="px-6 py-3 bg-green-500 inline-block  text-lg my-2 border-4 active:border-green-300 text-white rounded-md"
          href="/dashboard/auth/register"
        >
          Ro`yhatdan o`tish
        </Link>
        <p>Yoki</p>
        <Link
          className="px-6 py-3 bg-green-500 inline-block text-lg my-2 border-4 active:border-green-300 text-white rounded-md"
          href="/dashboard/auth/login"
        >
          Kirish
        </Link>
      </div>
    </div>
  );
}

export default LinkComponent;
