

//Function to change grid size
function changeGridSizeBtn() {
    let gridAnswer = prompt("Please Enter A Number Between 2 And 100.");

    if (gridAnswer >= 2 && gridAnswer <= 100) {
        alert("Let's Draw!");
    } else if (gridAnswer === null || gridAnswer == NaN) {
        return;
    } else {
        alert("Number must be between 2 and 100!");
        changeGridSizeBtn();
    }

    let size = gridAnswer;
    gridSize(size);

    //Function to create grid of divs
    function gridSize(size) {
        let etchContainer = document.getElementById("etch-container");
        etchContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        etchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

        for (i = 0; i < `${size}` * `${size}`; i++) {
            let squares = document.createElement("div");
            squares.addEventListener("mouseover", function () {
                squares.style.backgroundColor = "pink";
            });
            etchContainer.appendChild(squares).className = "little-squares";
           
            
        let reset = document.getElementById('reset');
        reset.addEventListener('click', resetBoard =>{
            squares.style.backgroundColor = 'black';
        });
        
            
            /*etchContainer.insertAdjacentElement("beforeend", squares); <-------Youtube tutorial, but why 
            can't I just use appendChild() like above?*/
        
        }
    }
    //gridSize(16);

}











/*
PSUEDO-CODE:

- Add button at top - ***DONE
    - when clicked issues a prompt to user to input number for square grid. -***DONE
        - cannot exceed 100 - ***DONE
        - must be greater than 2 - ***DONE


- Set size of div to 500px x 500px - ***DONE


- Function that creates rows *****DONE <-----gridSize does this for both.
- Function that creates columns

- Function that runs the making of rows and columns based on users input.
    - entered in a prompt box
    - function takes value and use template literal to add it to argument for this main function


- Add "mouseover" event on "etch-container" 
    - This runs a function that changed the style.backgroundcolor of each grid square ****DONE

- Create another "reset.css" - ***DONE
    - This is will be nested in another function 
    - This function will be attached to a reset button.



*/