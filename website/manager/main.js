 // Initialize Parse
 Parse.initialize("g7vsZFUXboXcGOQ4Sp297VFRPbhvUGh5sBIkQNRL", "QiOp20OeCT5KYoiUKfKMQojFq7qMjc7uRD3lua8M"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
 Parse.serverURL = "https://parseapi.back4app.com/";

//POPULATE EMPLOYEES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
getUser()
async function getUser() {
    //Create your Parse Query, and define the class it will be searched
    const query = new Parse.Query("Person");
        try {
            // Executes the query, which returns an array of MyCustomClass
            const results = await query.find();
            showEmployee(JSON.parse(JSON.stringify(results))) ////
        } catch (error) {
            console.log(`Error: ${JSON.stringify(error)}`);
        }
}


//iterate through employees and print to webpage
 function showEmployee(data){
    let jobContainer= document.querySelector('.job-tile-container')
    let jobHTML= "";
    let fireOption = "";
   
    data.forEach(
        function (emp){
          
          if (emp.status == 'driver'){
            console.log(emp.objectId)
              if (emp.warnings > 5){
                  fireOption +=
                  `
                  <div class="job-tile">
                      <div class="job-tile-head">
                          <div class="logo"><img src="${'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/logo.png?v=1652760714822'}"/></div>
                      </div>
                      <div class="job-tile-title">Employee Name: ${emp.username}</div>
                      <div class="job-tile-desc">${emp.comments}</div>
                      <div>Rating: ${emp.warnings}</div>
                      <button class="message" onClick = "fireEmployee('${emp.objectId}')">Fire</button>
                  </div>
                  `
              }
              else{
                  jobHTML += 
                  `
                  <div class="job-tile">
                      <div class="job-tile-head">
                          <div class="logo"><img src="${'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/logo.png?v=1652760714822'}"/></div>
                      </div>
                      <div class="job-tile-title">Employee Name: ${emp.username}</div>
                      <div class="job-tile-desc">${emp.comments}</div>
                      <div class = "rating">Rating: ${emp.warnings}</div>
                  </div>
                  `
              }
          }
    });
 
    jobContainer.innerHTML = fireOption+jobHTML 
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// FIRE EMPLOYEE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
async function fireEmployee(ID) {
    //Retrieve your Parse Object
    const worker = new Parse.Object("Person");
    //set its objectId
    console.log(ID)
    worker.set('objectId',ID);
    try{
        //destroy the object
        let result = await worker.destroy();
        alert('Object deleted with objectId: ' + result.id);
    }catch(error){
        alert('Failed to delete object, with error code: ' + error.message);
    }
} 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

