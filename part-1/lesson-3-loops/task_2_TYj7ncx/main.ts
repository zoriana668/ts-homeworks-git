// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for(let i: number = 0; i < 10; i++) {
    document.write(`<div>
                        <p>This item has index - ${i}</p>
                    </div>`)
}