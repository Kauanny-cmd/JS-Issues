const booksCategory = [
    {
        category: 'Riqueza',
        books: [
            { title: 'Os segredos da mente milionária', author: 'T. Harv Eker', },
            { title: 'O homem mais rico da Babilônia', author: 'George S. Clason', },
            { title: 'Pai rico, pai pobre', author: 'Robert T. Kiyosaki e Sharon L. Lechter,', }
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [
            { title: 'Você é insubstituível', author: 'Augusto Cury', },
            { title: 'Ansiedade - Como enfrentar o mal do século', author: 'Augusto Cury', },
            { title: 'Os 7 hábitos das pessoas altamente eficazes', author: 'Stephen R. Covey', }
        ],
    },
];

//Letra A
for (const objBooks of booksCategory) {
    console.log(`A categoria ${objBooks.category} tem ${objBooks.books.length} livros`);
}
console.log(" ")

//Letra B
function contAuthor() {
    let arrayAuthor = [];
    for (const obj of booksCategory) {
        for (const book of obj.books) {
            if (arrayAuthor.indexOf(book.author) == -1) {
                arrayAuthor.push(book.author.split(','))
            }
        }
    }
    console.log(`A quantidade de autores é ${arrayAuthor.length}`)
}
contAuthor()
console.log(" ")

//Letra C
function author() {
    let booksCury = []
    for (const autCury of booksCategory) {
        for (const books of autCury.books) {
            if (books.author == 'Augusto Cury') {
                    booksCury.push(books.title)
            }
        }
    }
     console.log( `Os livros de Augusto Cury são: ${booksCury}` )
}
author()
console.log(" ")