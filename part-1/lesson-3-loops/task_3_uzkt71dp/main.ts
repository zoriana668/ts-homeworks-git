// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i:number  = 0;

while (i < 20) {
    document.write(`<h1>
                        This is testing of the while loop #${i+1}
                   </h1>`);
                    i++;
}