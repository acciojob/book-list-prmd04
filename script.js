  const form = document.getElementById('book-form');
    const bookList = document.getElementById('book-list');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const isbn = document.getElementById('isbn').value;

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button id="${isbn}" class="btn btn-danger btn-sm">X</button></td>
      `;

      bookList.appendChild(row);

      const delButton = document.getElementById(`${isbn}`);
      delButton.addEventListener('click', function () {
        row.remove();
      });

      form.reset();
    });