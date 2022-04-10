import { getNoteData } from "./NotesData.js";

export default function categoriesCountUpdate() {
  document.querySelectorAll(".category").forEach((elem) => {
    let category = elem.getAttribute("name");
    let notes_data = getNoteData();
    let category_total = notes_data.filter((elem) => elem.category == category);
    let category_archived = category_total.filter(
      (elem) => elem.isArchived == "true"
    );
    elem.querySelector(".category__cell:nth-child(3)").innerHTML = category_total.length;
    elem.querySelector(".category__cell:nth-child(4)").innerHTML = category_archived.length;
  });
}
