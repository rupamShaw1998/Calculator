function timeToEat(currentTime) {
    let meridiem = "";
    for(let i=0; i<currentTime.length; i++) {
        if(currentTime[i]=='a') {
            meridiem="am";
            break;
        }
        else if(currentTime[i]=='p') {
            meridiem="pm";
            break;
        }
    }
    if(meridiem=="pm") {
        if(currentTime.length==9) {
            let borrow = 1;
            let mins = currentTime[2]+currentTime[3];
            mins = 60-mins;
            if(mins==60) {
                mins = 0;
                borrow = 0;
            }
            let hours = 7-currentTime[0]-borrow;
            return [hours, mins];
        }
        else {
            let borrow = 0
            if(currentTime[1]==2) {
                borrow = 1;
            }
            else if(currentTime[1]==0) {
                borrow = -1;
            }
            let mins = currentTime[3]+currentTime[4];
            mins = 60-mins;
            if(mins==60) {
                mins = 0;
                borrow--;
            }
            let hours = 7-borrow;
            return [hours, mins];
        }
    }
    else {
        if(currentTime.length==9) {
            let nextHour = 12;
            if(currentTime[0]>=1 && currentTime[0]<=6) {
                nextHour = 7;
            }
            let borrow = 1;
            let mins = currentTime[2]+currentTime[3];
            mins = 60-mins;
            if(mins==60) {
                mins = 0;
                borrow = 0;
            }
            let hours = nextHour-currentTime[0]-borrow;
            return [hours, mins];    
        }
        else {
            let borrow = 1;
            let nextHour = 12;
            let hour = Number(currentTime[0]+currentTime[1]);
            if(hour==12) {
                borrow = -6;
                nextHour = 0;
                hour = 0;
            }
            let mins = currentTime[3]+currentTime[4];
            mins = 60-mins;
            if(mins==60) {
                mins = 0;
                borrow--;
            }
            let hours = nextHour-hour-borrow;
            return [hours, mins];
        }
    }
}

console.log(timeToEat("2:00 p.m."));        // [5,0]
console.log(timeToEat("5:50 a.m."));        // [1,10]
