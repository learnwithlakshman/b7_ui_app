const quizform = document.querySelector(".quiz-form");
const answers = ["B","B","B","A"]
quizform.addEventListener('submit',(event)=>{
    event.preventDefault();
    const useranswers = [quizform.q1.value,quizform.q2.value,quizform.q3.value,quizform.q4.value];
    let score = 0;
    answers.forEach((value,index)=>{
        if(value === useranswers[index]){
            score += 25;
        }
    })
    scroll(0,0);
    document.querySelector('.result').classList.remove('d-none');
    let i = 0;
    const resInterval =setInterval(()=>{
        document.querySelector('span').textContent = i+"%"
        if(i == score){
            clearInterval(resInterval);
        }
        i++;
    },10);

    setTimeout(()=>{
        document.querySelector('.result').classList.add('d-none');
        quizform.reset();
    },5000);

})
