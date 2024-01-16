const users = [
    'joe123',
    'iluvponies2',
    'bigbaby420',
    'yummyhotdog',
    'johnsmith4',
    'billybob423',
    'hamsandwich',
    'rocknroll',
    'jane_doe',
    'tonysoprano1',
    'bluthfam29'
];
const thoughtText = [
    'how much wood does a wood chuck chuck',
    'marvel movies are trash',
    'i smell like beef',
    'i have a doctors appointment today',
    'feeling happy :D',
    'what is the meaning of life?',
    'math is cool',
    'i like coding',
    'will the AI take over the world',
    'doing chores today',
    'i hate doing laundry',
    'i love The Sopranos',
    'my favorite movie of 2023 was Poor Things'
];
const reactionBody = [
    'Nice job!',
    'Love this!',
    ':D',
    '❤️',
    'Very cool',
    'Couldnt have said it better myself',
    'I dont like this',
    'Great insight',
    'Same here',
    'who do you think you are?',
    '👍',
    ':)',
    '👎',
    '🙌',
    '🤷‍♀️',
    'well said',
    '😂',
    'lol',
    'smh',
    'lmao',
    'rofl'
];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomUser = () => `${getRandomArrItem(users)}`;

  const getFriendsList = (int) =>{
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            friends: getRandomArrItem(users)
        });
    }
    return results;
  };

  // Function to generate random thoughts with reactions to add to the user object
  const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughtText),
            reactions: getRandomArrItem(reactionBody),
        });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUser, getRandomThought, getFriendsList };
  