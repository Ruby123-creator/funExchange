import React from "react";

interface TeamScore {
  runs: number;
  wickets: number;
  overs: number;
}

interface ScoreCardProps {
  data: {
    teams?: string[];
    teamScore?: any[];
    scorecards?: any[]; // Adjust this type based on actual structure
  };
}

const ScoreCard: React.FC<ScoreCardProps> = ({ data={} }) => {
  const { teams = [], teamScore = [] } = data;

  return (
    <div>
      <div className="container-main">
        <div className="row-ctm">
          {/* Batsman Icon */}
          <div className="batsman_svg">
            <img
              src="https://speedcdn.io/assets/score_card/batsman-bold-outline.svg"
              alt="Batsman Icon"
              className="icon-image"
            />
          </div>

          {/* Team 1 Score */}
          <div className="team team-right">
            <div className="curr_inn">
              <div className="team-name">{teams?.[0] || "Team A"}</div>
              <span className="run">
                {
                   teamScore?.[0] ||0
                }
                {/* {teamScore?.[0]?.runs || 0}/{teamScore?.[0]?.wickets || 0}&nbsp; */}
              </span>
              {/* <span className="over">({teamScore?.[0]?.overs || 0})</span>
              <br /> */}
              {/* <span className="over">CRR: </span>7.49 */}
            </div>
          </div>

          {/* Match Status */}
          <div className="match_status">
            <span className="commentary">INNING BREAK</span>
            <p className="target"></p>
            <div className="score-over">
              <ul></ul>
            </div>
            <div className="requiredRunRate">
              <span>
                LIO need 293 runs off 234 balls | <span>RRR: 0</span>
              </span>
            </div>
            <div className="batsman-container">
              <div>
                <span>*</span> <span>0 (0)</span>
              </div>
              <div>
                <span></span> <span>0 (0)</span>
              </div>
            </div>
          </div>

          {/* Team 2 Score */}
          <div className="team team-left">
            <div className="curr_inn">
              <div className="team-name">{teams?.[2] || "Team B"}</div>
              <span className="run"> {
                   teamScore?.[1] ||0
                }</span>
              {/* <span className="over">(0.0)</span> */}
              {/* <br />
              <span>{teams?.[1] || "Team B"}: </span> */}
            </div>
          </div>

          {/* Bowler Icon */}
          <div className="bowler_svg">
            <img
              src="https://speedcdn.io/assets/score_card/baller-bold-outline.svg"
              alt="Bowler Icon"
              className="icon-image"
            />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ScoreCard;
