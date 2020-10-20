console.log("hello");
shownotes();
// if user add note add it to the local storage

let addbtn = document.getElementById("addBtn");
addbtn.addEventListener("click", function (e) {
  let addText = document.getElementById("addText");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  noteObj.push(addText.value);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  addText.value = "";
  console.log(noteObj);
  shownotes();
});

function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  let html = "";
  noteObj.forEach(function (element, index) {
    html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Note ${index + 1} </h5>
            <p class="card-text">
            ${element}
              
            </p>
            <button id='${index}' onClick=deleteNote(this.id) href="#" class="btn btn-primary">delete note</button>
          </div>
        </div>
        `;
  });
  let noteelm = document.getElementById("notes");
  if (noteObj.length != 0) {
    noteelm.innerHTML = html;
  } else {
    noteelm.innerHTML =
      "nothing to show use add a note section above to add notes";
  }
}

function deleteNote(index) {
  console.log("i am deleting", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  noteObj.splice(index, 1);

  localStorage.setItem("notes", JSON.stringify(noteObj));
  shownotes();
}

let search = document.getElementById("searchText");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  console.log("input event fired", inputVal);
  let noteCards = document.getElementsByClassName("noteCard");

  Array.from(noteCards).forEach(function (element) {
    let cardText = element.getElementsByTagName("p")[0].innerText;
    if (cardText.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

//
//

//
