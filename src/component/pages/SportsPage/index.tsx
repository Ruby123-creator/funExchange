import React, { useState } from "react";

import Accordian from "../../common/Accordian";
import LeftDeskSideBar from "../../common/LeftDeskSidebar";
import InPlayEvents from "../../common/InPlayEvents";
import UpcomingEvents from "../../common/UpComingEvents";
import RightDeskSidebar from "../../common/RightDeskSidebar.tsx";
import { BiFootball, BiSolidCricketBall } from "react-icons/bi";
import { useCricketFixture } from "../../../Framework/cricketFixture";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NoFound from "../../common/NoFound";
import { IoTennisball } from "react-icons/io5";
import { GiHorseHead, GiHound } from "react-icons/gi";
import PageLoader from "../../common/pageLoader";

const SportsDetail: React.FC = () => {
  const { sportsName } = useParams();
  const { data, isLoading, isError } = useCricketFixture(sportsName);

  const playingEvents = (data || []).filter(
    (item: any) => item?.inPlay === "True"
  );
  const upComingScheduleEvents = (data || []).filter(
    (item: any) => item?.inPlay === "False"
  );
  const [active, setActive] = useState("In Play");
  const Navigate = useNavigate();
  const location = useLocation();
  const pageName = (id: any) => {
    switch (id) {
      case "cricket":
        return {
          sidebarIcon: (
            <BiSolidCricketBall fill="var(--color-quaternary)" size={20} />
          ),
          sportsId: "cricket",
          sportsName: "Cricket",
          icon: <BiSolidCricketBall fill="#8B191B" size={20} />,
          img: "/icons/cricket.svg",
        };
      case "soccer":
        return {
          sidebarIcon: <BiFootball fill="var(--color-quaternary)" size={20} />,
          sportsId: "soccer",
          sportsName: "Football",
          icon: <BiFootball fill="#000" size={20} />,
          img: "/icons/football.svg",
        };
      case "tennis":
        return {
          sidebarIcon: (
            <IoTennisball fill="var(--color-quaternary)" size={20} />
          ),
          sportsId: "tennis",
          sportsName: "Tennis",
          icon: <IoTennisball fill="#7FBA42" size={20} />,
          img: "/icons/cricket.svg",
        };
     

      default:
        break;
    }
  };

  const inPlayEvents = [
    {
      ...pageName(sportsName),
      eventSchedule: playingEvents,
    },
  ];
  const upComingEvents = [
    {
      ...pageName(sportsName),
      eventSchedule: upComingScheduleEvents,
    },
  ];

  if (isLoading) return <PageLoader/>;
  if (isError) return <p>Error fetching data</p>;
  return (
    <div className="flex flex-col  transition-all lg:pt-[110px] ease-in-out duration-100 pt-0">
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSideBar label={pageName(sportsName)} />
        <div className=" flex items-center flex-col lg:w-[50%] w-full  lg:pt-0 pt-[130px]">
          <div className="w-full h-full">
            {location.pathname !== "/" ? (
              <div className="px-2 w-full lg:hidden">
                <div className="flex flex-row font-manrope-regular items-center justify-start gap-2.5 relative">
                  {["In Play", "Competition"].map((item, i) => {
                    return (
                      <div
                        className="cursor-pointer flex flex-row items-center justify-center"
                        onClick={() => setActive(item)}
                      >
                        <span
                          className={`${
                            active === item
                              ? "text-text_Quaternary bg-bg_Primary  bg-bg_Primary  border-primary"
                              : "text-text_Ternary bg-bg_Quaternary  border-ternary6"
                          } text-sm border rounded-full px-[25px] py-2 text-[13px] md:text-sm lg:text-base font-bold leading-4 active:scale-95 block z-10`}
                        >
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
            {active === "In Play" || location?.pathname === "/" ? (
              <>
                {(playingEvents || [])?.length ? (
                  <InPlayEvents events={inPlayEvents} />
                ) : (
                  <div title="In Play" className="w-full mb-2">
                    <div className=" w-full font-helvetica-neue">
                      <div className=" flex flex-col items-center justify-start gap-y-1 px-2">
                        <h6 className=" text-start w-full text-sm font-semibold text-text_Primary">
                          In Play
                        </h6>
                        <NoFound text={"No In Play Events Found..."} image={pageName(sportsName)?.img}/>
                      </div>
                    </div>
                  </div>
                )}

                <UpcomingEvents events={upComingEvents} />
              </>
            ) : (
              <NoFound
                text={"No Competition Events Found..."}
                image={pageName(sportsName)?.img}
              />
            )}
          </div>

          <div
            className="w-full md:mt-[0px] lg:overflow-auto"
            style={{ minHeight: "calc(-110px + 100dvh)" }}
          >
            <Accordian />
          </div>
        </div>

        <RightDeskSidebar />
      </div>
    </div>
  );
};

export default SportsDetail;
