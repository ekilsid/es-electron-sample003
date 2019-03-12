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
  //const newState = Object.assign({}, state);

  switch (action.type) {
    default: {
      return state;
    }
  }
}

// #############
// action-creator
// #############
