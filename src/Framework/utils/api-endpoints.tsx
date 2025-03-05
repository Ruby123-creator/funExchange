
const url1 = 'http://160.30.206.63:3000/get-json'
const url2 = 'https://sonyexch.in/get-json'
const url3 = 'https://silverexch24.com/'
const url = url2;
export const API_ENDPOINTS = {
    SPORTS_MATCHES:`${url}?filepath=game-list`,
    footbal:"get-json?filepath=game-list/cricketmatches",
    tennis:"get-json?filepath=game-list/tennismatches",
    MATCHES_DATA:`${url}?filepath`,
    CRICKET_FANCY_DATA: `${url}?filepath=cricket/session`,
    HORSE_RACING:`${url}?filepath=racecard/horse_race`,
    GREY_HOUND_RACING:`${url}?filepath=racecard/greyhound/greyhond_race`,
    RACING_DATA:`${url}?filepath`,
    LOGINVERIFICATION:`${url3}single_user_check_api`,
    LOGIN:`${url3}login_api`,
    USERDATA: `${url3}users_api`,
    CHANGE_PASSWORD:`${url3}change_password_api`,
    CURRENTBETS:`${url3}unsetteledbet_api`,
    ALLBETS:`${url3}bet_history_api`,
    ACCOUNT_STATEMENT: `${url3}account_statement_api`
   
}