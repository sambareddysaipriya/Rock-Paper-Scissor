let score=JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    losses:0,
    ties:0
};
function reset(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    alert('The score is reset\nWins: 0, Losses: 0, Ties: 0.');
}
function cal(personMove){
    const val=Math.random();
    let decision='';
    const computerMove=compt(val);                
    if(personMove==='Rock'){ 
        if(computerMove==='Rock'){
            decision='Tie';
        }else if(computerMove==='Paper'){
            decision='You lose';
        }else if(computerMove==='Scissor'){
            decision='You win';
        }
    }
    else if(personMove==='Paper'){
        if(computerMove==='Rock'){
            decision='You win';
        }else if(computerMove==='Paper'){
            decision='Tie';
        }else if(computerMove==='Scissor'){
            decision='You lose';
        }
    }
    else if(personMove==='Scissor'){
        if(computerMove==='Rock'){
            decision='You lose';
        }else if(computerMove==='Paper'){
            decision='You win';
        }else if(computerMove==='Scissor'){
            decision='Tie';
        }
    }
    if(decision==='You win'){
        score.wins+=1;
    }else if(decision==='You lose'){
        score.losses+=1;
    }else if(decision==='Tie'){
        score.ties+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    alert(`You chose ${personMove} and computer chose ${computerMove}. ${decision}
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`);
}
function compt(value){
    if(value>=0 && value<1/3){
        return 'Rock';
    }else if(value>=1/3 && value<2/3){
        return 'Paper'; 
    }else if(value>=2/3 && value<1){
       return 'Scissor';
    }
}