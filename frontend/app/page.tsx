"use client";
import {
  HTMLAttributes,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Swiper,
  Menu,
  Navbar,
  Categories,
  PopularProducts,
  About,
  Footer,
  Modal,
  SidePanel,
  Button,
  ModalForm,
} from "./components";
export default function Home() {
  const [show, setShow] = useState(false);
  const closeRef = useRef<HTMLElement>(null);
  const openRef = useRef<HTMLElement>(null);
  const handleShow = useCallback(() => setShow(!show), [show]);
  useEffect(() => {
    closeRef.current?.addEventListener("click", handleShow);
    openRef.current?.addEventListener("click", handleShow);

    return () => {
      closeRef.current?.removeEventListener("click", handleShow);
      openRef.current?.removeEventListener("click", handleShow);
    };
  }, [handleShow]);

  return (
    <div className="container max-w-[1300px] mx-auto">
      <Navbar ref={openRef} />
      <Menu />
      <Swiper />
      <Categories />
      <PopularProducts />
      <About />
      <Footer />
      <SidePanel />
      {show && (
        <Modal ref={closeRef} title="Hisob yaratish">
          <ModalForm />
        </Modal>
      )}
    </div>
  );
}
