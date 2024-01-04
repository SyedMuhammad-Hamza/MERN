import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Model = ({ onClose, isOpen, children }) => {
  console.log({ isOpen });
  return createPortal(
    <>
      {isOpen && (
        <div className="place-items-center backdrop-blur absolute top-0 h-screen w-screen z-40">
          <div className="m-auto relative z-50 min-h-[200px] min-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="self-end text-2xl" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("model-root")
  );
};

export default Model;
