let books = [
  {
    name: "Why we sleep",
    number: 123,
    amount: "NPR.700",
    category: "non-fiction, Neuroscience, Health, Psychology, Self Help",
    index: "non-fiction",
  },
  {
    name: "A man called Ove",
    number: 200,
    amount: "NPR.400",
    category: "Fiction, Contemporary, Humor, Adult, Novel",
    index: "non-fiction",
  },
  {
    name: "House of sky and Breath",
    number: 3,
    amount: "NPR. 500",
    category: "Fantasy, Romance, Adult, Fairies, Fiction",
    index: "non-fiction",
  },
  {
    name: "Wings of fire",
    number: 4,
    amount: "NPR. 600",
    category: "Biography, Non-Fiction, Inspirational, Science, History",
    index: "non-fiction",
  },
  {
    name: "Harry Potter and the Cursed Child: Part One and Two",
    number: 5,
    amount: "NPR. 900",
    category: " Fiction, Fantasy, Young Adult, Adventure, Childrens",
    index: "non-fiction",
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
