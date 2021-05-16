<template>
  <ul>
    <li v-for="button in buttons" :key="button.component">
      <component :is="button.component"></component>
    </li>
  </ul>

  <footer>
    <button @click="$store.commit('toggleMode')" v-if="!$store.state.editMode">
      <img src="/img/setting.svg" alt="icon">
      {{ $store.state.isEn ? 'Manage Buttons' : '設定' }}
    </button>

    <button @click="$store.commit('toggleMode')" v-if="$store.state.editMode" class="complete">
      <img src="/img/complete.svg" alt="icon">
      {{ $store.state.isEn ? 'Complete' : '完了' }}
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
    buttons() {
      return this.$store.state.options.buttons;
    },
  },
  methods:{
    save() {
      chrome.storage.sync.set({
        options: {
          buttons: [
            "Twitter",
            "Twitter",
            "Twitter",
            "Twitter"
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

<style scoped lang="scss">
@use "../index.scss" as *;

ul {
  margin-top: 4px;
}
footer {
  position: fixed;
  width: 100vw;
  left: 0; bottom: 0;
  background: color(base);
  border-top: 1px solid color(main,.1);

  button {
    width: 100%;
    height: 48px;
    background: none;
    border: none;
    color: color(main,.6);
    text-indent: -.5em;
    transition: .1s ease-out;
    &:hover {
      background: color(main,.1);
    }

    &.complete {
      background: color(theme,.9);
      color: #fff;
      &:hover {
        background: color(theme,1);
      }
    }
  }
}
</style>
