const withDiscount = (discount) => (bill) => 
{
    if (discount > 0 && discount <=1)
    {
        return bill - (bill * discount);
    }
    return bill
}

const parseString=(bill)=>(discount)=>(pattern)=>{
  decorator(withdiscount(bill),pattern))
}
const withTwenty = withDiscount(0.2)

const withdollarSign=(pattern)=>(bill,discount)=>{
    decorator(withDiscount(discount,bill),pattern)
}