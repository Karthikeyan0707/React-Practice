const initialState = [
  { isbn: "12311", author: "hdgdhsgh", title: "the amazing book" },
  { isbn: "12322", author: "sahdhadg", title: "the amazing book1" },
];
const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default operationsReducer;
