<template>
  <VButton
    img="/img/print.svg"
    @click="print()"
  >
    {{ $store.state.isEn ? 'Print' : '印刷' }}
  </VButton>
</template>

<script>
export default {
  name: 'Print',
  methods:{
    print() {
      chrome.scripting.executeScript({
        target: { tabId: this.$store.state.tab.id },
        function: ()=> {
          window.print();
        }
      });
    }
  }
}
</script>
