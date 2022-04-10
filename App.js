import categoriesCountUpdate from "./scripts/components/CategoriesCountUpdate.js";
import {
  addNoteData,
  changeNoteData,
  getNoteData
} from "./scripts/components/NotesData.js";
import parseFormData from "./scripts/components/ParseFormData.js";
import renderNote from "./scripts/components/UI/RenderNote.js";

window.addEventListener("load", function (event) {
  console.log("All resources finished loading!");
  
  let test_arr = getNoteData();

  document.querySelector("#create_note").addEventListener("click", () => {
    document.querySelector("#note_form > .form_name").innerHTML = "New note";
    document.querySelector("#note_form__mdl").classList.toggle("active");
  });

  document
    .querySelector("#note_form > .form__controls > .close")
    .addEventListener("click", (event) => {
      this.document.querySelector("#note_form__mdl").classList.toggle("active");
    });

  document.querySelector("#note_form").addEventListener("submit", (event) => {
    event.preventDefault();

    // @ts-ignore
    let id = event.target.getAttribute("data-id");
    let note_data;

    if (id) {
      note_data = parseFormData(event.target, getNoteData(id));
      changeNoteData(id, note_data);
      document.getElementById(note_data.id).replaceWith(renderNote(note_data));
    } else {
      note_data = parseFormData(event.target, {});
      addNoteData(note_data);
      document
        .querySelector(".notes > .container__body")
        .appendChild(renderNote(note_data));
    }
    console.log(note_data)
    categoriesCountUpdate();
    // @ts-ignore
    event.target.setAttribute("data-id", "");

    document.querySelector("#note_form__mdl").classList.toggle("active");

    // @ts-ignore
    event.target.reset();
  });

  this.document
    .querySelector("#archived_visibility")
    .addEventListener("click", (event) => {
      this.document
        .querySelectorAll(".note[data-archived='true']")
        .forEach((elem) => {
          elem.classList.toggle("hidden");
        });
    });

  this.document
    .querySelector("#delete_all")
    .addEventListener("click", (event) => {
      this.document.querySelectorAll(".note").forEach((elem) => {
        elem.remove();
      });
      categoriesCountUpdate();
    });

    for (const i of test_arr) {
      document
        .querySelector(".notes > .container__body")
        .appendChild(renderNote(i));
    }
});
