const libraryBooks = ['1984', 'Sapiens', 'Moby Dick', 'War and Peace'];

function addBook(book) {
  libraryBooks.push(book);
}

function listBooks() {
  for(let i = 0; i < libraryBooks.length; i++) {
    console.log(libraryBooks[i]);
  }
}

function findBook(book) {
  const index = libraryBooks.indexOf(book);
  if (index !== -1) {
    console.log(`Found ${book} at index ${index}`);
  } else {
    console.log(`${book} not found.`);
  }
}

function removeBook(book) {
  const index = libraryBooks.indexOf(book);
  if (index !== -1) {
    libraryBooks.splice(index, 1);
    console.log(`${book} removed.`);
  } else {
    console.log(`${book} not found.`);
  }
}

// Kütüphanedeki kitapları listele
listBooks();

// Yeni bir kitap ekle
addBook('Harry Potter');
listBooks();

// Kitap ara
findBook('1984');
findBook('Unknown');

// Kitap sil
removeBook('Moby Dick');
listBooks();
