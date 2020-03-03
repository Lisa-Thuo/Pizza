//Business Logic
function Extra(first, size, crust, toppings, kind, numbers){
    this.first = first;
    this.size=size
    this.crust=crust
    this.toppings=toppings
    this.kind=kind
    this.numbers=numbers
}
Extra.prototype.combineProperties = function() {
    return " this.first, " + "You have ordered " + "this.numbers"+" this.kind " + " this.size " + " this.toppings " + " this.crust ";
}

//user interface logic
$(document).ready(function(){
  (".but").click(function(){
      
  })  
})

