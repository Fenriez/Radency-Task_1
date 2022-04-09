function renderNote(note_data) {
  let inner_content = [
    note_data.name,
    note_data.creationDate,
    note_data.category,
    note_data.text,
  ];

  let note = document.createElement("div");
  note.className = 'note'

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
    } else if (i > 0 && i < 5) {
      div.appendChild(document.createElement("p"));
      div.firstChild.innerHTML = inner_content[i-1];
    } else if (i == 5) {
      div.appendChild(document.createElement("p"));
      div.firstChild.innerHTML = note_data.internalDates.toString();
    } else {
      let delete_btn = document.createElement("button");
      let edit_btn = document.createElement("button");
      let archive_btn = document.createElement("button");

      delete_btn.className = edit_btn.className = archive_btn.className = 'iconic_button'

      delete_btn.innerHTML = '<i class="fa-solid fa-pencil"></i>'
      edit_btn.innerHTML = '<i class="fa-solid fa-box-archive"></i>'
      archive_btn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
      div.append(delete_btn, edit_btn, archive_btn)
    }

    note.appendChild(div);
  }

  document.querySelector('.notes > .container__body').appendChild(note);
}

export default renderNote;
