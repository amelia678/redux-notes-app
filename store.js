const {createStore} = require('redux');
const uuid = require('uuid/v4');

// ===========================================
// SETUP
// ===========================================
// #1 describe the state


    const defaultState = {
        notes : [
            {
                id: uuid(),
                content: ''
            }
        ]
        
    }


// #2 list out all the changes you could make to state

/*
-UPDATE CONTENT
-ADD_NOTE
-DELETE_NOTE
*/

const ACTION_UPDATE = {
    type: 'ACTION_UPDATE',
    content: '???????'
    // id: ???
};


const ACTION_ADD = {
    type: 'ACTION_ADD',
    // content: ????
}

const ACTION_DEL = {
    type: 'ACTION_DEL',
    // id: ??????
}

// #3 -write action creator functions
const updateNote = (id, content) => {
    return {
        ...ACTION_UPDATE,
        id,
        content
    }
}

const addNote = (content) => {
    return {
        ...ACTION_ADD,
        content
    }
}

const deleteNote = (id, content) => {
    return {
        ...ACTION_DEL,
        id 
        
    }
}

// #4 write a reducer function that accepts state and an action
// and returns the next version of the state

const note = (state=defaultState, action) => {
    switch(action.type) {
        case ACTION_UPDATE.type:
        // do somethin
            return {
                notes: state.notes.map(note => {
                    if (note.id === action.id) {
                        return {
                            ...note,
                            // alternative to spread operator
                            // id: note.id,
                            // content: note.content,

                            // immediately overwrite content with what
                            // came in through the action
                            content: action.content
                        }
                    } else {
                        // this is not the one
                        // return original


                        return {
                            ...note
                        };
                    }
                })
            
            }

        case ACTION_ADD.type:
        return {
            notes: [
                ...state.notes,
                {
                    id: uuid(),
                    content: action.content
                }
            ]
        }
        case ACTION_DEL.type:
            return {
                notes: state.notes.filter(note => {
                    return note.id !== action.id;
                })
            }
        default:
            return state;
    }

}
// #5 create a store that uses your reducer
const store = createStore(note);

// export store and action creators
module.exports= {
    store,
    updateNote,
    addNote,
    deleteNote
};

