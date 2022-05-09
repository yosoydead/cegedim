<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

:root {
  --smallSpacing: 5px;
  --normalSpacing: 10px;
  --blackColor: black;
  --redColor: red;
  --greenColor: red;
  --limeColor: lime;
  --limeGreenColor: limegreen;
  --cardBigFontSize: 30px;
  --cardNormalFontSize: 24px;
  --cardSmallFontSize: 12px;
  --messageBorderWidth: 2px;
  --messageBorderStyle: double;
  --containerWidth: 980px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
