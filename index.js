const container = document.querySelector('.container')


function createGrid(numberOfSquare = 16){
    for (let i = 0; i < numberOfSquare; i++){
        const grid = document.createElement('div')
        grid.classList.add('grid')
        container.appendChild(grid)


        for (let i = 0; i < numberOfSquare; i++){
            const item = document.createElement('div')
            item.classList.add('item')
            grid.appendChild(item)
    }

    }
    const items = document.querySelectorAll('.item')

    items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = "#ee6c4d"
    })
})


}

function resize() {
    removeGrid()
    let numberOfSquare = Number(prompt('Enter the number of squares per side: '))
   
    createGrid(numberOfSquare)
}

function removeGrid(){
    const items = document.querySelectorAll('.item')
    const grids = document.querySelectorAll('.grid')
    items.forEach((item) => {
        item.remove()
    })
    grids.forEach((grid) => {
        grid.remove()
    })
}

createGrid()

const button = document.querySelector('button')
button.addEventListener('click', resize)
