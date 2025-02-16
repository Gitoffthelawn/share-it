export interface ButtonConfig {
	componentName: string;
	enable: boolean;
}

export const defaultButtonList: ButtonConfig[] = [
	{ componentName: "X", enable: true },
	{ componentName: "Bluesky", enable: false },
	{ componentName: "Threads", enable: false },
	{ componentName: "Mastodon", enable: false },
	{ componentName: "Facebook", enable: false },
	{ componentName: "Pocket", enable: true },
	{ componentName: "Pinterest", enable: false },
	{ componentName: "Blogger", enable: false },
	{ componentName: "Gmail", enable: true },
	{ componentName: "AmazonShorter", enable: true },
	{ componentName: "Messenger", enable: false },

	// System
	{ componentName: "CopyLinkAsRichText", enable: true },
	{ componentName: "CopyTitle", enable: false },
	{ componentName: "CopyTitleUrl", enable: true },
	{ componentName: "CopyLinkAsHtml", enable: false },
	{ componentName: "CopyLinkAsMd", enable: false },
	{ componentName: "Email", enable: false },
	{ componentName: "Sms", enable: true },
	{ componentName: "Print", enable: false },
	{ componentName: "Other", enable: true },
	{ componentName: "QR", enable: true },

	// For Developers
	{ componentName: "HackerNews", enable: false },
	{ componentName: "PageSpeed", enable: true },
	{ componentName: "WaybackMachine", enable: true },
	{ componentName: "Wappalyzer", enable: false },

	// Non major, Local
	{ componentName: "LinkedIn", enable: false },
	{ componentName: "Feedly", enable: false },
	{ componentName: "Hatebu", enable: false },
	{ componentName: "Note", enable: false },
	{ componentName: "LINE", enable: false },
	{ componentName: "Tumblr", enable: false },
];
