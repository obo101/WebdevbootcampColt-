const tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector('#tweets')
tweetForm.addEventListener('submit', function (e){
    e.preventDefault();
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.Username; // the value in username 
    const tweetInput = tweetForm.elements.tweet;
    //the value in tweets
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';

});
const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li'); //createas a lit 
    const bTag = document.createElement('b'); //makes username bold 
    bTag.append(username) // atteched bold to username value
    newTweet.append(bTag) //attached bold username value to list 
    newTweet.append(`-${tweet}`) //attached tweet value to list 
    tweetsContainer.append(newTweet) // come together at the bottom of the page 
   
}
