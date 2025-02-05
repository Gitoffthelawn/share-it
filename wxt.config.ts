import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
	extensionApi: "chrome",
	modules: ["@wxt-dev/module-vue"],
	manifest: {
		name: "__MSG_extName__",
		description: "__MSG_extDescription__",
		default_locale: "en",
		homepage_url: "https://psephopaiktes.github.io/share-it/",
		permissions: ["storage", "tabs", "notifications", "activeTab", "scripting"],
		commands: {
			_execute_action: {
				suggested_key: {
					default: "Ctrl+Shift+S",
				},
			},
		},
	},
});
