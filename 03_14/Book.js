/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

const Book = class {
  constructor(
    // Book Object Parameters
    id,
    title,
    author,
    pages,
    description,
    image,
    color,
    cover
  ) {
    // Book Object Properties
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description;
    this.image = image;
    this.color = color;
    this.cover = cover;
  }

  updateTitle(updateBookTitle) {
    this.title = updateBookTitle;
  }
  updateAuthor(updateBookAuthor) {
    this.title = updateBookAuthor;
  }
  updatePages(updateBookPages) {
    this.pages = updateBookPages;
  }
  updateDescription(updateBookDescription) {
    this.description = updateBookDescription;
  }
  updateImage(updateBookImage) {
    this.image = updateBookImage;
  }
  updateColor(updateBookColor) {
    this.color = updateBookColor;
  }
  updateCover(updateBookCover) {
    this.cover = updateBookCover;
  }
};

export default Book;
