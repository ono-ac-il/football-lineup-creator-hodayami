const players = [
    { name: 'Ronaldo', position: 'forward' },
    { name: 'Messi', position: 'forward' },
    { name: 'Neymar', position: 'forward' },
    { name: 'Modric', position: 'midfielder' },
    { name: 'Kroos', position: 'midfielder' },
    { name: 'De Bruyne', position: 'midfielder' },
    { name: 'Alaba', position: 'defender' },
    { name: 'Ramos', position: 'defender' },
    { name: 'Varane', position: 'defender' },
    { name: 'Neuer', position: 'goalkeeper' },
    { name: 'Buffon', position: 'goalkeeper' },
    { name: 'Casillas', position: 'goalkeeper' }
]

const goalkeepers = players.filter(function (player) {
    return player.position == 'goalkeeper';
});

const mappedGoalkeepers = goalkeepers.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});

document.getElementById('pos1').innerHTML = mappedGoalkeepers.join('');

const defenders = players.filter(function (player) {
    return player.position == 'defender';
});

const mappeDefenders = defenders.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});

document.getElementById('def1').innerHTML = mappeDefenders.join('');
document.getElementById('def2').innerHTML = mappeDefenders.join('');
document.getElementById('def3').innerHTML = mappeDefenders.join('');
document.getElementById('def4').innerHTML = mappeDefenders.join('');
document.getElementById('def5').innerHTML = mappeDefenders.join('');


const midfielders = players.filter(function (player) {
    return player.position == 'midfielder';
});

const mappeMidfielders = midfielders.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});

document.getElementById('mid1').innerHTML = mappeMidfielders.join('');
document.getElementById('mid2').innerHTML = mappeMidfielders.join('');
document.getElementById('mid3').innerHTML = mappeMidfielders.join('');
document.getElementById('mid4').innerHTML = mappeMidfielders.join('');
document.getElementById('mid5').innerHTML = mappeMidfielders.join('');


const forwards = players.filter(function (player) {
    return player.position == 'forward';
});

const mappeForwards = forwards.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});

document.getElementById('st1').innerHTML = mappeForwards.join('');
document.getElementById('st2').innerHTML = mappeForwards.join('');
document.getElementById('st3').innerHTML = mappeForwards.join('');

const btn= document.getElementById("s")
function con(){
    console.log (" " + document.getElementById('pos1').value + " " + 
    document.getElementById('def1').value + " "
     +document.getElementById('def2').value + " " + document.getElementById('def3').value + " " + 
     document.getElementById('def4').value + " " + document.getElementById('def5').value + " " +
     document.getElementById('mid1').value + " " + document.getElementById('mid2').value+ " " +
      document.getElementById('mid3').value + " " + document.getElementById('mid4').value + " " + 
      document.getElementById('mid5').value + " " + document.getElementById('st1').value + " " + 
      document.getElementById('st2').value + " " + document.getElementById('st3').value + " ")
}
btn.addEventListener("click", con )
