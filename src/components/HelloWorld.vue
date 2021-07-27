<template>
  <h1>{{ msg }}</h1>
  <button @click="handleClick">点我emit</button>
  <span style="color: red">
    <slot></slot>
  </span>
  <p style="color: blue">
    <slot name="block"></slot>
  </p>
  <div>
    <label>试试v-model</label>
    <input type="text" v-model="comInput" />
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue';
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  emits: ['click'],
  setup: (prop, {emit}) => {
    const count = ref(0);

    const comInput = ref('');

    function handleClick(e: Event) {
      console.log(comInput.value);
      emit('click', e);
    }

    return {count, handleClick, comInput};
  }
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
