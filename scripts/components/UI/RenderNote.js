import { changeNoteDataAttr, removeNoteData } from "../NotesData.js";

function renderNote(note_data) {
  let inner_content = [
    note_data.name,
    note_data.creationDate,
    note_data.category,
    note_data.text,
  ];

  let note = document.createElement("div");
  note.className = "note";
  //   note.setAttribute("data-id", note_data.id);
  note.id = note_data.id;

  for (let i = 0; i < 7; i++) {
    let div = document.createElement("div");
    div.className = "note__cell";
    if (i == 0) {
      switch (note_data.category) {
        case "Task":
          div.innerHTML =
            '<i class="fa-solid fa-circle-exclamation fa-xl"></i>';
          break;
        case "Idea":
          div.innerHTML = '<i class="fa-solid fa-lightbulb fa-xl"></i>';
          break;
        case "Random_Thought":
          div.innerHTML = '<i class="fa-solid fa-poo fa-xl"></i>';
          break;

        default:
          break;
      }
    } else if (i == 1) {
      div.classList.add("font_color__black");
      div.appendChild(document.createElement("p"));
      // @ts-ignore
      div.firstChild.innerHTML = inner_content[i - 1];
    } else if (i > 0 && i < 5) {
      div.appendChild(document.createElement("p"));
      // @ts-ignore
      div.firstChild.innerHTML = inner_content[i - 1];
    } else if (i == 5) {
      div.appendChild(document.createElement("p"));
      // @ts-ignore
      div.firstChild.innerHTML = note_data.internalDates.toString();
    } else {
      let delete_btn = document.createElement("button");
      let edit_btn = document.createElement("button");
      let archive_btn = document.createElement("button");

      delete_btn.className =
        edit_btn.className =
        archive_btn.className =
          "iconic_button";

      edit_btn.innerHTML = '<i class="fa-solid fa-pencil"></i>';
      archive_btn.innerHTML = '<i class="fa-solid fa-box-archive"></i>';
      delete_btn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

      edit_btn.addEventListener("click", (event) => {
        // event.stopPropagation();
        console.log(
          // @ts-ignore
          event.target.parentNode.parentNode.parentNode.getAttribute("id")
        );
        document
          .querySelector("#note_form")
          .setAttribute(
            "data-id",
            event.target.parentNode.parentNode.parentNode.getAttribute("id")
          );
        document.querySelector("#note_form > .form_name").innerHTML =
          "Edit note";
        document.querySelector("#note_form__name_input").value = note_data.name;
        document.querySelector("#note_form__text_input").value = note_data.text;
        document.querySelector("#note_form__category_select").value =
          note_data.category;

        document.querySelector("#note_form__mdl").classList.toggle("active");
      });

      archive_btn.addEventListener("click", (event) => {
        changeNoteDataAttr("isArchieved", true);
      });

      delete_btn.addEventListener("click", (event) => {
        let current_note = event.target.parentNode.parentNode.parentNode;
        removeNoteData(current_note.getAttribute("id"));
        current_note.remove();
      });

      div.append(edit_btn, archive_btn, delete_btn);
    }

    note.appendChild(div);
  }
  return note;
}

export default renderNote;
