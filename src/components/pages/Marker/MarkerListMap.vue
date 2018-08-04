<template>
    <div class="app-marker-list-map content">
        <div class="buttons-tab">
            <a href="#tab1" class="tab-link active button">全部</a>
            <a href="#tab2" class="tab-link button">待付款</a>
        </div>
    </div>
  
</template>


<script>
import AppMarkerListMap from './MarkerListMap'

export default {
  name: 'app-marker-list-map',

}
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">
    .buttons-tab{
        height: 0.55rem;
        width: 100%;
    }
</style>