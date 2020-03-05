console.log("testing");

//Business Logic
function Food(kind, crust, toppings, numbers, delivery) {
    this.size = size;
    this.crusts = crust;
    this.toppings = toppings;
    this.kind = kind;
    this.delivery = delivery;
    this.numbers = numbers;
}
Food.prototype.combineProperties = function () {
    return "You have ordered " + this.numbers + " " + this.kind + " pizza(s)."
}
//User Interface
pizza = {
    kind: {
        bbqchicken: "bbbchicken", hawaiian: "hawaiian", vegetarian:"vegetarian", bacon: "bacon", glutenFree: "glutenFree"
    },
    crust: {
        "crispy": 100,
        "stuffed": 100,
        "glutenFree": 100

    },
    del: {
        "yes": 200,
        "no": 0,
    },
    toppings: {
        "cheese": 50,
        "sauce": 50,
        "olives": 50,
        "bay": 50,
    }
};


function type() {
    var inputtedSize = document.getElementById("size").value;
    var inputtedKind = document.getElementById("type").value;

    if (inputtedKind === "bbqchicken" && inputtedSize === "small") {
        return pizza.kind.bbqchicken;
    } else if (inputtedKind === "bbqchicken" && inputtedSize === "medium") {
        return pizza.kind.bbqchicken;
    } else if (inputtedKind === "bbqchicken" && inputtedSize === "large") {
        return pizza.kind.bbqchicken;
        // var inputtedKind = document.getElementById("kind").value();
        // var quantity = parseInt(document.getElementById("no").value());
    } else if (inputtedKind === "hawaiian" && inputtedSize === "small") {
        return pizza.kind.hawaiian;
    }
    else if (inputtedKind === "hawaiian" && inputtedSize === "medium") {
        return pizza.kind.hawaiian;
    } else if (inputtedKind === "hawaiian" && inputtedSize === "large") {
        return pizza.kind.hawaiian;
    }
    else if (inputtedKind === "vegetarian" && inputtedSize === "small") {
        return pizza.kind.vegetarian;
    }
    else if (inputtedKind === "vegetarian" && inputtedSize === "medium") {
        return pizza.kind.vegetarian;
    } else if (inputtedKind === "vegetarian" && inputtedSize === "large") {
        return pizza.kind.vegetarian;
    }
    else if (inputtedKind === "bacon" && inputtedSize === "small") {
        return pizza.kind.bacon;
    }
    else if (inputtedKind === "bacon" && inputtedSize === "medium") {
        return pizza.kind.bacon;
    } else if (inputtedKind === "bacon" && inputtedSize === "large") {
        return pizza.kind.bacon;
    }
    else if (inputtedKind === "glutenFree" && inputtedSize === "small") {
        return pizza.kind.glutenFree;
    }
    else if (inputtedKind === "glutenFree" && inputtedSize === "medium") {
        return pizza.kind.glutenFree;
    } else if (inputtedKind === "glutenFree" && inputtedSize === "large") {
        return pizza.kind.glutenFree;
    }
}
function crust() {
    var inputtedCrust = parseInt(document.getElementById("crust").value);
    if (inputtedCrust === "crispy") {
        return pizza.crust.crispy;
    }
    else if (inputtedCrust === "stuffed") {
        return pizza.crust.stuffed;
    }
    else if (inputtedCrust === "glutenFree") {
        return pizza.crust.glutenFree;
    }
};
function toppings() {
    var inputtedToppings = parseInt(document.getElementById("toppings").value);
    if (inputtedToppings === "cheese") {
        return pizza.toppings.cheese;
    }
    else if (inputtedToppings === "sauce") {
        return pizza.toppings.sauce;
    }
    else if (inputtedToppings === "olives") {
        return pizza.toppings.olives;
    }
    else if (inputtedToppings === "bay") {
        return pizza.toppings.bay;
    }
};
function del() {
    var inputtedDel = document.getElementById("del").value;
    if (inputtedDel === "yes") {
        return pizza.del.yes;
    }
    else if (inputtedDel === "no") {
        return pizza.del.no;
    }
}

// var inputtedfirst = parseInt($("input[name='name']):checked").val());
// var inputtedsize = parseInt($("input[name='size']):checked").val());
// var inputtedkind = parseInt($("input[name='kind']):checked").val());
// var inputtedcrust = parseInt($("input[name='crust']):checked").val());
// var inputtedtoppings = parseInt($("input[name='toppings'):checked").val());
// var inputtednumbers = parseInt($("input[name='numbers'):checked").val());
// var inputteddelivery = parseInt($("input[name='del'):checked").val());
// var delivery = parse

console.log("random");
// let myOrder = new Food(type(), size(), crust(), toppings(), numbers(), delivery());

$().ready(function () {
    $("button#submit").click(function () {
        var quantity = parseInt($("#number").val());
        var myOrder = new Food(type(), crust(), toppings(), quantity, del());
        alert(myOrder.combineProperties());
    })
})
