let notes_data_array = [];

const removeNoteData = (note_id) => {
  console.log(notes_data_array);
  notes_data_array.splice(
    notes_data_array.indexOf(
      notes_data_array.find((elem) => elem.id == note_id)
    ),
    1
  );
  console.log(notes_data_array);
};

const changeNoteDataAttr = (note_id, attr_name, new_value) => {
  let note = notes_data_array.find((elem) => elem.id == note_id);

  note[attr_name] = new_value;
};

const addNoteData = (data) => {
  notes_data_array.push(data);
};

const changeNoteData = (note_id, replacement_data) => {
  removeNoteData(note_id);
  addNoteData(replacement_data);
};

const getNoteData = (note_id) => {
  if (note_id) {
    return notes_data_array.find((elem) => elem.id == note_id);
  } else {
    return notes_data_array;
  }
};

export {
    removeNoteData,
    getNoteData,
    changeNoteData,
    addNoteData,
    changeNoteDataAttr,
};

