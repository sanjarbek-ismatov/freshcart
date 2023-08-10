import "./LoadingModal.css";
import Modal from "../Modal";
import Spinner from "../Spinner";

function LoadingModal() {
  return (
    <Modal title="Kutib turing!">
      <div className="flex">
        <Spinner /> <span className="ml-3">Yuklanmoqda...</span>
      </div>
    </Modal>
  );
}

export default LoadingModal;
