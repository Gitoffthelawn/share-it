<script setup>
import { ref, onMounted } from 'vue';
import Buttons from "./Button";

// import.meta.glob('./Button/*.vue', { eager: true });
import DefaultButtonList from "./defaultButtonList";
import $store from "@/entrypoints/popup/store";

const buttons = ref([]);
const draggingIndex = ref(0);

onMounted(() => {
  browser.storage.sync.get("options", (data) => {
    buttons.value = data.options?.buttons
      ? DefaultButtonList.filter(defaultButton =>
        data.options.buttons.some(
          browserButton => browserButton.componentName === defaultButton.componentName
        )
      ).concat(
        data.options.buttons.filter(
          browserButton =>
            !DefaultButtonList.some(
              defaultButton => defaultButton.componentName === browserButton.componentName
            )
        )
      )
      : [...DefaultButtonList];
  });
});

const dragstart = (index) => {
  draggingIndex.value = index;
};
const dragover = (e) => {
  e.preventDefault();
  e.target.style.borderTop = "4px solid rgb(var(--color-theme) / 0.2)";
};
const dragleave = (e) => {
  e.target.style.borderTop = "";
};
const ondrop = (index, e) => {
  e.target.style.borderTop = "";
  console.log(`${draggingIndex.value}→${index}`);
  if (index === draggingIndex.value) {
    return;
  }

  const moveValue = { ...buttons.value[draggingIndex.value] };
  buttons.value.splice(draggingIndex.value, 1);

  draggingIndex.value < index
    ? buttons.value.splice(index - 1, 0, moveValue)
    : buttons.value.splice(index, 0, moveValue);
};
const changeSwitch = (index, e) => {
  buttons.value[index].enable = e.target.checked;
};
const save = () => {
  $store.editing = !$store.editing;
  browser.storage.sync.set({
    options: {
      buttons: [...buttons.value],
    },
  });
};
</script>

<template>

  <component :is="buttons[0].componentName" />
  <ul class="buttonList">
    <template v-for="(button, index) in buttons" :key="button.componentName">
      <li v-if="button.enable || $store.editing" :draggable="$store.editing" @dragstart="dragstart(index)"
        @dragover="dragover($event)" @dragleave="dragleave($event)" @drop="ondrop(index, $event)"
        :class="{ disable: !button.enable }">
        <img v-if="$store.editing" class="handle" src="/img/drag.svg" alt="drag">
        <!-- TODO: ここをVbuttonにする?とか -->
        <component :is="button.componentName" :tabindex="index" />
        <input v-if="$store.editing" type="checkbox" :checked="button.enable" @change="changeSwitch(index, $event)">
      </li>
    </template>
  </ul>

  <a v-if="$store.isEn" href="https://github.com/psephopaiktes/share-it/blob/main/CONTRIBUTING.md" id="request"
    target="_blank">
    Request new button <img src="/img/send.svg" alt="icon">
  </a>
  <a v-else href="https://github.com/psephopaiktes/share-it/blob/main/CONTRIBUTING.ja.md" id="request" target="_blank">
    ボタンをリクエスト <img src="/img/send.svg" alt="icon">
  </a>

  <footer>
    <button @click="save()" v-if="$store.editing" class="complete">
      <img src="/img/complete.svg" alt="icon">
      {{ $store.isEn ? 'Complete' : '完了' }}
    </button>
    <!-- TODO v-eles -->
    <button @click="$store.editing = !$store.editing" v-if="!$store.editing">
      <img src="/img/setting.svg" alt="icon">
      {{ $store.isEn ? 'Manage Buttons' : 'ボタン設定' }}
    </button>

  </footer>

</template>
<style scoped>
.buttonList {
  margin-top: 8px;
  list-style: none;

  li {
    position: relative;
    cursor: grab;
    background: rgb(var(--color-base));
    margin-top: 4px;

    &.disable {
      opacity: .5;
    }

    >img {
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
    background: rgb(154 160 160 / 0.6);
    border-radius: 10px;
    cursor: pointer;
    outline: none;

    &:focus {
      box-shadow: 0 0 0 6px rgb(var(--color-main) / .1);
    }

    &::before {
      content: "";
      display: block;
      position: relative;
      top: -2px;
      left: -2px;
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background: rgb(240 240 240);

      @media (prefers-color-scheme: dark) {
        background: rgb(218 220 224);
      }

      box-shadow: 0 1px 3px rgb(0 0 0 / .4);
      transition: .2s ease-out;
    }

    &:checked {
      background: rgb(var(--color-theme) / .6);

      &::before {
        background: rgb(var(--color-theme));
        left: 14px;
      }
    }
  }
}

#request {
  display: flex;
  gap: .8em;
  margin: 32px 16px 0;
  justify-content: center;
  line-height: 32px;
  background: rgb(var(--color-theme));
  color: #fff;
  text-decoration: none;
  border-radius: 6px;

  &:hover,
  &:focus {
    filter: brightness(1.1);
  }

  img {
    opacity: .8;
    width: 1.2em;
    aspect-ratio: 1;
  }
}

footer {
  position: fixed;
  width: 100vw;
  left: 0;
  bottom: 0;
  background: rgb(var(--color-base));
  border-top: 1px solid rgb(var(--color-main) / 10%);

  button {
    width: 100%;
    height: 48px;
    border: none;
    color: rgb(var(--color-main) / .6);
    text-indent: -.5em;
    transition: .1s ease-out;

    &.complete {
      background: rgb(var(--color-theme) / .9);
      color: #fff;

      &:hover {
        background: rgb(var(--color-theme));
      }
    }
  }
}
</style>
