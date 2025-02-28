import { notification } from "antd";
import { differenceInSeconds, format, parseISO } from "date-fns";
 export function extractEventDetails(eventName: String|any) {
        const eventTitle = (eventName||"").replace(/\u00a0/g, " ")
        const eventParts = (eventTitle||"").split(" / ");
        const teams = (eventParts[0]||"").split(" v ");
        const dateTime = eventParts[1];
        const [day, month, year] = ((dateTime||"").split(" ")[0]||"").split("/"); // Extract date parts
        const [hours, minutes] = ((dateTime||"").split(" ")[1]||"").split(":"); // Extract time parts
    
        const eventDate = new Date(year, month - 1, day); // Convert to JavaScript Date object
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1); // Get tomorrow's date
    
        let displayDate;
       
            displayDate = (dateTime||"").split(" ")[0]; // Ignore events that are neither today nor tomorrow
        
        if (displayDate) {
            return {
                team1: teams[0],      // Sri Lanka
                team2: teams[1],      // Australia
                date: displayDate,    // Today or Tomorrow
                time: `${hours}:${minutes}` // HH:MM format
            };
        }
    
        return null; // Ignore events that are neither today nor tomorrow
    }




    export const getFormattedDateTime = (val: string) => {
        const now = new Date();
    
        // Format the date and time
        const formattedDate = format(now, "MMM do, yyyy"); // e.g., "Dec 20th, 2024"
        const formattedTime = format(now, "HH:mm:ss"); // e.g., "10:34:13"
    
        // Get the timezone offset in GMT format
        const timezoneOffset = now.getTimezoneOffset();
        const timezoneHours = Math.abs(Math.floor(timezoneOffset / 60));
        const timezoneMinutes = Math.abs(timezoneOffset % 60);
        const timezoneSign = timezoneOffset > 0 ? "-" : "+";
        const timezone = `GMT ${timezoneSign}${timezoneHours}:${String(
          timezoneMinutes
        ).padStart(2, "0")}`;
         const dateTime ={
            headerDate: `${formattedDate} (${timezone})`,
            haederTime:` ${formattedTime}`,
            dateSetting: format(now, "MMMM do, yyyy")
         }
        // Combine everything into the desired format
        return val === "date"
          ? `${formattedDate} (${timezone})`
          : ` ${formattedTime}`;
      };



      export const checkTimeDifference = (updatedTime: string) => {
        const updatedDate = parseISO(updatedTime); // Convert string to Date object
        const currentDate = new Date(); // Get the current time
      
        const diffInSeconds = differenceInSeconds(currentDate, updatedDate); // Get difference in seconds
       console.log(updatedTime,updatedDate,currentDate,diffInSeconds,"MANJUUU")
        return diffInSeconds <= 15; // Return true if difference is ≤ 10 seconds
      };


      export const showToasterMessage = (payload:{messageType:string,description:string}) => {
        if(!payload.messageType){
          payload.messageType = 'error';
        }
        // notification[payload.messageType || 'error'](
      
        notification.open({
            message: payload.description,
            // description:
            // (payload.messageType === "error" ? 'Error' : (payload.messageType === "success" ? 'Success': 'Warning'))+ " ! " +(payload.description || 'Error'),
            onClick: () => {
              console.log('Notification Clicked!');
            },
            duration: 2,
           
            className: payload.messageType +" "+ 'custom-notification'
          });


        
      }