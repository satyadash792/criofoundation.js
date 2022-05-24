class employee{
  constuctor(name,department,prefered){
    this.name=name;
    this.department=department;}
    markPresent(){
      console.log(this.name+"is present");
  }
  getRole(){

  }
}
class Devloper extends employee{
  submitCode(){
    console("code submitted"+this.name+ "in"+this.department)
  }
  getRole(){

  }
}
let em1=new employee(name,department);
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  markPresent() {
    //2️⃣
    console.log(this.name, "is present");
    return this;
  }
}

class Developer extends Employee {
  markPresent() {
    //1️⃣
    console.log(this.name, "is present as a developer");
  }

  submitCode() {
    this.markPresent(); // 1️⃣
    super.markPresent(); // 2️⃣
    console.log("Code Submitted by", this.name, "in", this.department);
  }
}

const shoaib = new Developer("Shoaib", "Software Dev Dept.");
shoaib.submitCode();



class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  markPresent() {
    //2️⃣
    console.log(this.name, "is present");
    return this;
  }
}

class Developer extends Employee {
  constructor(rank, name, department) {
    //When creating a derived class constructor
    //Call the super(...) constructor to initialize the parent class
    //then only after than set the properties of the current class
    super(name, department);
    this.rank = rank;
  }

  markPresent() {
    //1️⃣
    console.log(this.name, "is present as a developer");
  }

  submitCode() {
    console.log(this.rank)
    console.log("Code Submitted by", this.name, "in", this.department);
  }
}

const shoaib = new Developer(256, "Shoaib", "Software Dev Dept.");
shoaib.submitCode();