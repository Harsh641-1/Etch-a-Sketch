const container = document.querySelector('.container')

function createGrid(){
    for (let i = 0; i < 16; i++){
        const grid = document.createElement('div')
        grid.classList.add('grid')
        container.appendChild(grid)


        for (let i = 0; i < 16; i++){
            const item = document.createElement('div')
            item.classList.add('item')
            grid.appendChild(item)
    }

    }
}

createGrid()



