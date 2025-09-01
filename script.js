       
//  function order_button(){
//         var name = document.getElementById("order_name").innerHTML
//         var email = document.getElementById("order_email").innerHTML 
//         var number = document.getElementById("order_number").innerHTML

//         if(name === " " || email === " " || number === " "  ){
//             console.log("fill All destailes")
//         }
//         else{
//             document.getElementById("order_button").style.backgroundColor = "red";
//                 document.getElementById("order_button").textContent = "Ordered!"; 

//         }
//     }




 let isOrdered = false; 

    function order_button(event){
        event.preventDefault(); // Prevent the default form submission behavior
     
        // 1. Get references to the input elements using their new IDs
        const nameInput = document.getElementById("order_name");
        const emailInput = document.getElementById("order_email");
        const numberInput = document.getElementById("order_number");

        // 2. Get the values and trim any whitespace
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const number = numberInput.value.trim();

        const button = document.getElementById("order_button");

        // 3. Correct if condition: Check if ANY of the fields are empty
        if (name === "" || email === "" || number === "") {
            console.log("Please fill all details!"); // Log to console
            alert("Please fill all details!"); // Show a user-friendly alert
            // Optionally, highlight empty fields
            if (name === "") nameInput.style.borderColor = "red"; else nameInput.style.borderColor = "";
            if (email === "") emailInput.style.borderColor = "red"; else emailInput.style.borderColor = "";
            if (number === "") numberInput.style.borderColor = "red"; else numberInput.style.borderColor = "";
        } else {
            // All fields are filled, proceed with the order logic
            console.log("All details filled. Processing order.");
            // Reset border colors if they were red
            nameInput.style.borderColor = "";
            emailInput.style.borderColor = "";
            numberInput.style.borderColor = "";

            if (!isOrdered) {
                button.style.backgroundColor = "green";
                button.textContent = "Order Confirmed!";
                isOrdered = true; 
            } else {
                button.style.backgroundColor = "#007bff"; // Or your original blue
                button.textContent = "Book Now";
                isOrdered = false; 
            }
        }
    }
