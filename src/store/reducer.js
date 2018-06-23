import * as actionTypes from './action';

const initialState = {
    persons: []
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
      case actionTypes.ADD_PERSON:
          const newPerson = {
              id: Math.random(),
              name: action.personData.name,
              age: action.personData.age
          }
          return {
              ...state,
              persons: state.persons.concat(newPerson)
          }
      case actionTypes.REMOVE_PERSON:
          console.log(state.persons)
          return {
              ...state,
              persons: state.persons.filter(person => person.id !== action.personId)
          }
  }
  return state;
};

export default reducer;