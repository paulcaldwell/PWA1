/**
 * Created by Paul Caldwell the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){
	
	// add the Person object to the global window object - beause main.js needs it!
	window.Person=Person;


    //set array for peoples jobs and actions
	Person.job = ["Stormtrooper", "Sith", "Jedi", "Darklord"];
	Person.actions = ["sleeping","eating","working"];


   //note to self... careful with action and actions!!!! stupid "S"
	function Person(name,row){
		console.log("Person Created: ", name);
		this.name = name;

		this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];

		this.job = Person.job[Math.floor(Math.random()*Person.job.length)];

		this.row = row;

		var id = document.getElementById("r"+this.row+"c3");
		id.innerHTML=this.action;

	}
	Person.prototype.update = function(){
		if (Math.floor(Math.random()<.01)){
			var i = Math.floor(Math.random()*Person.actions.length);
			this.action = Person.actions[i];
			var id = document.getElementById("r"+this.row+"c3");
			id.innerHTML=this.action;
		}
	}
})();