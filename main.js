const makeNote = document.querySelector('#makeNote');
const Notes = document.querySelector('#notess');
Notes.className = "notes";
const note = document.getElementsByClassName("note");

function showNotes() {
    Notes.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", Notes.innerHTML);
}

makeNote.addEventListener("click", () => {
    console.log("makeNote is clicked")
    let note = document.createElement("div");
    note.className = "note"
    let p = document.createElement("p");
    p.setAttribute("contenteditable", "true");
    let img = document.createElement("img");
    img.src = "imgs/delete.png";
    img.className = "delete";
    Notes.appendChild(note).appendChild(p).appendChild(img);
}   
)

Notes.addEventListener("click", (e) => {
    console.log("delete is clicked")
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        note = document.getElementsByClassName("note");
        note.forEach(element => {
            element.onkeyup = () => {
               updateStorage();
            }
            
        });
    }
}
)


