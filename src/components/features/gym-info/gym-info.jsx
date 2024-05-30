import InfoItems from "./info";
import { FaPhone } from "react-icons/fa6";
import { IoMail, IoLocation } from "react-icons/io5";
function GymInfo() {
  return (
    <div className="bg-gray-950 p-7 text-gray-400 border-t-2 border-gray-900">
      <div className="container m-auto">
        <InfoItems className={"gap-x-2 gap-y-6"}>
          <InfoItems.Item Icon={IoLocation}>
            <div>333 Middle Winchendon Rd, Rindge, NH 03461</div>
          </InfoItems.Item>
          <InfoItems.Item Icon={FaPhone}>
            <div className="flex gap-2 items-center flex-wrap">
              <p>125-711-811</p>
              <hr className="rotate-90 w-4 bg-gray-900 opacity-40" />
              <p>125-668-886</p>
            </div>
          </InfoItems.Item>
          <InfoItems.Item Icon={IoMail}>
            <p>Support.gymcenter@gmail.com</p>
          </InfoItems.Item>
        </InfoItems>
      </div>
    </div>
  );
}

export default GymInfo;
