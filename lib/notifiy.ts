import i18n from "@/lib/i18n";

const defaultMessage = {
	ja: "コピーしました",
	en: "Copied.",
	"zh-cn": "已复制",
	es: "Copiado",
};

const notify = (message = defaultMessage) => {
	browser.notifications.create(
		{
			type: "basic",
			title: "Share-it",
			message: i18n.t(message),
			silent: true,
			iconUrl: "/icon/128.png",
		},
		() => {
			window.close();
		},
	);
};

export default notify;
