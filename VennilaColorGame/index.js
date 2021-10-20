var score=0
var userArr=[]
var adminArr=[]
var started=false
function userTurn(uu){
    if(adminArr[uu]===userArr[uu]){
        if(adminArr.length===userArr.length){
            score=score+1
            document.querySelector('h1').innerHTML="Your score:"+score
            setTimeout(function(){
                start()
            },1000)
            
        }
    } 
    
    else{
        document.querySelector('h1').innerHTML="Lost It"
        startOver()
   }


}
var c1=document.querySelector('.red')
c1.addEventListener('click',function(){
    var userChosenColour = c1.id
    userArr.push(userChosenColour);
    $("#"+userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    userTurn(userArr.length-1)
})
var c2=document.querySelector('.blue')
c2.addEventListener('click',function(){
    var userChosenColour = c2.id
    userArr.push(userChosenColour);
    $("#"+userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    userTurn(userArr.length-1)
})
var c3=document.querySelector('.purple')
c3.addEventListener('click',function(){
    var userChosenColour = c3.id
    userArr.push(userChosenColour);
    $("#"+userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    userTurn(userArr.length-1)
})
var c4=document.querySelector('.green')
c4.addEventListener('click',function(){
    var userChosenColour = c4.id
    userArr.push(userChosenColour);
    $("#"+userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    userTurn(userArr.length-1)
})


function start(){
    var ind=Math.floor(Math.random()*4)
    userArr=[]
    if (ind===0){
        
        adminArr.push('red')
        var cl="red"
    }
    if (ind===1){
        
        adminArr.push('green')
        var cl="green"
    }
    if (ind===2){
        
        adminArr.push('blue')
        var cl="blue"
    }
    if (ind===3){
        adminArr.push('purple')
        var cl="purple"
    }
    var color=document.querySelector('.'+adminArr[adminArr.length-1])
    color.style.backgroundColor="rgb(0,0,0,0.7)"
    setTimeout(() => { color.style.backgroundColor=cl; },500);
    console.log(adminArr);

    
}
document.querySelector('h1').innerHTML="Press The Start Button!"
function startOver() {
    if(!started){
        alert("Start and Play!")
        document.querySelector('h1').innerHTML="Press The Start Button!"
    }
    else{
        alert("You Lost With:"+score)
        document.querySelector('.st').style.display=""
        document.querySelector('h1').innerHTML="Press The Start Button!"
        score=0
        started = false;
        level = 0;
        adminArr=[]

    }
    
  }

document.querySelector('.st').addEventListener('click',function(){
    document.querySelector('.st').style.display="none"
    if (!started) {
      start();
      started = true;
      userArr=[]
    }
})