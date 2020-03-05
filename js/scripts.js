//Business Logic
function Food(first, kind, size, crust, toppings, numbers, delivery) {
    this.crusts = crust;
    // {"crispy": 100,"stuffed": 100,"gluten-free": 100}
    this.toppings = toppings;
    // {"cheese": 50,"sauce": 50,"olives": 50,"bay": 50,}
    this.kind = 
    // { "Chicken Barbeque": { "small": 500, "medium": 800, "large": 1200 }, "Hawaiian": { "small": 500, "medium": 800, "large": 1200 }, "Vegetarian": { "small": 500, "medium": 800, "large": 1200 }, "Bacon": { "small": 500, "medium": 800, "large": 1200 }, "Gluten Free": { "small": 500, "medium": 800, "large": 1200 }, }
    this.delivery = {
        "yes": 200,
        "no": 0
    }
    this.numbers = "numbers"
    Food.prototype.combineProperties = function () {
        return "this.first,"
            + "you have ordered" + "this.numbers" + "this.kind"
    }
    returnValueFunction = (this.kind[kind][size] + this.crust[crust] + [this.crust] + [this.delivery] * [this.numbers])
    Food.prototype.firstKindSizeCrustToppingsNumbersDelivery = function () {
        return this.numbers + this.kind;
    }
}
//User Interface
pizza = {
    kind:{
        "ChickenBarbeque": { "small": 500, "medium": 800, "large": 1200 }, 
        "Hawaiian": { "small": 500, "medium": 800, "large": 1200 }, 
        "Vegetarian": { "small": 500, "medium": 800, "large": 1200 }, 
        "Bacon": { "small": 500, "medium": 800, "large": 1200 }, 
        "GlutenFree": { "small": 500, "medium": 800, "large": 1200 }, },
    crust:{
        "Crispy": 100,
        "Stuffed": 100,
        "GlutenFree": 100 

    },
    del:{
        "Yes": 200,
        "No": 0,
    }
        };




function myOrder() {
    var inputtedfirst = document.getElementById("name").value;
    var inputtedSize = document.getElementById("size").value;
    var inputtedToppings = parseInt(document.getElementById("toppings").value);
    var inputtedCrust = parseInt(document.getElementById("crust").value);
    var inputtedDel = parseInt("200");
    var inputtedKind = document.getElementById("type").value;
    var quantity = parseInt(document.getElementById("no").value);

    if(inputtedKind ===  "ChickenBarbeque" && inputtedSize === "small"){
        return pizza.kind.ChickenBarbeque.small;
    }else if(inputtedKind ===  "ChickenBarbeque" && inputtedSize === "medium"){
        return pizza.kind.ChickenBarbeque.medium;
    }else if(inputtedKind ===  "ChickenBarbeque" && inputtedSize === "large"){
        return pizza.kind.ChickenBarbeque.large;nt("200");
        var inputtedKind = document.getElementById("kind").value();
        var quantity = parseInt(document.getElementById("no").value());
    
       
    }else if(inputtedKind ===  "Hawaiian" && inputtedSize === "small"){
        return pizza.kind.Hawaiian.small;
    }
    else if(inputtedKind ===  "Hawaiian" && inputtedSize === "medium"){
        return pizza.kind.Hawaiian.medium;
    }else if(inputtedKind ===  "Hawaiian" && inputtedSize === "large"){
        return pizza.kind.Hawaiian.large;
    }
    else if(inputtedKind ===  "Vegetarian" && inputtedSize === "small"){
        return pizza.kind.Vegetarian.small;
    }
    else if(inputtedKind ===  "Vegetarian" && inputtedSize === "medium"){
        return pizza.kind.Vegetarian.medium;
    }else if(inputtedKind ===  "Vegetarian" && inputtedSize === "large"){
        return pizza.kind.Vegetarian.large;
    }
    else if(inputtedKind ===  "Bacon" && inputtedSize === "small"){
        return pizza.kind.Bacon.small;
    }
    else if(inputtedKind ===  "Bacon" && inputtedSize === "medium"){
        return pizza.kind.Bacon.medium;
    }else if(inputtedKind ===  "Bacon" && inputtedSize === "large"){
        return pizza.kind.Bacon.large;
    }
    else if(inputtedKind ===  "GlutenFree" && inputtedSize === "small"){
        return pizza.kind.GlutenFree.small;
    }
    else if(inputtedKind ===  "GlutenFree" && inputtedSize === "medium"){
        return pizza.kind.GlutenFree.medium;
    }else if (inputtedKind ===  "GlutenFree" && inputtedSize === "large") {
        return pizza.kind.GlutenFree.large;
    }
    else if (inputtedCrust ===  "Crispy") {
        return pizza.crust.Crispy;
    }
    else if (inputtedCrust ===  "Stuffed") {
        return pizza.crust.Stuffed;
    }
    else if (inputtedCrust ===  "GlutenFree") {
        return pizza.crust.GlutenFree;
    }
    else if (inputtedDel ===  "Yes") {
        return pizza.del.Yes;
    }
    else if (inputtedDel ===  "No") {
        return pizza.del.No;
    }





        
    // var inputtedfirst = parseInt($("input[name='name']):checked").val());
    // var inputtedsize = parseInt($("input[name='size']):checked").val());
    // var inputtedkind = parseInt($("input[name='kind']):checked").val());
    // var inputtedcrust = parseInt($("input[name='crust']):checked").val());
    // var inputtedtoppings = parseInt($("input[name='toppings'):checked").val());
    // var inputtednumbers = parseInt($("input[name='numbers'):checked").val());
    // var inputteddelivery = parseInt($("input[name='del'):checked").val());
    // var delivery = parse

    

    if(del ==='yes') {
        prompt("Please enter your location: ")
        alert("Your total will be increased by 200 due to delivery charges");
    }
    

};









