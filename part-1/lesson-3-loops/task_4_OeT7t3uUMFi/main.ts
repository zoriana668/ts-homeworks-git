// #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let i: number = 0;

while( i < 20) {
    document.write(`<h1>
                        This item has index - ${i}
                   </h1>`);
    i++;
}