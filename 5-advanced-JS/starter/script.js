/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

function Question(question, answer, correct) {
  this.question = question;
  this.answer = answer;
  this.correct = correct;
}

function validateAnswer() {

}

function showQuestion(questions) {
  var numberRamdom = Math.floor(Math.random() * questions.length);
  var activeQuestion = questions[numberRamdom];
  console.log("Question: " + activeQuestion.question);
  console.log("\n");
  console.log();
  
  

  return activeQuestion;
}

(function () {

  question_1 = new Question("What is the mountin higher?", "Everest", "0")
  question_2 = new Question("what did team won the football world cup 2018", "France", "1")
  question_3 = new Question("How many year has the Eiffel Tower ?", "131", "2")
  question_4 = new Question("What is the river largest over the world ?", "River Nile", "2")

  var questions = [question_1, question_2, question_3, question_3];

  var questionObject = showQuestion(questions);
  var answer = prompt(questionObject.question);
  console.log(answer);

})();