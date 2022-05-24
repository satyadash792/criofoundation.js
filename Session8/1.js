const data=
{
  john : 10000,
  pete :30000,
  mary :25000
};
function Util(employeeData){
    this.data = employeeData;
    let result=0;
    this.sumSalaries: function(employeeData){
      for(let res in employeeData){
       result+=res;
      }
    }
    this.averageSalaries :function(result){
      console.log(res/employeeData.length);
    }
    this.findSalaryRange(){
      console.log(math.max(...this.data)-math.min(...this.data));
    }
//
}
const salary=new Util(Object.value(data));
