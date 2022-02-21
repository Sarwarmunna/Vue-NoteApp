import {createStore} from "vuex";
const store = createStore({
 state(){
     return{
         colors:["#D8E2DC","#FFE5D9","#FBFAF0","#FFE9EE","#FFDDE4","#fff"],
         notes:[],
         filterColor:"",
     }

 },
 getters:{
     Allcount(state){
     return state.notes.length;
     },
   NotebyColor(state){
       return state.colors.map((color)=>{
           return{
               color,
               notecount:state.notes.filter((note)=>note.color === color).length,
           }
       })
   },
   FilterNoteState(state){
       if(state.filterColor ==""){
           return state.notes;
       }
    return state.notes.filter((note)=>note.color === state.filterColor);
   },
 },
 mutations:{
     addnote(state,note){
        state.notes.unshift(note);
     },
     filternote(state,color){
         state.filterColor = color;
     },
     deleteNote(state,id){
        state.notes =state.notes.filter((note)=> note.id != id);
     }
    
 }
})
export default store;