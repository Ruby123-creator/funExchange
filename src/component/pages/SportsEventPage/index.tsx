import React from "react";
import { useCricketDetailsById } from "../../../Framework/cricketFixture";
import { BiFootball, BiSolidCricketBall } from "react-icons/bi";
import LeftDeskSideBar from "../../common/LeftDeskSidebar";
import InPlayEvents from "../../common/InPlayEvents";
import UpcomingEvents from "../../common/UpComingEvents";
import Accordian from "../../common/Accordian";
import RightDeskSidebar from "../../common/RightDeskSidebar.tsx";
import EventPanel from "./EventPanel/eventPanel";
import { useParams } from "react-router-dom";
import { IoTennisball } from "react-icons/io5";

const SportsEventPage: React.FC = () => {
  const { sport, eventId }: any = useParams();

  const pageName = (id: string) => {
    switch (id) {
      case "cricket":
        return {
          sidebarIcon: (
            <BiSolidCricketBall fill="var(--color-quaternary)" size={20} />
          ),
          sportsName: "Cricket",
          icon: <BiSolidCricketBall fill="#8B191B" size={20} />,
        };
      case "football":
        return {
          sidebarIcon: (
            <BiFootball fill="var(--color-quaternary)" size={20} />
          ),
          sportsName: "Football",
          icon: <BiFootball fill="#8B191B" size={20} />,
        };
      case "tennis":
        return {
          sidebarIcon: (
            <IoTennisball fill="var(--color-quaternary)" size={20} />
          ),
          sportsName: "Tennis",
          icon: <IoTennisball fill="#8B191B" size={20} />,
        };
      case "horse-racing":
        return {
          sidebarIcon: (
            <BiSolidCricketBall fill="var(--color-quaternary)" size={20} />
          ),
          sportsName: "Horse Racing",
          icon: <BiSolidCricketBall fill="#8B191B" size={20} />,
        };
      case "greyhound-racing":
        return {
          sidebarIcon: (
            <BiSolidCricketBall fill="var(--color-quaternary)" size={20} />
          ),
          sportsName: "Greyhound Racing",
          icon: <BiSolidCricketBall fill="#8B191B" size={20} />,
        };

      default:
        break;
    }
  };
  const uiLabel = {
    sidebarIcon: (
      <BiSolidCricketBall fill="var(--color-quaternary)" size={20} />
    ),
    sportsName: "Cricket",
    icon: <BiSolidCricketBall fill="#8B191B" size={20} />,
  };

  return (
    <div className="flex flex-col  transition-all lg:pt-[110px] ease-in-out duration-100 pt-0">
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSideBar label={pageName(sport)} />
        <div className=" flex items-center flex-col w-[50%]">
          <EventPanel />
        </div>

        <RightDeskSidebar />
      </div>
    </div>
  );
};

export default SportsEventPage;
