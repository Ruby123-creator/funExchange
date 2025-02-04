 export function extractEventDetails(eventName: String|any) {
       
        const eventParts = (eventName||"").split("/");
        const teams = (eventParts[0]||"").split(" v ");
        const dateTime = eventParts[1];
    
        const [day, month, year] = ((dateTime||"").split(" ")[0]||"").split("/"); // Extract date parts
        const [hours, minutes] = ((dateTime||"").split(" ")[1]||"").split(":"); // Extract time parts
    
        const eventDate = new Date(year, month - 1, day); // Convert to JavaScript Date object
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1); // Get tomorrow's date
    
        let displayDate;
        if (eventDate.toDateString() === today.toDateString()) {
            displayDate = "Today";
        } else if (eventDate.toDateString() === tomorrow.toDateString()) {
            displayDate = "Tomorrow";
        } else {
            displayDate = (dateTime||"").split(" ")[0]; // Ignore events that are neither today nor tomorrow
        }
        console.log(eventName,teams,eventDate,eventParts ,displayDate,"Rubyyys")
        if (displayDate) {
            return {
                team1: teams[0],      // Sri Lanka
                team2: teams[1],      // Australia
                date: "01/02/2025",    // Today or Tomorrow
                time: `${'12'}:${'00'}` // HH:MM format
            };
        }
    
        return null; // Ignore events that are neither today nor tomorrow
    }