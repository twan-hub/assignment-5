
document.getElementById('formSubmit').addEventListener("click",myFunction);
function myFunction(e){
    var pilotName = document.getElementById('pilotName');
    var copilotName = document.getElementById('copilotName');
    var fuelLevel = document.getElementById('fuelLevel');
    var cargoMass = document.getElementById('cargoMass');
    var formSubmit = document.getElementById('formSubmit');
    var num=0;
    var faultyItems = document.getElementById('faultyItems');
    var abort=1;
    var faultyItems=document.getElementById('faultyItems');
    var pilotStatus = document.getElementById('pilotStatus');
    var copilotStatus = document.getElementById('copilotStatus');
    var fuelStatus = document.getElementById('fuelStatus');
    var cargoStatus = document.getElementById('cargoStatus');
    var ray=[pilotStatus,copilotStatus,fuelStatus,cargoStatus];
    var launchStatus=document.getElementById('launchStatus');
    var missionTarget=document.getElementById('missionTarget');


        if (pilotName.value==''||pilotName.value==null){
            alert('Forgot to enter your name pilot!');
        }else if(!(isNaN(pilotName.value))){
            alert("You've enterd something other than letters in pilot's name!")
        }else{
            num+=1;
        }
        if (copilotName.value==''||copilotName.value==null){
            alert('Forgot to enter your name co-pilot!');
        }else if(!(isNaN(copilotName.value))){
            alert("You've enterd something other than letters in co-pilot's name!")
        }else{
            num+=1;
        }
        if (fuelLevel.value==null || fuelLevel.value==''){
            alert('Forgot to enter a value for fuel Level!');
        }else if(isNaN(fuelLevel.value)){
            alert("You've enterd something other than a number in fuel level!")
        }else{
            num+=1
        }
        if (cargoMass.value==null || cargoMass.value==''){
            alert('Forgot to enter a value for cargo mass!');
        }else if(isNaN(cargoMass.value)){
            alert("You've enterd something other than a number in cargo mass!");
        }else{
            num+=1
        }
   console.log(num);
   if(num>3){
      pilotStatus.textContent=(`Pilot ${pilotName.value} is ready for launch`);
      copilotStatus.textContent=(`Co-pilot ${copilotName.value} is ready for launch`);
      fuelStatus.textContent=(`${fuelLevel.value<10000 ? 'Fuel Level is too Low':'Fuel level high enough for launch'}`);
      cargoStatus.textContent=(`${cargoMass.value>10000 ? 'There is too much mass for take off':'Cargo mass low enough for launch'}`);
      launchStatus.innerHTML=(`${cargoMass.value>10000 || fuelLevel.value<10000 ? 'Shuttle is not ready for Launch':'Shuttle is ready for launch'}`)
      launchStatus.style.color=(`${cargoMass.value>10000 || fuelLevel.value<10000 ? 'red':'green'}`)
      console.log(launchStatus.innerHTML);
      faultyItems.style.visibility='visible';
   }      
    e.preventDefault();
}
document.getElementById('formSubmit').addEventListener("click",getPLanet);
function getPLanet(e){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         console.log(json);
         console.log(missionTarget.innerHTML);
         missionTarget.innerHTML=(`<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
            <img src="${String(json[0].image)}"></img>         
         </ol>`);   
      });
   });
}


