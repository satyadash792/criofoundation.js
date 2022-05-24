function BillSlip(itemList) {
    this.data=Object.fromEntries(itemList

    this.withDiscount = function(total)
    {
        return total - this.discount;
    }

    let discount = 10;
  Object.defineProperty(this, "discount", {
    get: function () {

      return discount;

    },
    set: function (value) {
       discount = value;
     },
  });