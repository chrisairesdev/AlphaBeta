//get values from user. We need to get Alpha and Beta values.
function getValues()
{
    //get use values from DOM
    let alphaValue = document.getElementById("alphaValue").value;
    let betaValue = document.getElementById("betaValue").value;

    //parse for numbers
    alphaValue = parseInt(alphaValue);
    betaValue = parseInt(betaValue);

    //check to make sure they are integers
    if (Number.isInteger(alphaValue) && Number.isInteger(betaValue)) {
    
    //call AlphaBeta
    let abArray = alphaBeta(alphaValue, betaValue);
    //call displayData and write the values to the screen.
    displayData(abArray);
    }else{
        alert("You must enter an integer.")
    }
}

//Do alphaBeta
function alphaBeta(alphaValue, betaValue)
{
      //initialize returnArray
      let returnArray = [];
      //loop from 1 to 100
        for (let i = 1; i <= 100; i++) {
            //1 check to see if visable by both (3 and 5)
            //2 check to see if divisible by alpha value(3)
            //3 check to see if dividible by beta(5)
            if(i % alphaValue == 0 && i % betaValue == 0){
                returnArray.push('AlphaBeta');
            } else if (i % alphaValue == 0) {
                returnArray.push('Alpha');
            } else if (i % betaValue == 0) {
                returnArray.push('Beta');
            } else {
                returnArray.push(i);
            }
        }
     return returnArray;
}

//loop over array and create a table row for each itme.
function displayData(abArray) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("abTemplate")

    //clear table first
    tableBody.innerHTML = "";

    for (let index = 0; index < abArray.length; index+=5) {
        let tableRow = document. importNode(templateRow.content, true);

        //grab use the td and put into array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(abArray[index]);
        rowCols[0].textContent = abArray[index];

        rowCols[1].classList.add(abArray[index+1]);
        rowCols[1].textContent = abArray[index+1];
        
        rowCols[2].classList.add(abArray[index+2]);
        rowCols[2].textContent = abArray[index+2];
        
        rowCols[3].classList.add(abArray[index+3]);
        rowCols[3].textContent = abArray[index+3];
        
        rowCols[4].classList.add(abArray[index+4]);
        rowCols[4].textContent = abArray[index+4];


        tableBody.appendChild(tableRow);
    }   


    //add all rows to table


}