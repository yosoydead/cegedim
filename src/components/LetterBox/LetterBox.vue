<template>
    <div class="charBox" @click="flipCard">
        <span v-if="flipped">
            <p>{{ charToDisplay }}</p>
            <span class="charCode">Char from code: {{ charCodeFor }}</span>
        </span>

        <span v-if="!flipped">
            <p>?</p>
        </span>
    </div>
</template>

<script>
export default {
  name: 'LetterBox',
  props: {
    charToDisplay: {
      type: String,
      default: 'no value provided'
    },
    charCodeFor: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
      flipped: false
    }
  },
  methods: {
    flipCard: function () {
      this.flipped = !this.flipped
    }
  }
}
</script>

<style scoped>
.charBox {
    width: 100%;
    height: 100px;
    background-color: lime;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    /* flex: 0 0 calc(25% - 20px); */
}

.charBox:hover {
    background-color: limegreen;
}

.charBox .charCode{
    font-size: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
}

@media only screen and (min-width: 500px) {
  .charBox {
    flex: 0 0 calc(50% - 10px);
  }
}

@media only screen and (min-width: 640px) {
  .charBox {
    flex: 0 0 calc(33% - 10px);
  }
}

@media only screen and (min-width: 768px) {
  .charBox {
    flex: 0 0 calc(25% - 10px);
  }
}
</style>
