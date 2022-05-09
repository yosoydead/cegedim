<template>
  <div class="hello">
    <div id="inputField">
      <label for="numbers">Introduceți un șir de numere cuprinse între 100 și 999 separate prin virgulă:</label>
      <div>
        <input type="text"
          @focus="focusHandler"
          @blur="blurHandler"
          @input="changeHandler"
          :value="inputValue"
          id="numbers"
          name="numbers"
        />

      <button @click="testClick">Calculează</button>
      </div>

      <message-box
        v-if="validationError"
        :text="validationErrorText"
        type="error"
      ></message-box>
    </div>
    <div v-if="showCharacters">
      <p>maxime {{ computedMaximumNumbers }}</p>

      <div id="charsList">
        <letter-box
          v-for="item in maximumValues"
          :key="item.letter + item.number"
          :charToDisplay="item.letter"
          :charCodeFor="item.number"
        ></letter-box>
      </div>
    </div>
  </div>
</template>

<script>
import { createAsciiAlphabet } from '../Utils/createAsciiAlphabet'
import { calculateHundredsClass } from '../Utils/calculateNumbersClass'
import LetterBox from './LetterBox/LetterBox.vue'
import MessageBox from './MessageBox/MessageBox.vue'

export default {
  name: 'Main',
  components: {
    'letter-box': LetterBox,
    'message-box': MessageBox
  },
  created () {
    this.asciiRange = createAsciiAlphabet()
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      maximumValues: [],
      showCharacters: false,
      asciiRange: [],
      inputValue: '',
      validationError: false,
      validationErrorText: ''
    }
  },
  methods: {
    testClick: function (event) {
      this.validationErrorText = ''
      this.validationError = false
      this.modulos = []
      this.showCharacters = false
      this.validateInputForNumbers(this.inputValue)
        .then((result) => {
          console.log('resolve', result)
          return new Promise((resolve, reject) => {
            const calculation = calculateHundredsClass(result)
            this.maximumValues = this.getMaxValues(calculation)
            resolve()
          })
        })
        .then(() => {
          this.showCharacters = true
        })
        .catch(err => {
          this.validationErrorText = err.message
          this.validationError = true
        })
    },
    getMaxValues: function (numberClasses) {
      const maxes = []

      Object.keys(numberClasses).forEach(key => {
        const max = Math.max(...numberClasses[key])
        maxes.push({
          number: max,
          letter: String.fromCharCode(this.asciiRange[max % 26])
        })
      })

      return maxes
    },
    focusHandler: function () {
      console.log('focus')
    },
    blurHandler: function () {
      console.log('blur')
    },
    changeHandler: function (event) {
      this.inputValue = event.target.value
    },
    validateInputForNumbers: function (inputToValidate) {
      return new Promise((resolve, reject) => {
        if (!inputToValidate || inputToValidate === '') {
          throw new Error('no empty input allowed')
        }

        const splitInput = inputToValidate.split(',').map(el => {
          return el.trim()
        })

        const inputToInts = splitInput.map(el => {
          const tryParse = Number.parseInt(el)
          if (isNaN(tryParse)) {
            throw new Error('no strings allowed')
          }

          return tryParse
        })

        resolve(inputToInts)
      })
    }
  },
  computed: {
    computedMaximumNumbers () {
      return this.maximumValues.map(el => {
        return el.number
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: var(--containerWidth);
  padding: var(--normalSpacing);
}

#inputField {
  display: flex;
  flex-direction: column;
}

#inputField input {
  width: 90%;
  margin: var(--smallSpacing) 0;
}

#charsList {
  display: flex;
  flex-wrap: wrap;
  gap: var(--normalSpacing);
  margin-top: var(--normalSpacing);
}
</style>
