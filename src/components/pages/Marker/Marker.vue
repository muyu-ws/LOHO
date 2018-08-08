
<template>
    <div class="app-marker">
        <app-marker-header></app-marker-header>
        <app-marker-list-map></app-marker-list-map>
        <app-marker-main></app-marker-main>
    </div>
</template>


<script>
import AppMarkerHeader from './MarkerHeader'
import AppMarkerListMap from './MarkerListMap'
import AppMarkerMain from './MarkerMain'



export default {
  name: 'AppMarker',
  components:{
      AppMarkerHeader,
      AppMarkerListMap,
      AppMarkerMain
  },

}
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">
    .app-marker{
        margin-top:0.55rem; 
    }
</style>