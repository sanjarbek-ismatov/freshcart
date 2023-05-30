import { ReactNode } from "react";

function WishListLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="max-w-[1300px] container mx-auto">{children}</div>
    </>
  );
}
export default WishListLayout;
