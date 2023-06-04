// Your code here
var questionsArr = 
[
    {
        question: 'Drake\'s full name is "Aubrey Drake Graham"',
        answer: true
    },
    {
        question: 'Drake\'s birthday is on "Wednesday October 23, 1985"',
        answer: false
    },
    {
        question: 'Drake was 19 when he dropped out of Highschool',
        answer: false
    },
    {
        question: 'Drake\'s favorite book is about Denzel Washington',
        answer: false
    },
    {
        question: 'Drake\'s favorite sport is Basketball',
        answer: true
    },
    {
        question: 'The car Drake always talks about in is song is an Aston',
        answer: true
    }
]

function runQuiz() {
    var NumOfRight = 0
    for (var i = 0; i < questionsArr.length; i++) {
        var question = questionsArr[i].question;
        var answer = confirm(question);
        if (answer == questionsArr[i].answer) {
            alert('Correct!');
            NumOfRight++;
           } else {
                alert('Wrong!');
        }
    }
        score = Math.round((NumOfRight / questionsArr.length) * 100)
        alert('Your score is ' + score + '%');
   
}

