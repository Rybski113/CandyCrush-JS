document.addEventListener('DOMContentLoaded', () => {
   const grid = document.querySelector('.grid');
   const scoreDisplay = document.getElementById('score');
   const width = 8;
   const squares = [];
   let score = 0;

   const candyColors = [
      'red',
      'yellow',
      'orange',
      'purple',
      'green',
      'blue'
   ];

   function createBoard() {
    for ( let i = 0; i < width * width; i++ ){
       const square = document.createElement('div');
       square.setAttribute('draggable', true);
       square.setAttribute('id', i);
       let randomColor = Math.floor(Math.random() * candyColors.length);
       square.style.backgroundColor = candyColors[randomColor];
       grid.appendChild(square);
       squares.push(square);
    }
  }
   createBoard();

   let colorBeingDragged;
   let colorBeingReplaced;
   let squareIdBeingDragged;
   let squareIdBeingReplaced;


   squares.forEach(square => square.addEventListener('dragstart', dragStart));
   squares.forEach(square => square.addEventListener('dragend', dragEnd));
   squares.forEach(square => square.addEventListener('dragover', dragOver));
   squares.forEach(square => square.addEventListener('dragenter', dragEnter));
   squares.forEach(square => square.addEventListener('drageleave', dragLeave));
   squares.forEach(square => square.addEventListener('drop', dragDrop));


   function dragStart() {
    colorBeingDragged = this.style.backgroundColor;
    squareIdBeingDragged = parseInt(this.id);
     console.log(colorBeingDragged);
     console.log(this.id, 'dragstart')
   }
   function dragEnd() {
    console.log(this.id, 'dragend')
    // valid move
    let validMoves = [
        squareIdBeingDragged - 1,
        squareIdBeingDragged - width,
        squareIdBeingDragged + 1,
        squareIdBeingDragged + width
        ];
    let validMove = validMoves.includes(squareIdBeingReplaced);    

    if(squareIdBeingReplaced && validMove) {
        squareIdBeingReplaced = null;
    } else if (squareIdBeingReplaced && !validMove) {
        squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced;
        squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged;
    } else  squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged;
   }
   // drop candies ance some have been cleared

   function moveDown() {
       for (i = 0; i < 55; i++) {
        if(squares[i + width].style.backgroundColor === '') {
            squares[i + width].style.backgroundColor = squares[i].style.backgroundColor;
            squares[i].style.backgroundColor = '';
            const firstRow = [1, 2, 3, 4, 5, 6, 7]
            const isFirstRow = firstRow.includes(i)
            if (isFirstRow && squares[i].style.backgroundColor === '') {
                let randomColor = Math.floor(Math.random() * candyColors.length);
                squares[i].style.backgroundColor = candyColors[randomColor];
            }
        }
       }
   }



    //Checking for matches 
    //check for row of Three
    function checkRowForThree() {
        for (i = 0; i < 61; i++) {
            let rowOfThree = [i, i+1, i+2];
            let decidedColor = squares[i].style.backgroundColor;
            const isBlank = squares[i].style.backgroundColor === '';

            if(rowOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
                     score += 3;
                     scoreDisplay.innerHTML = score;
                     rowOfThree.forEach(index => {
                     squares[index].style.backgroundColor = '';
                })
            }
        }
    }

    //check for column of three
    function checkColumnForThree() {
        for (i = 0; i < 47; i++) {
            let columnOfThree = [i, i+width, i+width *2];
            let decidedColor = squares[i].style.backgroundColor;
            const isBlank = squares[i].style.backgroundColor === '';

            if(columnOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
                     score += 3;
                     scoreDisplay.innerHTML = score;
                     columnOfThree.forEach(index => {
                     squares[index].style.backgroundColor = '';
                })
            }
        }
    }

    // check row and column of four

    function checkRowForFour() {
        for (i = 0; i < 61; i++) {
            let rowOfFour = [i, i+1, i+2,i+3];
            let decidedColor = squares[i].style.backgroundColor;
            const isBlank = squares[i].style.backgroundColor === '';

            if(rowOfFour.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
                     score += 4
                     scoreDisplay.innerHTML = score;
                     rowOfFour.forEach(index => {
                     squares[index].style.backgroundColor = '';
                })
            }
        }
    }

    
    function checkColumnForFour() {
        for (i = 0; i < 47; i++) {
            let columnOfFour = [i, i+width, i+width * 2, i+width * 3];
            let decidedColor = squares[i].style.backgroundColor;
            const isBlank = squares[i].style.backgroundColor === '';

            if(columnOfFour.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
                     score += 4;
                     scoreDisplay.innerHTML = score;
                     columnOfFour.forEach(index => {
                     squares[index].style.backgroundColor = '';
                })
            }
        }
    }
  

    window.setInterval(function(){
        moveDown()
        checkRowForFour()
        checkColumnForFour()
        checkRowForThree()
        checkColumnForThree()
    }, 100)



   function dragOver(e) {
    e.preventDefault()
    console.log(this.id, 'dragover')
   }
   function dragEnter() {
    e.preventDefault()
    console.log(this.id, 'dragenter')
   }
   function dragLeave() {
    console.log(this.id, 'dragleave')
   }
   function dragDrop() {
    console.log(this.id, 'dragdrop')
    colorBeingReplaced = this.style.backgroundColor;
    squareIdBeingReplaced = parseInt(this.id);
    this.style.backgroundColor = colorBeingDragged;
    squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced
   }
 

})