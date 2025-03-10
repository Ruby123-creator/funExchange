import React from "react";
import { useQtechUrl } from "../../../Framework/casino";
import { useParams } from "react-router-dom";
import PageLoader from "../../common/pageLoader";

const CasinoGames = () => {
  const { casinoType } = useParams();
  const { data ,isLoading,isError} = useQtechUrl();

  if(isLoading){
    return <PageLoader/>
  }

  console.log(data, "GHIKHSI::::");

  const getUrlQueries = () => {
    switch (casinoType) {
      case "casino":
        return "liveCasinoGames";
      case "slot-games":
        return "slots";
      case "crash":
        return "CRASH";
      case "shooting":
        return "shootingGames";
      case "lottery":
        return "lotteryGames";

        default :
        return "liveCasinoGames"

    }
  };
  return (
    <div
      className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
      style={{ minHeight: "calc(-54px + 100dvh)" }}
    >
        
      <div>
        <iframe
          src={`${data?.url}/games/wl-${getUrlQueries()}/wl.games.${getUrlQueries()}`}
          className=""
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            paddingTop:"100px",
            height: "100vh",
            border: "none",
          }}
          title="My iFrame"
          
        />
      </div>
    </div>
  );
};

export default CasinoGames;
