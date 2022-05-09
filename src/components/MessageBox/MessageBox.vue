<template>
    <section class="customMessageBox" :class="type">
        <p>{{ text }}</p>
    </section>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'No message provided'
    },
    type: {
      type: String,
      default: 'normal',
      validator: propValue => {
        return ['success', 'error', 'normal'].includes(propValue)
      }
    }
  }
}
</script>

<style scoped>

.customMessageBox {
    margin: 5px 0;
    padding: 5px;
    border-width: 2px;
    border-radius: 10px;
    border-style: double;
}

.customMessageBox.error {
    border-color: red;
    color: red;
}

.customMessageBox.normal {
    border-color: black;
}

.customMessageBox.success {
    border-color: green;
    color: green;
}
</style>
