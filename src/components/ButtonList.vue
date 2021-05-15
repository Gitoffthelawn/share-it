<template>
  <ul>
    <li v-for="button in enableButtons" :key="button">
      <component :is="button"></component>
    </li>
  </ul>

  <h2>{{ $store.state.isEn ? 'disable buttons' : '無効なボタン' }}</h2>
  <ul>
    <li v-for="button in disableButtons" :key="button">
      <component :is="button"></component>
    </li>
  </ul>

  <footer>
    <button @click="copyClipboard('aaabaaaaa')">
      {{ $store.state.isEn ? 'Manage Buttons' : '設定' }}
    </button>
  </footer>

</template>

<script>
import Buttons from './Button';

export default {
  name: 'ButtonList',
  components: Buttons,
  data() {
    return {
    }
  },
  computed: {
    enableButtons() {
      return this.$store.state.options.enableButtons;
    },
    disableButtons() {
      return this.$store.state.options.disableButtons;
    },
  },
  methods:{
    save() {
      chrome.storage.sync.set({
        options: {
          enableButtons: [
            "Twitter",
            "Twitter",
            "Twitter",
            "Twitter"
          ],
          disableButtons: [
            "Twitter",
          ],
        }
      });
    }
  },
  beforeCreate() {
    // if(process.env.NODE_ENV == 'production'){
    //   chrome.storage.sync.get( 'options', data  => {
    //     if( Object.keys(data.options).length ) {
    //       this.$store.commit("setOptions", data.options);
    //     }
    //   });
    // }
  }
}
</script>
