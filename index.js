const {
    store,
    updateContent
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


store.dispatch(updateContent('buy some milk'));
store.dispatch(updateContent('feed the cat'));
store.dispatch(updateContent('eat my feelings'));
store.dispatch(updateContent('rule the interwebs'));
store.dispatch(updateContent('join a cult'));
store.dispatch(updateContent('buy la croix'));
