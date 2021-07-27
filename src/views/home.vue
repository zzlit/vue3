<template>
  <h3 :ref="setItemRefs">这是首页</h3>
  <input type="text" v-focus />
  <HelloWorld msg="hello world" v-model="input" @click="handleEmit">
    123
    <template #block>345</template>
  </HelloWorld>
  <template v-for="item in 5" :key="item">
    <p>{{ item }}</p>
  </template>
</template>

<script lang="ts">
import {defineComponent, nextTick, onMounted, ref} from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const input = ref('123');
    let itemRefs: HTMLElement[] = [];
    const setItemRefs = (el: HTMLElement) => {
      if (el) {
        itemRefs.push(el);
      }
    };

    onMounted(() => {
      nextTick(() => {
        console.log(itemRefs);
      });
    });

    function handleEmit() {
      console.log('啥？你点我？');
    }

    return {
      input,
      setItemRefs,
      handleEmit
    };
  }
});
</script>

<style scoped></style>
