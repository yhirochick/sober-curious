<template>
  <div>
    <p>Hello, World</p>
    <Counter/>
  </div>
</template>

<script>
  import Counter from './Counter'
  export default {
    components: {
      Counter
    }
  }
</script>

<style scoped lang="css">
  * {
    border: 1px solid red;
  } 
  
</style>