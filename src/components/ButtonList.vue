<template>

  <ul class="buttonList">
    <template
      v-for="(button,index) in buttons"
      :key="button.componentName"
    >
      <li
        v-if="button.enable || $store.state.editMode"
        :draggable="$store.state.editMode ? true : false"
        @dragstart="dragstart(index)"
        @dragover="dragover($event)"
        @dragleave="dragleave($event)"
        @drop="ondrop(index,$event)"
        :class="{ disable: !button.enable }"
      >
        <img v-if="$store.state.editMode" class="handle" src="/img/drag.svg" alt="drag">
        <component :is="button.componentName"></component>
        <input
          v-if="$store.state.editMode" type="checkbox"
          :checked="button.enable"
          @change="changeSwitch(index,$event)"
        >
      </li>
    </template>
  </ul>

  <footer>
    <button @click="$store.commit('toggleMode')" v-if="!$store.state.editMode">
      <img src="/img/setting.svg" alt="icon">
      {{ $store.state.isEn ? 'Manage Buttons' : 'ボタン設定' }}
    </button>

    <button @click="save()" v-if="$store.state.editMode" class="complete">
      <img src="/img/complete.svg" alt="icon">
      {{ $store.state.isEn ? 'Complete' : '完了' }}
    </button>
  </footer>

</template>

<script>
import Buttons from './Button';
import DefaultButtonList from '../assets/defaultButtonList.js';

export default {
  name: 'ButtonList',
  components: Buttons,
  data() {
    return {
      buttons: [],
      draggingIndex: 0,
    }
  },
  methods:{
    dragstart(index) {
      this.draggingIndex = index;
    },
    dragover(e) {
      e.preventDefault();
      e.target.style.borderTop = '4px solid rgba(var(--color-theme), 0.2)';
    },
    dragleave(e) {
      e.target.style.borderTop = '';
    },
    ondrop(index, e) {
      // e.preventDefault();
      e.target.style.borderTop = '';
      console.log(this.draggingIndex + "→" + index);
      if( index == this.draggingIndex ) {
        return;
      }

      const moveValue = {...this.buttons[this.draggingIndex] };
      this.buttons.splice( this.draggingIndex, 1 ); // Delete Dragging

      ( this.draggingIndex < index )
        ? this.buttons.splice( index-1, 0, moveValue)
        : this.buttons.splice( index, 0, moveValue) ;
    },

    changeSwitch(index, e) {
      this.buttons[index].enable = e.target.checked;
    },
    save() {
      this.$store.commit('toggleMode');
      chrome.storage.sync.set({
        options: {
          buttons: [...this.buttons],
        }
      });

      // TODO: ここにキャッシュ削除処理
      // Chrome.options.buttonsの中にもう消したいCompoentnがあるかもしれない。
    }
  },
  created() {
    if (process.env.NODE_ENV == 'production') {
      chrome.storage.sync.get( 'options', data  => {

        if( data.options && data.options.buttons ) {
          this.buttons = [...data.options.buttons];

          // DefaultListがUpdateで増えていたら追加する
          const NewButtons = DefaultButtonList.filter( defaultButton =>
            !data.options.buttons.some( chromeButton =>
              chromeButton.componentName == defaultButton.componentName
            )
          );
          this.buttons.push(...NewButtons);
        } else {
          this.buttons = [...DefaultButtonList];
        }

      });
    } else {
      this.buttons = [...DefaultButtonList];
    }
  }
}
</script>

<style scoped lang="scss">
@use "../index.scss" as *;

.buttonList {
  margin-top: 8px;
  list-style: none;
  li {
    position: relative;
    cursor: grab;
    background: color(base);
    margin-top: 4px;
    &.disable {
      opacity: .5;
    }
    > img {
      margin-top: 8px;
      margin-left: 18px;
      opacity: .4;
      pointer-events: none;
    }
  }
  .handle {
    position: absolute;
  }
  input {
    appearance: none;
    position: absolute;
    right: 24px;
    bottom: 14px;
    width: 28px;
    height: 12px;
    background: rgba(#9AA0A0,.6);
    border-radius: 10px;
    cursor: pointer;
    &::before {
      content: "";
      display: block;
      position: relative;
      top: -2px; left: -2px;
      width: 16px; height: 16px;
      border-radius: 8px;
      background: #FCFCFC;
      @media (prefers-color-scheme: dark) {
        background: #DADCE0;
      }
      box-shadow: 0 1px 3px rgba(#000,.4);
      transition: .2s ease-out;
    }
    &:checked {
      background: color(theme,.6);
      &::before {
        background: color(theme);
        left: 14px;
      }
    }
  }
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
