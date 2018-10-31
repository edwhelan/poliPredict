// console.log('it works?!');
//GLOBAL VARS
const outputElement = document.querySelector('[data-output]')
const voterAddress = `3423%20piedmont%20road%20atlanta%20ga%2030305`

//Set up fetch for google civic api to look at voter information
// https://www.googleapis.com/civicinfo/v2/voterinfo?address=3431%20orchard%20circle%20decatur%20ga%2030032&key=${CIVICS_API}

function getVoterInfo() {

  fetch(`https://www.googleapis.com/civicinfo/v2/voterinfo?address=${voterAddress}&key=${CIVICS_API}`)
    .then(r => r.json())
    .then(d => getVoterLocations(d));

}
//helper functions
function getVoterLocations(data) {
  const placesToEarlyVote = data.earlyVoteSites;
  placesToEarlyVote.map(function (data) {
    // create div for voter info to go in
    let voterLocation = document.createElement('div');
    voterLocation.setAttribute('data-voteLocation', '');
    voterLocation.setAttribute('class', 'earlyVoterLocs')
    outputElement.appendChild(voterLocation);
    //draw info to div. 
    let voterOutput = document.querySelector('[data-voteLocation]')
    let pollName = document.createElement('div');
    pollName.setAttribute('class', 'voteSpots')
    pollName.textContent =
      `${data.address.locationName}
      ${data.address.line1}
      ${data.address.city} ${data.address.state} ${data.address.zip} 
      ${data.pollingHours}`;
    voterOutput.appendChild(pollName);

  });
}
//Main function
getVoterInfo();