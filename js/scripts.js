//Business Logic

    function myFunction(kind, size, crust, toppings, numbers, delivery){
        this.crusts={
            "crispy":100,
            "stuffed":100,
            "gluten-free":100
        }
        this.toppings={
            "cheese":50,
            "sauce":50,
            "olives":50,
            "bay":50,
        }
        this.kind={
            "Chicken Barbeque":{"small":500, "medium":800,"large":1200},
            "Hawaiian":{"small":500, "medium":800,"large":1200},
            "Vegetarian":{"small":500, "medium":800, "large":1200},
            "Bacon":{"small": 500, "medium":800, "large":1200},
            "Gluten Free":{"small": 500, "medium":800, "large":1200},

    
        }
        this.delivery={
            "yes": 200,
            "no":0
        }
        //User Interface
        $("#orderPizza").click (function(){
            var type = $("#type").val;
            var crust = $('#crust').val;
            var toppings = $('#toppings').val;
            var del = $("#del").val;
            var cost = new Extra(type, crust, toppings, del);
            console.log(cost);
        });
        
    
    this.numbers=numbers
        this.price=(this.kind[kind][size] + this.toppings[toppings] + this.crusts[crust] + this.delivery[delivery]) * numbers;
        Extra.prototype.combineProperties = function() {
            return [" this.first, "+ "You have ordered " + "this.numbers"+" this.kind " + " this.size " + " this.toppings " + " this.crust "*"numbers"]
        }
        if(del="yes"){
            return ["Your total will be increased by two hundred because of delivery charges"]
            
        }
        else if(del="no"){
        return [" this.first, "+ "You have ordered " + "this.numbers"+" this.kind " + " this.size " + " this.toppings " + " this.crust "*"numbers"]
    
    }
    
    
   


