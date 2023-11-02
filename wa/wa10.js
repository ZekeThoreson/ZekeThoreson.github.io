const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 100 fahrenheit inside :insertx:'s house, so :insertx: and :inserty: went to the air conditioning. When they got to the air conditioner, :inserty: and :insertx: tried to lift it. Then :insertz:. Richard saw the whole thing, but was not surprised — the air conditioner weighs 500 pounds, and it was so hot inside.";
const insertX = ['James', 'Curtis', 'Marty'];
const insertY = ['Michael', 'Robby', 'Benjamin'];
const insertZ = ['they dropped the air conditioner', "they couldn't lift it", "the air conditioner didn't budge"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Richard', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(500*0.0714286)} stone`;
    const temperature =  `${Math.round((100-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('100 fahrenheit', temperature);
    newStory = newStory.replaceAll('500 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
