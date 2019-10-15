import c from './helpers/data/colors';

const colors = c.getColors();

const forEachFunc = () => {
// loops over all colors and does a console.log to print the color name
  for (let i = 0; i < colors.length; i += 1) {
    console.log('for', colors[i].name);
  }
  // array methods
  colors.forEach((color) => console.log('forEach', color.name));
};

const filterFunc = () => {
  // print an array of colors that has a hex value that starts with then 'F'-first 3
  const newColors = [];
  for (let j = 0; j < colors.length; j += 1) {
    if (colors[j].hexValue[0] === 'F') {
      newColors.push(colors[[j]]);
    }
  }
  console.log('for', newColors);

  const filterColors = colors.filter(x) => x.hexValue[0] === 'F';
  console.log('filter', filterColors);
};

const findFunc = () => {
    // find the colors that has a name of green and condole out its hexvalue 
  let colorToFind = {};
  // do  FIR LOOP ANS SOME STUFF (LIKE AN if)
  for (let k = 0; k < colors.length; k += 1 ) {
      if (colors[k].name === 'green'){
          colorToFind = colors[k];
      }
  }
  console.log('for', colorToFind.hexValue);
  const colorFind = colors.find((x) => x.name === 'green');
  console.log('find', colorFind.hexValue);
};

const mapFunc = ()=> {
    let h1Tags = [];
    for (let l= 0; l < colors.length; 1 += 1) {
        h1Tags.push(`<h1>${colors[l].name}</h1>`);
    }
    console.log('for', h1Tags);
    const colorMap =  colors.map((color) => `<h1>${colors[l].name}</h1>`);
    console.log('map', colorMap);
};

const reduceFunc = () => {
    // total number of upvotes
    let total =0;
    for (let m= 0; m < colors.length; m += 1) {
        total += colors[m].upVotes;
    }
    console.log('for', total);
    const upVoteTotal = color.reduce((prev,curr) => prev + curr.upVotes, 0);
};

const init = () => {
  forEachFunc();
  filterFunct();
};

export default { init };
