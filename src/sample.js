var list_url = "https://codeforces.com/api/contest.list?lang=en";
var arr = [];

function fillarr(data){
    for(let i = 0; i < 10 ; i++){
        if(data.result[i].phase == "BEFORE" && data.result[i].relativeTimeSeconds < 0)
            arr.push(data.result[i]);
    }
    // arr = data;
    if(arr && arr.length > 0)
        createcards(arr);
    console.log(arr);
}

fetch(list_url).then(resp => {
    return resp.json();
}).then(data => {
    console.log(data);
    fillarr(data);
});
