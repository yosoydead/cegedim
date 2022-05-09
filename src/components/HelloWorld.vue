<template>
  <div class="hello">
    <button @click="testClick">Test click</button>
    <div v-if="showCharacters">
      <p>maxime {{ max }}</p>
      <letter-box
        v-for="letter in modulos"
        :key="letter"
        :charToDisplay="letter"
      ></letter-box>
    </div>
  </div>
</template>

<script>
import { createAsciiAlphabet } from '../Utils/createAsciiAlphabet'
import { calculateHundredsClass } from '../Utils/calculateNumbersClass'
import LetterBox from './LetterBox/LetterBox.vue'

export default {
  name: 'HelloWorld',
  components: {
    'letter-box': LetterBox
  },
  created () {
    this.asciiRange = createAsciiAlphabet()
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      numsArray: [110, 120, 130, 280, 780, 510, 505, 605, 720, 210, 275],
      max: [],
      modulos: [],
      showCharacters: false,
      asciiRange: []
    }
  },
  methods: {
    testClick: function (event) {
      const result = calculateHundredsClass(this.numsArray)
      this.max = this.getMaxValues(result)
      this.showCharacters = true
    },
    getMaxValues: function (numberClasses) {
      const maxes = []

      Object.keys(numberClasses).forEach(key => {
        const max = Math.max(...numberClasses[key])
        maxes.push(Math.max(max))
        this.modulos.push(String.fromCharCode(this.asciiRange[max % 26]))
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
