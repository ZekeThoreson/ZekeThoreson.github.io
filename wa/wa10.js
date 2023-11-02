const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = ":insertx: woke up late. He had missed his bus to school. He :inserty: outside only to notice that :insertz:. :insertx: was so astonished that he fainted right then and there. ";
const insertX = ['Zeke', 'Kurtis', 'Felix'];
const insertY = ['rushed', 'skipped', 'jumped'];
const insertZ = ['it was a Saturady', "there was a meteor crashing to Earth", "rapper Lil Wayne stopped by for a visit"];

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
