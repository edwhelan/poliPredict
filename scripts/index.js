// console.log('it works?!');
//GLOBAL VARS
const voterAddress = `3423%20piedmont%20road%20atlanta%20ga%2030305`

//Set up fetch for google civic api to look at voter information
// https://www.googleapis.com/civicinfo/v2/voterinfo?address=3431%20orchard%20circle%20decatur%20ga%2030032&key=${CIVICS_API}

function getVoterInfo() {

  fetch(`https://www.googleapis.com/civicinfo/v2/voterinfo?address=${voterAddress}&key=${CIVICS_API}`)
    .then(r => r.json())
    .then(d => getData(d));

}
//helper functions
function getData(data) {
  console.log(data.contests);
}
//Main function