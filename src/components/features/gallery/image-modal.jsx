import { Dialog } from "@material-tailwind/react";
import { createPortal } from "react-dom";
import Backdrop from "../../UI/backdrop";

function Modal({ onClick, img, ...props }) {
  const content = <Content img={img} handler={onClick} {...props} />;
  return content;
}

function Content({ img, className, ...props }) {
  return (
    <Dialog open={!!img} style={{width:"fit-content",minWidth:250}} className={`${className || ""} overflow-hidden bg-transparent`} {...props}>
      <img src={img} className="w-full" alt="gallery-img" />
    </Dialog>
  );
}

export default Modal;
