//your JS code here. If required.
const form = document.querySelector(".formgroup");
const bookList = document.getElementById("book-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //using this we stopped page reload when we click the submit button

  // let get the values from the form
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const isbn = document.getElementById("isbn").value.trim();

  const row = document.createElement("tr");

  row.innerHTML = `<td>${title}</td>
                    <td>${author}</td>
                    <td>${isbn}</td>
                    <td><button id=${isbn}>X</button></td>`;
  bookList.appendChild(row);

  const del = document.getElementById(`${isbn}`);

  del.addEventListener("click", function () {
    row.remove();
  });

  form.reset();
});
