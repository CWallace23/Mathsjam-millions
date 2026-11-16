const talkCategory = [ 'taking a fun idea to its absolute limit',
  'showing you how to make something',
  'showing off what I can do in Excel',
  'exercising my personal frustrations',
  'shitposting',
  'showing off something I`ve 3D printed',
  'showing off a cool toy',
  'doing a deep dive',
  'attempting to nerdsnipe you',
  'describing a cool thing'
]

const talkSource = ['in an old book',
  'in an old paper',
  'in an advert',
  'in someone else`s MathsJam talk',
  'in my classroom',
  'in a charity shop',
  'on social media',
  'on holiday',
  'in my house',
  'out in nature'
 ]

const talkMaths=['about combinatorics',
  'about units',
  'about graph theory',
  'about probability',
  'about control theory',
  'a meta talk about Mathsjam talks',
  'about modelling',
  'exploring data I found online',
  'based on some truly arcane maths',
  'about physics']

// Function to display a random image and its associated text
function displayRandomcombo() {
    const randomCat = Math.floor(Math.random() * talkCategory.length);
    const randomSource = Math.floor(Math.random() * talkSource.length);
    const randomArea = Math.floor(Math.random() * talkMaths.length);
    const textFirst = document.getElementById('talkCat');
    const textSecond = document.getElementById('talkSou');
    const textThird = document.getElementById('talkMat');

    textFirst.textContent = talkCategory[randomCat];
    textSecond.textContent = talkSource[randomSource];
    textThird.textContent = talkMaths[randomArea];

}

// Add event listener to the Refresh button
const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', displayRandomcombo);

// Display a random image and text when the page loads
window.addEventListener('load', displayRandomcombo);
