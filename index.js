// Code your solutions in this file
// Task 1: writeCards function
function writeCards(names, event) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
  }

  return messages;
}

// Test the writeCards function
const names = ["Charlie", "Samip", "Ali"];
const event = "birthday";
const thankYouMessages = writeCards(names, event);
console.log(thankYouMessages);

// Task 2: countDown function
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

// Test the countDown function
countDown(10);
