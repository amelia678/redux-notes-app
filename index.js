const {
    store,
    updateNote,
    addNote,
    deleteNote
 } = require('./store');

// ===========================================
// APP
// ===========================================

// set up subscription for notifications of when there's
// a change


store.subscribe(() => {
    console.log('-------------');
    console.log(store.getState());
    console.log('--------------')
})


store.dispatch(addNote('buy some milk'));
store.dispatch(addNote('feed the cat'));
store.dispatch(addNote('eat my feelings'));
store.dispatch(addNote('rule the interwebs'));
store.dispatch(addNote('join a cult'));
store.dispatch(addNote('buy la croix'));

