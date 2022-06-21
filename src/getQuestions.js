export async function getQuestions() {
    const NUM_OF_Q = 10;
    function getRand(max) {
        return  Math.floor(Math.random() * max);
    }
    const url = 'https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/2022?key=86e988b730cb4d58b34f87ca82f5b7f3';
    const response = await fetch(url);
    var data = await response.json();        
    var questions = [];
    for (let i = 0; i < NUM_OF_Q; i++) {
        let randnum = parseInt(getRand(500));
        let aindex = parseInt(getRand(4));
        let fname = data[randnum].Name;
        var options = [];
        for (let j = 0; j < 4; j++) {
            let rand = parseInt(getRand(500));
            if (j !== aindex) {
                options.push({
                    name: data[rand].Name,
                    isCorrect: false
                });
            } else {
                options.push({
                    name: fname,
                    isCorrect: true
                });
            }
        }
        questions.push({
            name: fname,
            ppg: (parseFloat(data[randnum].Points/data[randnum].Games)).toFixed(2),
            apg: (parseFloat(data[randnum].Assists/data[randnum].Games)).toFixed(2),
            rpg: (parseFloat(data[randnum].Rebounds/data[randnum].Games)).toFixed(2),
            fgp: (parseFloat(data[randnum].FieldGoalsPercentage)).toFixed(2),
            arr: options
        });
    }
    return questions;
}

