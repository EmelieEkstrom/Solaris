async function fetchAPIKey() {
  try {
    const response = await fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
      {
        method: "POST",
      }
    );

    const apiKey = await response.json();
    console.log(apiKey); 
    return apiKey.key; 
  } catch (error) {
    console.log(error + " error "); 
  }
}

async function fetchAPIData() {
  try {
    const apiKey = await fetchAPIKey();
    const response = await fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
      {
        method: "GET",
        headers: { "x-zocom":  apiKey },
    });    

    const data = await response.json(); //här konventerar vi datat till data formatet json med hjälp av metoden jason() och sparar in den i data variabeln
    window.solarisData = data.bodies; //sedan lägger vi hela  planet-data i vår globala variabel window
    ShowPlanetContentWhenClicking();
  } catch (error) {
    console.log(error);
  }
}

//funktion att öppna modal
function Dialog() {
  dialog.style.display = "block";
}

const dialog = document.createElement('dialog');
document.body.appendChild(dialog);
//dialog.open = true;
console.log(dialog);
function ShowPlanetContentWhenClicking() {
  document.querySelectorAll("img").forEach((planetEl, index) => {
    planetEl.addEventListener("click", () => {
      const planet = window.solarisData[index]; 
      
      if (planet) {
        dialog.innerHTML = `
        <dialog open>
        <button onclick = closeDialogWhenClickingButton()>Close</button>
        <div class = "content">
        <h2>${planet.name}</h2>
        <p class = "content-desc">desc: ${planet.desc}</p>
        <p>Type: ${planet.type}</p>
        <p>id: ${planet.id}</p>
        <p>latinName: ${planet.latinName}</p>
        <p>moons: ${planet.moons.map(
          (moon) => `<br></br><span>${moon}</span>`
        )}</p>
        <p>orbitalPeriod: ${planet.orbitalPeriod}</p>
        <p>rotation: ${planet.rotation}</p>
        <p>temp: Day ${planet.temp.day} &deg</p>
        <p>temp: Night ${planet.temp.night} &deg</p>
        </div>
        </dialog> 
        
    `;
      Dialog();
        
      }
    });
  });
}

function closeDialogWhenClickingButton() {
  // Stänga dialogen och gå tillbaka till föregående sida
  window.location.href = "index.html";
}

fetchAPIData();
