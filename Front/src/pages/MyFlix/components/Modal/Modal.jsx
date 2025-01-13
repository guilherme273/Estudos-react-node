import { useState } from "react";
import ModalComponent from "./ModalComponent";
import MyFlix from "../../MyFlix";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>

      {isOpen && (
        <ModalComponent onClose={() => setIsOpen(false)}>
          <MyFlix />
        </ModalComponent>
      )}
    </div>
  );
}

export default Modal;
