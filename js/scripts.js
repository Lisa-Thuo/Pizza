//Business Logic
$(document).ready(function(){
    function Extra(kind, size, crust, toppings, numbers, delivery){
        // this.first = first;
        // this.size=size
        this.crusts={
            "crispy":100,
            "stuffed":100,
            "gluten-free":100
        }
        this.toppings={
            "cheese": 50,
            "sauce":50,
            "olives":50,
            "bay":50
        }
        this.kind={
            bacon:{"small": 500, "medium":800, "large":1200}
    
        }
        this.delivery={
            "yes": 200,
            "no":0
        }
        this.numbers=numbers
        this.price=(this.kind[kind][size] + this.toppings[toppings] + this.crusts[crust] + this.delivery[delivery]) * numbers;
    }
    
    Extra.prototype.combineProperties = function() {
        return " this.first, " + "You have ordered " + "this.numbers"+" this.kind " + " this.size " + " this.toppings " + " this.crust ";
    }
    $("#orderPizza").click (function(){
        var type = $("#type").val;
        var crust = $('#crust').val;
        var toppings = $('#toppings').val;
        var del = $("#del").val;
        var cost = new Extra(type, crust, toppings, del);
        console.log(cost);
    });
    //user interface logic
    // $(document).ready(function(){
    //   var  first=parseInt(document.getElementByClassName("first").value);
    //   var  last=parseInt(document.getElementByClassName("last").value);
    //  }) 
})


