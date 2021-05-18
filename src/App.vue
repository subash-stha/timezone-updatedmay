<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/time.jpeg">
    <TimeDiff msg="Welcome to the time difference App"/>
  </div>
</template>

<script>
import TimeDiff from './components/TimeDiff.vue'

export default {
  name: 'App',
  components: {
    TimeDiff
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
