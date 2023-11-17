const API_KEY = 'solaris-1Cqgm3S6nlMechWO';
const BASE_URL = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies";
const planetsElem = ["Sun", "Merkurius", "Venus", "Earth", "Mars", "Jupiter", "Saturnus", "Uranus", "Neptune"];
const paragraphElem = document.querySelector('p', 'header');

async function getKey() {
  try {
    let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys", {
      method: "POST" ,
      headers: {
        "x-zocom": "solaris-1Cqgm3S6nlMechWO",
      },  
});

  if (resp.ok) {
      const data = await resp.json();
      console.log(data); // Hantera data enligt behov
  } else {
      console.error("Misslyckades med att hämta data");
  }
} catch (error) {
    console.error("Error during API request:", error);
  } 
}

async function fetchData() {
  try {
    let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
      method: "GET",
      headers: { "x-zocom": "solaris-1Cqgm3S6nlMechWO" },
    });  

    if (resp.ok) {
      const data = await resp.json();
      console.log(data); // Hantera data enligt behov
    } else {
      console.error("Misslyckades med att hämta data");
    }
  } catch (error) {
    console.error("Fel under API-förfrågan:", error);
  }
}

async function getPlanets(); { //Hämtar planeter
      
    console.log(); 
}

function displayplanets() {
  for(let i = 0; i <planets.length; i++) {
    console.log(planets[i]);
  }
}  

getPlanets();
displayplanets();

async function getPlanetsinfo() {

  const response = await fetch(url);
  const data = await response.json();
  console.log(getPlanetsinfo);
}

getPlanetsinfo();

let planets = document.getElementsByTagName('button'); //visa information om planeterna när man klickar på dom 
console.log(planets);

for(let i = 0; i < planets.length; i++) {
  console.log(planets[i]);
  planets[i].addEventListener('click', (event) => {
    console.log(event.target);
  })
}

document.getElementById('more-info').innerHTML =
let planet = {
  ID: 1 ,
  Type: Star ,
  Name: Sun ,
  Latin , Name: Sol ,
  Rotation: About 27 days ,
  Circumference: 38025 km ,
  Temperature:
    Day: 15000000 °C ,
    Night: 5500 °C ,
  Distance from Sun: 0 km ,
  Orbital Period: 27 days ,
  Description: 'The sun is a star that was created 4.5 billion years ago.' ,
  Moons: None ,
}

console.log(paragraph); 

};

document.getElementById('more-info').innerHTML = 
  let planet = {
    id: 2,
    type: 'planet' ,
  name: Merkurius ,
  rotation: 58,65   //Längd på dygn i antal jorddygn runt sin egen axel
  :circumference = '15329' , //Omkrets i km
  temp: {
    day: 430,
    night: -180
  },
  distance: 10820000, //km från solen
  orbitalPeriod: 225, //Antal jorddygn runt solen
  desc: 'Merkurius has...',
  moons: [0] //Lista med månarnas namn
}
  console.log(data); 
};

document.getElementById('more-info').innerHTML = 
let planet = {
  id: 3,
  type: 'planet',
  name: 'Venus',
  latinName: 'Lucifer' , 'Vesper' 
  rotation: 243 , //Längd på dygn i antal jorddygn runt sin egen axel
  circumference: 38025 , //Omkrets i km
  temp: {
    day: 460,
    night: 460
  },
  distance: //km från solen
  orbitalPeriod: //Antal jorddygn runt solen
  desc: 'Venus has...',
  moons: [0] //Lista med månarnas namn
}
console.log(data); 

};

document.getElementById('more-info').innerHTML = 
let planet = {
  id: 4,
  type: 'planet',
  name: 'Earth',
  latinName: 'Terra' ,
  rotation: 24 , //Längd på dygn i antal jorddygn runt sin egen axel
  circumference: 40 075 , //Omkrets i km
  temp: {
    day: 50, //Högsta Temperatur
    night: -50  //Lägsta Temperatur
  },
  distance: //km från solen
  orbitalPeriod: //Antal jorddygn runt solen
  desc: 'Jorden är den största och mest kompakta av de inre planeterna. Jorden är den enda av planeterna som konstaterats ha geologisk aktivitet och är även den enda planeten som med säkerhet härbärgerar liv. Dess flytande hydrosfär är unik bland stenplaneterna och jorden är också den enda planeten hos vilken plattektonik har observerats. 
  'Jordens atmosfär skiljer sig markant från de andra planeternas, vilket förklaras av att närvaron av levande organismer har förändrat atmosfären till att innehålla fritt syre, i dag motsvarande 21 procent.',
  moons: ['Moon'] //Lista med månarnas namn
}
  console.log(data); 
};

document.getElementById('more-info').innerHTML = 
let planet = {
  id: 5,
  type: 'planet',
  name: 'Mars',
  latinName: 'Martius' ,
  rotation:  24,6 , //Längd på dygn i antal jorddygn runt sin egen axel
  circumference: 21 344 , //Omkrets i km
  temp: {
    day:  20, //Högsta Temperatur
    night: -153  //Lägsta Temperatur
  },
  distance: //km från solen
  orbitalPeriod: //Antal jorddygn runt solen
  desc: 'Mars has...',
  moons: ['Phobos' , 'Deimos'] //Lista med månarnas namn
}
  console.log(data); 
};

document.getElementById('more-info').innerHTML = 
  let planet = {
    id: 6,
    type: 'planet',
    name: 'Jupiter',
    latinName: 'luppiter' ,
    rotation: 4,333; //Längd på dygn i antal jorddygn runt sin egen axel
    circumference: 439 264 , //Omkrets i km
    temp: {
      day:   //Högsta Temperatur
      night:   //Lägsta Temperatur
    },
    distance: //km från solen
    orbitalPeriod: //Antal jorddygn runt solen
    desc: 'Jupiter has...',
    moons: [''] //Lista med månarnas namn
}
  console.log(data);   
};

document.getElementById('more-info').innerHTML = 
  let planet = {
    id: 7,
    type: 'planet',
    name: 'Saturn',
    latinName: '' ,
    rotation:  ; //Längd på dygn i antal jorddygn runt sin egen axel
    circumference: ; //Omkrets i km
    temp: {
      day:  , //Högsta Temperatur
      night:   //Lägsta Temperatur
    },
    distance: //km från solen
    orbitalPeriod: //Antal jorddygn runt solen
    desc: 'Uranus has...',
    moons: [] //Lista med månarnas namn
  }  
    console.log(data); 
};

document.getElementById('more-info').innerHTML = 
  let planet = {
    id: 8,
    type: 'planet',
    name: 'Uranus',
    latinName: '' ,
    rotation:  ; //Längd på dygn i antal jorddygn runt sin egen axel
    circumference: ; //Omkrets i km
    temp: {
      day:  , //Högsta Temperatur
      night: ,   //Lägsta Temperatur
    },
    distance: ,//km från solen
    orbitalPeriod: ,//Antal jorddygn runt solen
    desc: 'Uranus has...',
    moons: ['Cordelia' , 'Ophelia' ,'Bianca', 'Cressida', 'Desdemona', 'Juliet', 'Portia', 'Rosalind', 'Cupid', 'Belinda', 'Perdita', 'Puck'
  'Mab', 'Miranda', 'Ariel', 'Umbriel' , 'Titania' , 'Oberon' , 'Fransisco', 'Caliban' , 'Stephano' , 'Trinculo' , 'Sycorax' , 'Margaret' ,
'Prospero', 'Setebos' , 'Ferdinand'] //Lista med månarnas namn

}
  console.log(data); 
};

document.getElementById('more-info').innerHTML = 
  let planet = {
    id: 9,
    type: 'planet',
    name: 'Neptune',
    latinName: '' ,
    rotation:  ; //Längd på dygn i antal jorddygn runt sin egen axel
    circumference: ; //Omkrets i km
    temp: {
      day:  , //Högsta Temperatur
      night:   //Lägsta Temperatur
    },
    distance: //km från solen
    orbitalPeriod: //Antal jorddygn runt solen
    desc: 'Neptune has...',
    moons: ['Naiad' , 'Thalassa' , 'Despina' , 'Galatea' , 'Larissa' , 'Hippocamp' , 'Porteus' , 'Triton' , 
    'Nereid' , 'Halimede' , 'Sao' , 'Laomedeia', 'Psamathe' , 'Neso'] //Lista med månarnas namn 
    
}

async function getParagraph() {
    
  const response = await fetch(url);
  const data = await response.json(); 
  console.log(paragraph);
}

  console.log(alldata);  
  console.log(more-info);   
  console.log(allplanets);    