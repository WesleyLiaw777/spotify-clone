import {
  ChartBarIcon,
  ClockIcon,
  DotsHorizontalIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";
import Image from "next/image";

function Sidebar() {
  return (
    <section
      className="fixed top-0 z-40 flex flex-col p-4 items-center
     bg-black w-[90px] h-screen space-y-8"
    >
      <Image
        src="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png"
        width={56}
        height={56}
        style={{ objectFit: "contain" }}
      />

      <div className="flex flex-col gap-y-8">
        <HomeIcon className="sidebarIcon text-white opacity-[0.85]" />
        <RiCompassFill className="sidebarIcon text-2xl" />
        <FaMicrophoneAlt className="sidebarIcon ml-1" />
        <ChartBarIcon className="sidebarIcon" />
        <ClockIcon className="sidebarIcon" />
        <DotsHorizontalIcon className="sidebarIcon" />
      </div>
    </section>
  );
}
export default Sidebar;
