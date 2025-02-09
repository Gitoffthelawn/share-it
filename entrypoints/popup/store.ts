import { reactive } from "vue";

const $store = reactive({
	isEn: true,
	tab: {},
	editing: false,
});

export default $store;
