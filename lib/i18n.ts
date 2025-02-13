const default_locale = browser.runtime.getManifest().default_locale || "en";

const locales = {
	en: {
		label: "English",
		lang: "en-US",
	},
	ja: {
		label: "日本語",
	},
	"zh-cn": {
		label: "简体中文",
		lang: "zh-CN",
	},
	es: {
    label: "Español",
  },
};

export default {
  default_locale, locales,

  t(translations: Record<string, string>): string {
    const userLang = browser.i18n.getUILanguage().toLowerCase();
    return translations[userLang] || translations[default_locale] || "";
  },
};
