const setofWords = [
    "Hope you are having a fun this is a simple game you can make.",
    "If you want the source code then link is given in the descripttion so you can create your own version of this challenge.",
	"The way to get started is to quit talking and begin doing.",	
	"Live in such a way that you would not be ashamed to sell your parrot to the town gossip.",	
	"The difference between a successful person and others is not a lack of strength, not a lack of knowledge but rather a lack of will.",
	"All our dreams can come true, if we have the courage to pursue them.",
	"Some people do not like change, but you need to embrace change if the alternative is disaster.",
	"Even if you are on the right track, you will get run over if you just sit there.",
	"If you get up in the morning and think the future is going to be better, it is a bright day.",	
	"By giving people the power to share, we are making the world more transparent.",
	"Dream is not that which you see while sleeping it is something that does not let you sleep. And thoughts result in action.",
	"If you cannot do great things, do small things in a great way."
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime,endTime;

const playGame = ()=>{
    let randomNumber =Math.floor(Math.random()*setofWords.length);
    msg.innerText = setofWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = ()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/ 1000);
    // console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) *60);
    let finalMsg = " You typed total at " + speed + " words per minutes\n";

    finalMsg += comapareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;
    typeWords.value = null;
}

const comapareWords = (str1,str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function(item , index) {
        if(item == words2[index]){
            cnt++;
        }
    })

    let errorWords = (words1.length  - cnt);

    return (cnt + " correct out of " + words1.length + " words and the total number of error are " +errorWords+ ".");

}

const wordCounter =(str)=>{
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener('click' , function(){
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    }
    else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})
