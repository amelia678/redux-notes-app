const {createStore} = require('redux');
// ===========================================
// SETUP
// ===========================================
// #1 describe the state


    const defaultState = {
    note: {
        content: ''
        }
    }



// #2 list out all the changes you could make to state

/*
-UPDATE CONTENT
*/

const ACTION_UPDATE = {
    type: 'ACTION_UPDATE',
    content: '???????'
}


// #3 -write action creator functions
const updateContent = (content) => {
    return {
        ...ACTION_UPDATE,
        content
    }
}

// #4 write a reducer function that accepts state and an action
// and returns the next version of the state

const note = (state=defaultState, action) => {
    switch(action.type) {
        case ACTION_UPDATE.type:
        // do somethin
            return {
                note: {
                    content: action.content
                }
            }
        default:
            return state;
    }

}
// #5 create a store that uses your reducer
const store = createStore(note);

module.exports= store;

