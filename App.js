import { addNoteData, changeNoteData, getNoteData } from "./scripts/components/NotesData.js";
import parseFormData from "./scripts/components/ParseFormData.js";
import renderNote from "./scripts/components/UI/RenderNote.js";

window.addEventListener("load", function (event) {
  console.log("All resources finished loading!");

  let createNoteBtn = document.querySelector("#create_note");
  createNoteBtn.addEventListener("click", () => {
    document.querySelector("#note_form > .form_name").innerHTML = "New note";
    document.querySelector("#note_form__mdl").classList.toggle("active");
  });

  let modal_close = document.querySelector(
    "#note_form > .form__controls > .close"
  );
  modal_close.addEventListener("click", (event) => {
    event.stopPropagation(); //????
    this.document.querySelector("#note_form__mdl").classList.toggle("active");
  });

  let note_form = document.querySelector("#note_form");
  note_form.addEventListener("submit", (event) => {
    event.preventDefault();

    // @ts-ignore
    let id = event.target.getAttribute("data-id");
    let note_data;

    if (id) {
      note_data = parseFormData(
        event.target,
        // notes_data_array.find((elem) => elem.id == id)
        getNoteData(id)
      );
      changeNoteData(id, note_data);
      document.getElementById(note_data.id).replaceWith(renderNote(note_data));
    } else {
      note_data = parseFormData(event.target, {});
      // notes_data_array.push(note_data);
      addNoteData(note_data)
      document
        .querySelector(".notes > .container__body")
        .appendChild(renderNote(note_data));
    }
    event.target.setAttribute("data-id", "");

    document.querySelector("#note_form__mdl").classList.toggle("active");

    // @ts-ignore
    event.target.reset();
  });
  
});

