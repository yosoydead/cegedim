<template>
    <section class="customMessageBox" :class="type">
        <p>{{ text }}</p>
    </section>
</template>

<script>
export default {
  name: 'MessageBox',
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
    margin: var(--smallSpacing) 0;
    padding: var(--smallSpacing);
    border-width: var(--messageBorderWidth);
    border-radius: var(--normalSpacing);
    border-style: var(--messageBorderStyle);
}

.customMessageBox.error {
    border-color: var(--redColor);
    color: var(--redColor);
}

.customMessageBox.normal {
    border-color: var(--blackColor);
}

.customMessageBox.success {
    border-color: var(--greenColor);
    color: var(--greenColor);
}
</style>
