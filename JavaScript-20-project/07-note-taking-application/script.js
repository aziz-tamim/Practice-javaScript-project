const addNoteButton = document.getElementById("addNote");
const noteWrapper = document.querySelector(".row");

window.addEventListener("DOMContentLoaded", loadNotes);

function createNoteElement(noteContent ="") {
    const noteDiv = document.createElement("div");
    const textArea = document.createElement("textarea");
    const iconWrapper = document.createElement("div");
    const saveIcon = document.createElement("i");
    const trashIcon = document.createElement("i");

    noteDiv.classList.add("note_taking__item");
    iconWrapper.classList.add("note_taking__item__icons");
    saveIcon.classList.add("fa-solid", "fa-floppy-disk");
    trashIcon.classList.add("fa-solid", "fa-trash");

    textArea.rows = 10;
    textArea.cols = 30;
    textArea.value = noteContent;

    iconWrapper.appendChild(saveIcon);
    iconWrapper.appendChild(trashIcon);
    noteDiv.appendChild(iconWrapper);
    noteDiv.appendChild(textArea);
    noteWrapper.appendChild(noteDiv);

    saveIcon.addEventListener("click", function () {
        saveNotes();
    });

    trashIcon.addEventListener("click", function () {
        noteDiv.remove();
        saveNotes();
    });
}

function saveNotes() {
    const allNotes = document.querySelectorAll("textarea");
    const notesArray = [];

    allNotes.forEach(note => {
        notesArray.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notesArray));
}

function loadNotes() {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));

    if (savedNotes) {
        savedNotes.forEach(noteContent => {
            createNoteElement(noteContent);
        });
    }
}

addNoteButton.addEventListener("click", function () {
    createNoteElement();
});
