/**
 * Created by Paul Caldwell the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){
    //set all vars
	var numOfPeople = 3;
	var people = [];
	var names = ["Paul", "Carissa", "David", "Taylor", "James"];
	var interval;

    // for loop FTW

	for (var i = 0; i < numOfPeople ; i++){

		var personIndex = Math.floor(Math.random()*names.length);

		var person = new Person(names[personIndex], i+1);

		populateHTML(person.name,"r"+(i+1)+"c1");
		populateHTML(person.job,"r"+(i+1)+"c2");

		people.push(person);
		names.splice(personIndex,1);
		
	}
// set and clear intervals
    clearInterval(interval);

	interval = setInterval(runUpdate, 1000 / 30);


	
	function populateHTML(data,field){
		var id=document.getElementById(field);
		id.innerHTML = data;
	}

	function runUpdate(){
        people.forEach(function(element){
            element.update();
        });
	}

})();


