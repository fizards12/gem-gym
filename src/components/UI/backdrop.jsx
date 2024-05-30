import { useEffect } from "react";
import { createPortal } from "react-dom";

function Backdrop({ ...props }) {
  useEffect(() => {
    const page = document.getElementById("body");
    const body = document.getElementsByTagName("body")[0];

    page.classList.add("blur-md", "overflow-hidden");
    body.classList.add("overflow-hidden");
    return () => {
      page.classList.remove("blur-md", "overflow-hidden");
      body.classList.remove("overflow-hidden");
    };
  }, []);

  const content = (
    <div className={`w-screen h-screen opacity-60 bg-black`} {...props}></div>
  );
  return createPortal(content, document.getElementById("backdrop"));
}

export default Backdrop;
