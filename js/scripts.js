//Business Logic

    function Food(first, kind, size, crust, toppings, numbers, delivery){
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
        this.numbers="numbers"
        Food.prototype.combineProperties = function() {
            return "this.first,"
+ "you have ordered" + "this.numbers" + "this.kind" 
}
returnValueFunction = (this.kind[kind][size] + this.crust[crust] + [this.crust] + [this.delivery] * [this.numbers])
Food.prototype.firstKindSizeCrustToppingsNumbersDelivery= function(){
    return this.numbers + this.kind;
}
    }
    //User Interface
    $(document).ready(function(){
        $("form").submit(function(event){
            event.preventDefault();
            var inputtedfirst=parseInt($("input[name='name'):checked").val());
            var inputtedsize=parseInt($("input[name='size):checked").val());
            var inputtedkind=parseInt($("input[name='kind'):checked").val());
            var inputtedcrust=parseInt($("input[name='crust'):checked").val());
            var inputtedtoppings=parseInt($("input[name='toppings'):checked").val());
            var inputtednumbers=parseInt($("input[name='numbers'):checked").val());
            var inputteddelivery=parseInt($("input[name='del'):checked").val());

            if(del='yes'){
                var delivery=parseInt(200);
            }

            else if (del=='yes'){
                prompt("Your total will be increased by 200 due to delivery charges");
            }
            else if (del=='no'){
                var delivery=parseInt(0);
            }

        }
        


    
    
    
   


