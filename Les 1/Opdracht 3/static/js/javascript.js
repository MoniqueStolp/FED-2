function Person(name, speak){

	this.name = name;
	this.speak = function(speak){
		return speak;
	};
}

var bob = new Person("Bob", "Ik ben dik");



Person.prototype.walk = function(walkingtext){
	this.walking = walkingtext;
};

Person.prototype.eat = function(){
	console.log("I'm eating");
};

Person.walk();

var bob2 = {
	name : "Bob",
	speak : "Ik ben dik",
	walk : "I'm walkins on sunshine!",
	eat : "I'm eating"
};

/*console.log(bob2.name);
console.log(bob2.speak);
console.log(bob2.walk);
console.log(bob2.eat);*/
