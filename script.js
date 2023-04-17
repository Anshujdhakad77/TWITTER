const tweetInput = document.getElementById('tweet-input');
const tweetButton = document.getElementById('tweet-button');
const tweetList = document.getElementById('tweet-list');

// Add a new tweet to the list
function addTweet(tweet) {
  const li = document.createElement('li');
  li.textContent = tweet;
  tweetList.appendChild(li);
}

// Handle the form submission event
function handleSubmit(event) {
  event.preventDefault();
  const tweet = tweetInput.value;
  if (tweet.trim() === '') {
    return;
  }
  addTweet(tweet);
  tweetInput.value = '';
}

// Add an event listener to the form
tweetButton.addEventListener('click', handleSubmit);