const obj = [
  {
    quote: "Description begins in the writer's imagination, but should finish in the reader's.",
    author: 'Stephen King'
  },
  {
    quote: 'Everyone is a moon and has a dark side which he never shows to anybody.',
    author: 'Mark Twain'
  },
  {
    quote: 'A goal properly set is halfway reached.',
    author: 'Zig Ziglar'
  },
  {
    quote: 'Failure is the opportunity to begin again more intelligently.',
    author: 'Henry Ford'
  }];


  document.getElementById('auto').onclick = function getQuote(){
  let randomN = obj[Math.floor(Math.random() * obj.length)];
  document.getElementById('quote').textContent = randomN.quote;
  document.getElementById('author').textContent = randomN.author;
}
