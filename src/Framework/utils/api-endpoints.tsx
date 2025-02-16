
const url = 'http://160.30.206.63:3000/get-json'

export const API_ENDPOINTS = {
    SPORTS_MATCHES:`${url}?filepath=game-list`,
    footbal:"get-json?filepath=game-list/cricketmatches",
    tennis:"get-json?filepath=game-list/tennismatches",
    MATCHES_DATA:`${url}?filepath`,
    CRICKET_FANCY_DATA: `${url}?filepath=cricket/session`,
    HORSE_RACING:`${url}?filepath=racecard/horse_race`,
    GREY_HOUND_RACING:`${url}?filepath=racecard/greyhound/greyhond_race`,
    RACING_DATA:`${url}?filepath`

}