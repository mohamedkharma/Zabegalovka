 // Initialize Parse
 Parse.initialize("g7vsZFUXboXcGOQ4Sp297VFRPbhvUGh5sBIkQNRL", "QiOp20OeCT5KYoiUKfKMQojFq7qMjc7uRD3lua8M"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
 Parse.serverURL = "https://parseapi.back4app.com/";

// CREATE A NEW EMPLOYEEE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
async function createParseUser() {
  // Creates a new Parse "User" object, which is created by default in your Parse app

  let user = new Parse.Object("Person");
  // Set the input values to the new "User" object
  user.set("status","driver");
  user.set("username", document.getElementById("username").value);
  user.set("password", document.getElementById("password").value);
  try {
    // Call the save method, which returns the saved object if successful
    user = await user.save();
    if (user !== null) {
      // Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
      alert(
        `New object created with success! ObjectId: ${
          user.id
        }, ${user.get("username")}`
      );
      window.location.href = "index.html";
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

document.getElementById("createButton").addEventListener("click", async function () {
   createParseUser()});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~