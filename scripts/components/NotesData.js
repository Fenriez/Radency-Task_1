let notes_data_array = [{
  "id": 1649599177239,
  "name": "Note #1",
  "category": "Task",
  "creationDate": "Apr 10, 2022",
  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae finibus erat, eget fermentum sapien. Etiam euismod est in tortor consequat vehicula. Curabitur hendrerit dui nec ultrices vestibulum. Aliquam iaculis, eros in sodales ullamcorper, nunc dolor pretium eros, eu vestibulum turpis augue ac turpis. Vivamus ac orci mauris. Ut hendrerit est a erat tempus facilisis. Sed dui sem, porttitor eget ante sed, mattis dictum magna. Suspendisse elementum consequat erat at efficitur. Nullam vel malesuada ipsum. Nullam tristique, velit quis semper commodo, elit ligula feugiat lorem, eu viverra purus erat ut eros. Duis ullamcorper mauris risus, id commodo nisi sagittis tristique. Sed finibus sapien eu sem eleifend, ac pellentesque lorem porttitor.",
  "isArchived": "false",
  "internalDates": []
},
{
  "id": 1649599195144,
  "name": "Note #2",
  "category": "Idea",
  "creationDate": "Apr 10, 2022",
  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae finibus erat, eget fermentum sapien. Etiam euismod est in tortor consequat vehicula. Curabitur hendrerit dui nec ultrices vestibulum. Aliquam iaculis, eros in sodales ullamcorper, nunc dolor pretium eros, eu vestibulum turpis augue ac turpis. Vivamus ac orci mauris. Ut hendrerit est a erat tempus facilisis. Sed dui sem, porttitor eget ante sed, mattis dictum magna. Suspendisse elementum consequat erat at efficitur. Nullam vel malesuada ipsum. Nullam tristique, velit quis semper commodo, elit ligula feugiat lorem, eu viverra purus erat ut eros. Duis ullamcorper mauris risus, id commodo nisi sagittis tristique. Sed finibus sapien eu sem eleifend, ac pellentesque lorem porttitor.",
  "isArchived": "false",
  "internalDates": []
},
{
  "id": 1649599256116,
  "name": "Note #3",
  "category": "Random Thought",
  "creationDate": "Apr 10, 2022",
  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae finibus erat, eget fermentum sapien. Etiam euismod est in tortor consequat vehicula. Curabitur hendrerit dui nec ultrices vestibulum. Aliquam iaculis, eros in sodales ullamcorper, nunc dolor pretium eros, eu vestibulum turpis augue ac turpis. Vivamus ac orci mauris. Ut hendrerit est a erat tempus facilisis. Sed dui sem, porttitor eget ante sed, mattis dictum magna. Suspendisse elementum consequat erat at efficitur. Nullam vel malesuada ipsum. Nullam tristique, velit quis semper commodo, 22.09.2004 elit ligula feugiat lorem, eu viverra purus erat ut eros. Duis ullamcorper mauris risus, id 11/08/1996 commodo nisi sagittis tristique. Sed finibus sapien eu sem eleifend, ac pellentesque lorem porttitor.",
  "isArchived": "false",
  "internalDates": [
      "22.09.2004",
      "11/08/1996"
  ]
}];

const removeNoteData = (note_id) => {
  notes_data_array.splice(
    notes_data_array.indexOf(
      notes_data_array.find((elem) => elem.id == note_id)
    ),
    1
  );
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

