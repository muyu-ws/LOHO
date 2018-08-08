<template>
    <div class="ui-input">
        <input :type="type||'text'" :value="value" @input= "$emit('input',$event.target.value)" :placeholder='placeholder'/>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'ui-input',

    props:['value','type','placeholder']
}
</script>

<style lang="scss" scoped>
  .ui-input{
      width: 100%;
      height:0.5rem;
      padding: 0.15rem;
      border-bottom: 1px dashed  rgb(129, 127, 127);
      position: relative;

      input{
          display: block;
          width:100%;
          height:100%;
          border: none;
          outline: none;
          background: none;
          font-size: 0.16rem;

      }


  }
</style>
