let books = [
  {
    name: "Why we sleep",
    number: 1,
    amount: "NPR.700",
    category: "non-fiction, Neuroscience, Health, Psychology, Self Help",
  },
  {
    name: "A man called Ove",
    number: 2,
    amount: "NPR.400",
    category: "Fiction, Contemporary, Humor, Adult, Novel",
  },
  {
    name: "House of sky and death",
    number: 3,
    amount: "NPR. 500",
    category: "Fantasy, Romance, Adult, Fairies, Fiction",
  },
  {
    name: "Wings of fire",
    number: 4,
    amount: "NPR. 600",
    category: "Biography, Non-Fiction, Inspirational, Science, History",
  },
  {
    name: "Harry Potter and the Cursed Child: Part One and Two",
    number: 5,
    amount: "NPR. 900",
    category: " Fiction, Fantasy, Young Adult, Adventure, Childrens",
  },
];
export function getBooks() {
  return books;
}

export function getBook(number) {
  return books.find((book) => book.number === number);
}
export function deleteBook(number) {
  books = books.filter((book) => book.number !== number);
}
