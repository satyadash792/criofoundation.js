const billDiscount=(bill,discount)=>{
 if(discount>=0 && discount<=1){
   return discount*bill;
 }else{
   return bill;
 }
}
const decorator=(value,pattern)=>`${pattern}${value}${pattern}`;

const parseString=(bill,discount,pattern)=>{
  decorator(withdiscount(bill,discount),pattern)
}

const curriedWithDiscount = (bill = 0)=> (discount = 0) => {
  if (discount >= 0 && discount <= 1) {
    return bill - bill * discount;
  } else return bill;
};
const average =  method => value=>method(values);