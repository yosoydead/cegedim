<template>
    <div>
        <p>value to display: {{ charToDisplay }}</p>
    </div>
</template>

<script>
export default {
  name: 'LetterBox',
  props: {
    charToDisplay: {
      type: String,
      default: 'no value provided'
    }
  }
}
</script>
