class Person {
  constructor(name, parent = null) {
    this.name = name;
    this.parent = parent; // Parent
    this.children = []; // Children
  }

  addChild(child) {
    this.children.push(child);
    child.parent = this;
  }

  getLineage() {
    let lineage = [];
    let currentPerson = this;
    while (currentPerson) {
      lineage.unshift(currentPerson);
      currentPerson = currentPerson.parent;
    }
    return lineage;
  }

  getDepthToAncestor(ancestor) {
    let lineage = this.getLineage();
    return lineage.indexOf(ancestor);
  }
}

// Usage example
let john = new Person("James"); // Father
let jane = new Person("Samuel"); // Mother
let bob = new Person("Bob"); // Son
let alice = new Person("Ruben"); // Daughter
let tom = new Person("Luke"); // Grandson
let lily = new Person("Daniel"); // Granddaughter

john.addChild(jane); // James is the parent of Jane
jane.addChild(bob); // Samuel is the parent of Bob
jane.addChild(alice); // Samuel is the parent of Ruben
alice.addChild(tom); // Ruben is the parent of Luke
alice.addChild(lily); // Ruben is the parent of Daniel
