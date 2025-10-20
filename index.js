const container = document.querySelector('.container')
colors = ['']


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

function getRandomElement(arr){
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

function changeToRgb(){
    const rgb = ['red', 'blue', 'green','red', 'blue', 'green','red', 'blue', 'green']

    const items = document.querySelectorAll('.item')
    items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
    item.style.backgroundColor = getRandomElement(rgb)
})
})

    
}

createGrid()

const button = document.querySelector('button')
button.addEventListener('click', resize)

const rbgbutton = document.querySelector('.rgb')
rbgbutton.addEventListener('click', changeToRgb)

const reset = document.querySelector('.reset-color')
reset.addEventListener('click', () => {
    const items = document.querySelectorAll('.item')
    items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
    item.style.backgroundColor = "#ee6c4d"
})
})
})