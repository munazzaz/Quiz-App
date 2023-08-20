import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



type Question = {
  question: string;
  options: string[];
  correctOption: number;
};
//promise means that user will give input in future
//resolve that the promise that it had it has completed
function getInput(prompt: string): Promise<string> {
  return new Promise(resolve => {
    rl.question(prompt, input => {
      resolve(input);
    });
  });
}
//async function that one thing will complete then next thing will done
//like first user will give input and then it will show the output
async function askQuestions(questions: Question[]): Promise<number> {
  let score = 0;
  // This piece of code is using nested loops to display a list of questions and their options. Here's what each 
  // part does:

  // // for (let i = 0; i < questions.length; i++) {: This is the outer loop. It iterates through the array of questions
  // . Each time it runs, it goes through a single question and its options.
  
  // // const question = questions[i];: This line grabs the current question object from the array based on the index i.
  
  // // console.log(Question ${i + 1}: ${question.question});: This prints out the current question along with its index
  //  (plus 1, because indices start from 0 in programming).
  
  // // for (let j = 0; j < question.options.length; j++) {: This is the inner loop. It iterates through the options array
  //  of the current question. This loop runs for each question, displaying all its options.
  
  // // console.log(${j + 1}. ${question.options[j]});: Inside the inner loop, this line displays each option along with 
  // its index (plus 1, again because indices start from 0).
  
  // // So, when you run this code, it goes through all the questions, printing each question and its options one by one.
  //  It's like simulating a quiz where you show all the questions and their choices to the user.
  
  
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    console.log(`Question ${i + 1}: ${question.question}`);
    
    for (let j = 0; j < question.options.length; j++) {
      console.log(`${j + 1}. ${question.options[j]}`);
    }

    const userAnswer = await getInput('Your answer (enter the option number): ');
    const selectedOption = parseInt(userAnswer, 10);

    if (selectedOption === question.correctOption) {
      console.log('Correct!\n');
      score++;
    } else {
      console.log(`Incorrect. The correct answer is: ${question.options[question.correctOption - 1]}\n`);
    }
  }

  return score;
}

async function main() {
  console.log('Welcome to the Quiz System!\n');

  const questions: Question[] = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correctOption: 2,
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      correctOption: 1,
    },
    // Add more questions here
  ];
  //await keyword is like everything will happen one by one
  const userScore = await askQuestions(questions);
  console.log(`Quiz completed! Your score: ${userScore} out of ${questions.length}`);

  rl.close();
}

main();
// Overall, the program uses asynchronous operations and promises to interactively ask questions, gather user 
// input, and calculate the user's quiz score. It's a console-based quiz system where users provide answers to 
// questions and receive feedback on their performance.