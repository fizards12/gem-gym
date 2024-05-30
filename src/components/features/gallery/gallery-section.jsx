import Section from "../../UI/section";
import img1 from "../../../assets/gallery/gallery-1.jpg";
import img2 from "../../../assets/gallery/gallery-2.jpg";
import img3 from "../../../assets/gallery/gallery-3.jpg";
import img4 from "../../../assets/gallery/gallery-4.jpg";
import img5 from "../../../assets/gallery/gallery-5.jpg";
import img6 from "../../../assets/gallery/gallery-6.jpg";
import GalleryImage from "./gallery-image";
import { useState } from "react";
import Modal from "./image-modal";

function Gallery() {
  const [img,setImg] = useState(null);
  const onHide = ()=>setImg(null); 
  return (
    <>

    <Section container={false}>
      <Section.Body
        className={
          "grid max-sm:grid-rows-6 sm:grid-rows-4 relative sm:grid-cols-4 lg:grid-rows-2"
        }
      >
        <GalleryImage img={img1} className={"sm:col-span-4 lg:col-span-2"} onClick={()=>setImg(img1)} />
        <GalleryImage img={img2} className={"sm:col-span-2 lg:col-span-1"} onClick={()=>setImg(img2)} />
        <GalleryImage img={img3} className={"sm:col-span-2 lg:col-span-1"} onClick={()=>setImg(img3)} />
        <GalleryImage img={img4} className={"sm:col-span-2 lg:col-span-1"} onClick={()=>setImg(img4)} />
        <GalleryImage img={img5} className={"sm:col-span-2 lg:col-span-1"} onClick={()=>setImg(img5)} />
        <GalleryImage img={img6} className={"sm:col-span-4 lg:col-span-2"} onClick={()=>setImg(img6)} />
      </Section.Body>
    </Section>
    <Modal img={img} onClick={onHide}/>
    </>
  );
}

export default Gallery;
