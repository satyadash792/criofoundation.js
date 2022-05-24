 const rates= {
        "USD": 1,
        "AED": 3.67,
        "AFN": 103.72,
        "ALL": 106.73,
        "INR": 75.14,
        "IQD": 1459.45,
        "IRR": 41914.03,
        "ISK": 129.85,
        "JMD": 154.11,
        "JOD": 0.709,  
    }
console.log(Object.keys(rates))
 Object.keys(rates).map((index, key)=> {
 rates[index] *= 2;
});
//  const result=rates.map(res=>{
//    console.log(res)
//  })
console.log(rates)