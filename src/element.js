function readTime(unix_timestamp){
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    console.log(formattedTime);
    return date.toString().substring(0, date.toString().length - 30);

}

function daysleft( c ){
    let date1 = c*1000;
    let date2 = Date.now();
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    // let ans = "";
    if(diffDays >= 2)
        return ["within", diffDays.toString(), "days"].join(" ");
    // withing 2 days
    if(diffDays == 1){
        let hours = Math.floor(diffTime / (1000 * 60 * 60 ));
        let minutes = Math.ceil((diffTime / (1000 * 60 * 60 ) - hours)*60);
        return ["within", hours.toString(), hours?"hour":"hours", minutes?minutes:"", "minutes"].join(" ");
    }
    return diffDays;
}

function createcards(info){
    console.log("creating cards");
    info = info.reverse();
    // times = [];
    // for(let i = 0; i < info.length ; i++){
    //     var unix_timestamp = info[i].startTimeSeconds;
    //     var date = new Date(unix_timestamp * 1000);
        
    //     var hours = date.getHours();
        
    //     var minutes = "0" + date.getMinutes();
        
    //     var seconds = "0" + date.getSeconds();

        
    //     var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    //     console.log(formattedTime);
    //     times.push(date.toString().substring(0, date.toString().length - 30));
    /*
    let date1 = cont.startTimeSeconds;
    let date2 = Date.now();
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");
    */
    
    // }

    document.getElementById('timestamps').innerHTML = `
    ${info.map(function(cont){
        return `
        <div class="card">
        <a href="https://codeforces.com/contests/${cont.id}" style="text-decoration: none; color: inherit;" target="_blank"><p>${cont.name}</p></a>
        <p id="time">${readTime(cont.startTimeSeconds)}<br>( ${daysleft(cont.startTimeSeconds)})</p>
        </div>
         `
    }).join('')
    }
    `


}
