<template>
      <div class="note" :style="{
        backgroundColor:note.color
        }">
          <div>
            <h3 class="title">{{note.title}}</h3>
            <p>{{note.desc}}</p>
          </div>
          <p class="time">{{Time}}</p>
          <div class="buttons"><button  @click="remove" class="delete">×</button></div>
        </div>
</template>
<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { computed } from 'vue';
export default {
  props:["note"],
  computed:{
  Time(){
    return dayjs(this.note.created_at).fromNow();
  }
  
},
methods: {
  remove(){
    this.$store.commit("deleteNote",this.note.id);
  }
},
}

</script>