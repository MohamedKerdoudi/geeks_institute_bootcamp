// ====== Daily Challenge 1

let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};


const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};


const cloneGroceries = () => {
    console.log("\n--- cloneGroceries START ---");
    const user = client;         
    console.log(`Before change client = "${client}", user = "${user}"`);
    client = "Betty";
    console.log(`After change  client = "${client}", user = "${user}"`);



    const shopping = groceries;        
    console.log("\nBefore any object change:");
    console.log("shopping.totalPrice :", shopping.totalPrice);
    console.log("shopping.other.paid :", shopping.other.paid);

 
    shopping.totalPrice = "35$";
    console.log("\nAfter changing shopping.totalPrice to 35$:");
    console.log("shopping.totalPrice :", shopping.totalPrice);
    console.log("groceries.totalPrice :", groceries.totalPrice);
   
    shopping.other.paid = false;
    console.log("\nAfter changing shopping.other.paid to false:");
    console.log("shopping.other.paid :", shopping.other.paid);
    console.log("groceries.other.paid :", groceries.other.paid);


    console.log("\n--- cloneGroceries END ---\n");
};


displayGroceries();   
cloneGroceries();     
