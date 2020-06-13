let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];
let storyWords = story.split(" ");

console.log("The original story contains " + storyWords + " words\n");

let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

console.log('The story contains ' + betterWords.length + ' words after removing unnecessary words\n');

overusedWords.forEach(function(overWord){
  let overWordCount = 0;
  betterWords.filter(function (storyWord) {
    if (overWord === storyWord) {
      overWordCount++;
    }
  });
  if (overWordCount != 1) {
    console.log('The word ' + overWord.toLocaleUpperCase() + ' was used ' + overWordCount + ' times\n');
  }
  else{
    console.log('The Word ' + overWord.toUpperCase() + ' was used ' + overWordCount + ' time\n');
  }
});