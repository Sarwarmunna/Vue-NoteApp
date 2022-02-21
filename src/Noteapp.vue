<template>
    <div class="app">
      <div class="header"><h1 class="app-title">Vue Notes</h1></div>
   <!-- Editor -->
   <Editor/>
   <!-- Filter -->
   <Filter/>
      <div class="notes">
      
       <!-- Note -->
          <Note v-for="note in FilterNoteState" :key="note.id" :note="note"/>
         
      </div>
    </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
import Editor from './components/Editor.vue';
import Filter from './components/Filter.vue';
import Note from './components/Note.vue';
export default {
    components:{
      Editor,
      Filter,
      Note,
    },
    computed:{
        ...mapGetters(["FilterNoteState"]),
    },
}
</script>