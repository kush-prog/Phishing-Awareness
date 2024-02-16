var questionBank= [
    {
        question : 'What should employees do if they suspect a phishing attempt?',
        option : ['Interact with the scammer directly by confronting them and getting down to the bottom of the situation.', 
        'Forward the phishing email to a friend or colleague to ask them if they can check the link out first.', 
        'Double-check the email ID and the content, then contact your supervisor or the IT department to confirm its authenticity.', 
        'Click on the link anyway and see where it takes you.'],
        answer : 'Double-check the email ID and the content, then contact your supervisor or the IT department to confirm its authenticity.'
    },
    {
        question : 'What are the most popular signs of a phishing scam?',
        option : ['The email comes with a disclaimer/alert notifying the user that it is spam.', 'The email is empty and contains nothing in the subject or body.', 'An authentic sender sending regular subscribed updates.', 'Inconsistency in the sender’s email ID and how the recipient is addressed.'],
        answer : 'Inconsistency in the sender’s email ID and how the recipient is addressed.'
    },
    {
        question : 'How many phishing emails are sent every day globally?',
        option : ['Billions', 'Millions','Thousands','Hundreds'],
        answer : 'Billions'
    },
    {
        question : 'Which of the following tags does not require a closing tag?',
        option : ['Browser/app is closed without any prompt.',
        'You are redirected to a website that asks you to enter sensitive information or directs you to download an attachment.',
        ' You get an error page on the screen.',
        'None of the above'],
        answer : 'You are redirected to a website that asks you to enter sensitive information or directs you to download an attachment.'
    },
    {
        question : 'Why do I need to watch out for phishing emails?',
        option : ['For personal safety and security.',
        'To protect your identity and sensitive information.',
        'To prevent being duped and falling for scams.',
        'All of the above.'],
        answer : 'All of the above.'
    },
    {
        question : 'What should you do if you’re unsure whether an email is real?',
        option : ['Ignore the source and proceed anyway.',
        'Click on the link/download the attachment to find out.',
        'Learn and educate yourself with security awareness training.',
        'Forward the link to friends/colleagues and ask them if it’s trustworthy.'],
        answer : 'Learn and educate yourself with security awareness training.'
    }
    
]
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}
next.addEventListener('click',nextQuestion);
function backToQuiz(){
    location.reload();
}
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}
displayQuestion();
