<template>
       <div class="filter">
        <button @click="$store.commit('filternote','')">All ({{Allcount}})</button>
        <button v-for="color in NotebyColor" 
        :key="color.color" 
        :style="
        {
          backgroundColor:color.color
        }" 
        @click="$store.commit('filternote',color.color)"     >
        {{color.notecount}}</button>
       
      </div>
</template>
<script>
import { computed } from 'vue'
import {mapGetters} from 'vuex';
export default {
  
  computed:{
    ...mapGetters(['NotebyColor','Allcount'])
  }
}
</script>