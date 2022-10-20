document.addEventListener('DOMContentLoaded', () => {
   const grid = document.querySelector('.grid');
   const width = 8;
   const squares = [];

   function createBoard() {
    for ( let i = 0; i < 64; i++ ){
       const square = document.createElement('div');
       grid.appendChild(square);
       squares.push(square);
    }
  }
   createBoard();



})

    
