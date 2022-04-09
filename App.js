import parseFormData from "./scripts/components/ParseFormData.js";
import renderNote from "./scripts/components/UI/RenderNote.js";

window.addEventListener("load", function (event) {
  console.log("All resources finished loading!");
  let createNoteBtn = this.document.querySelector("#create_note");
  createNoteBtn.addEventListener("click", () => {
    event.stopPropagation();
    this.document.querySelector("#new_note__mdl").classList.toggle('active');

  });

  let create_note__modal_close = this.document.querySelector("#new_note > .form__controls > .close");
  create_note__modal_close.addEventListener("click", (event) => {
    event.stopPropagation();
    this.document.querySelector("#new_note__mdl").classList.toggle('active');
  });

  let new_note__form = this.document.querySelector("#new_note");
  new_note__form.addEventListener("submit", (event) => {
    event.preventDefault();

    let form = this.document.querySelector('#new_note');
    let note_data = parseFormData(form)

    renderNote(note_data);
    this.document.querySelector("#new_note__mdl").classList.toggle('active');

    event.target.reset();
  });
});
