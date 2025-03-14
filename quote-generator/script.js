/** @format */

const quoteMsg = document.getElementById("quote-msg");

const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "Opportunities don't happen. You create them. – Chris Grosser",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "The secret of getting ahead is getting started. – Mark Twain",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "Doubt kills more dreams than failure ever will. – Suzy Kassem",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
  "Happiness depends upon ourselves. – Aristotle",
  "Do what you feel in your heart to be right – for you'll be criticized anyway. – Eleanor Roosevelt",
];

function generateQuote() {
  let idx = Math.floor(Math.random() * quotes.length);
  let quote = quotes[idx];
  quoteMsg.innerText = quote;
}
