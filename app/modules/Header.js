import { remote } from 'electron';

// #############
//  action type
// #############

const initialState = {
  tab: 'tab1'
};

// #############
// reducer
// #############
export default function reducer(state = initialState, action) {
  console.log('[Header#reducer] action.type -> ' + action.type);
  const newState = Object.assign({}, state);
  console.dir(newState);

  switch (action.type) {
    default: {
      return state;
    }
  }
}

// #############
// action-creator
// #############
