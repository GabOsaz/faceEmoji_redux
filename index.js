let updateFace = document.getElementById('showEmojis');

const myReducer = (state = "<&_&>", action) => {
    switch (action.type) {
        case 'Happy':
            return state = "¯\_(ツ)_/¯";
        case 'Sad':
            return state = "《〠_〠》";
        case 'Angry':
            return state = "(◡‿◡✿)";
        case 'Confused':
            return state = "(｡:hearts:‿:hearts:｡)";
        default:
            state;
    }
}  
const store = Redux.createStore(myReducer);

console.log(store.getState);

document.getElementById('happy').addEventListener('click', () => store.dispatch({type:'Happy'}));
document.getElementById('sad').addEventListener('click', () => store.dispatch({type:'Sad'}));
document.getElementById('angry').addEventListener('click', () => store.dispatch({type:'Angry'}));
document.getElementById('confused').addEventListener('click', () => store.dispatch({type:'Confused'}));

store.subscribe(() => updateFace.innerHTML = store.getState().toString());