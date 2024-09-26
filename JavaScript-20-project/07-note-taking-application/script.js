document.addEventListener("DOMContentLoaded", loadNotes);
const addNoteButton = document.getElementById("addNote");
const notesContainer = document.getElementById("notesContainer");

addNoteButton.addEventListener("click", function () {
  addNewNote();
});

function addNewNote(text = "", id = Date.now()) {
  const noteElement = document.createElement("div");
  noteElement.classList.add("note_taking__item");
  noteElement.setAttribute("data-id", id);
  noteElement.innerHTML = `
  <div class="note_taking__item__icons">
    <i id="save" class="fa-solid fa-floppy-disk save-note"></i>
    <i id="trash" class="fa-solid fa-trash delete-note"></i>
  </div>
  <textarea name="note" id="noteText" rows="20" cols="30">${text}</textarea>
`;
  noteElement
    .querySelector(".save-note")
    .addEventListener("click", function () {
      saveNoteLocalStorage(noteElement);
    });
  noteElement
    .querySelector(".delete-note")
    .addEventListener("click", function () {
      deleteNoteLocalStorage(noteElement);
      noteElement.remove();
    });
  notesContainer.appendChild("noteElement");
}

function saveNoteLocalStorage(noteElement) {
  const textarea = noteElement.querySelector("textarea");
  const noteId = noteElement.getAttribute("data-id");
  const noteContent = textarea.value;

  let notes = JSON.parse(localStorage.getItem("notes")) || {};
  const existingNotes = notes.find((note) => note.id === noteId);
  if (existingNote) {
    existingNote.content = noteContent;
  } else {
    notes.push({ id: noteId, content: noteContent });
  }
  localStorage.setItem("notes", JSON.stringify(notes));
}

function deleteNoteLocalStorage(noteElement) {
  const noteId = noteElement.getAttribute("data-id");
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes = notes.filter((note) => note.id != noteId);
  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  if () {
    
  }
}