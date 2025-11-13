let school = {
  'name': 'Chales',
  'average class size': '89',
  'mascot': 'Tiger',
};

let description = `${school.name} has an average class size of ${school['average class size']} and their mascot is a ${school['mascot']}.`

document.getElementById('result').innerHTML = description;

