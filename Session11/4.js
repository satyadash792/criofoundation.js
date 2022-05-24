Everyone
4:52:48 PM

class Employee{
            constructor(name,department){
                this.name=name;
                this.department=department;
            } getRole(){
                return "Employee of office";
            }

            
        }
        
        class Developer extends Employee{
            constructor(langname,name,department){
                super(name,department);
                this.prefLanguage=lang;
            }
            submitCode(){
                console.log("code submitted by "+this.name+" in "+this.department);
            }

            getRole(){
                return "Works with "+this.prefLanguage;
  