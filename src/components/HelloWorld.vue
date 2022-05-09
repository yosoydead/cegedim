<template>
  <div class="hello">
    <button @click="testClick">Test click</button>
  </div>
</template>

<script>
// import { createAsciiAlphabet } from '../Utils/createAsciiAlphabet'
import { calculateHundredsClass } from '../Utils/calculateNumbersClass'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      numsArray: [110, 120, 130, 280, 780, 510, 505, 605, 720, 210, 275]
    }
  },
  methods: {
    testClick: function (event) {
      const result = calculateHundredsClass(this.numsArray)
      this.getMaxValues(result)
    },
    getMaxValues: function (numberClasses) {
      const maxes = []

      Object.keys(numberClasses).forEach(key => {
        console.log(numberClasses[key])
        maxes.push(Math.max(...numberClasses[key]))
      })

      return maxes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
