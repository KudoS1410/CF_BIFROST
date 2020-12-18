function readTime(unix_timestamp){
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    console.log(formattedTime);
    return date.toString().substring(0, date.toString().length - 30);

}
function createcards(info){
    console.log("creating cards");
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
    
    // }

    document.getElementById('timestamps').innerHTML = `
    ${info.map(function(cont){
        return `
        <div class="card">
        <a href="https://codeforces.com/contests/${cont.id}" style="text-decoration: none; color: inherit;" target="_blank"><p>${cont.name}</p></a>
        <p id="time">${readTime(cont.startTimeSeconds)}</p>
        </div>
         `
    }).join('')
    }
    `


}