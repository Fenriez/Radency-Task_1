function parseFormData(form) {
  let name_inp = form.querySelector("#new_note__name");
  let category_inp = form.querySelector("#new_note__category > option:checked");
  let text_inp = form.querySelector("#new_note__text");

  return {
    id: Date.now(),
    name: name_inp.value,
    category: category_inp.value,
    creationDate: dateFormatter(Date.now()),
    text: text_inp.value,
    isArchived: false,
    internalDates: findDates(text_inp.value),
  };
}

function findDates(str) {
  let rgxp =
    /((0?[1-9]|[1-2][0-9]|3[0-1])[\/\-\.](0?[1-9]|1[0-2])[\/\.\-](\d{4}))|((0?[1-9]|1[0-2])[\/\.\-](0?[1-9]|[1-2][0-9]|3[0-1])[\/\-\.](\d{4}))/g;
  //first asd ad sa 30.11.1989 das as d 11-30-2152
  
  return str.match(rgxp) ?? [];
}

function dateFormatter(date) {
  const options = new Object({
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return new Date(date).toLocaleDateString("en-US", options);
}

export default parseFormData;
