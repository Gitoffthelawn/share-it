export interface ButtonConfig {
	componentName: string;
	enable: boolean;
}

export const defaultButtonList: ButtonConfig[] = [
	{ componentName: "X", enable: true },
	{ componentName: "Bluesky", enable: false },
	{ componentName: "Threads", enable: false },
	{ componentName: "Mastodon", enable: false },
	{ componentName: "Facebook", enable: true },
	{ componentName: "Pocket", enable: true },
	{ componentName: "Pinterest", enable: false },
	{ componentName: "Blogger", enable: false },
	{ componentName: "LinkedIn", enable: false },
	{ componentName: "Gmail", enable: true },
	{ componentName: "HackerNews", enable: true },
	{ componentName: "Email", enable: false },
	{ componentName: "Sms", enable: true },
	{ componentName: "CopyLinkAsRichText", enable: true },
	{ componentName: "CopyTitle", enable: false },
	{ componentName: "CopyTitleUrl", enable: true },
	{ componentName: "CopyLinkAsHtml", enable: false },
	{ componentName: "CopyLinkAsMd", enable: false },
	{ componentName: "QR", enable: true },
	{ componentName: "WaybackMachine", enable: true },
	{ componentName: "Hatebu", enable: false },
	{ componentName: "Note", enable: false },
	{ componentName: "LINE", enable: false },
	{ componentName: "Tumblr", enable: false },
	{ componentName: "Feedly", enable: false },
	{ componentName: "AmazonShorter", enable: true },
	{ componentName: "Print", enable: false },
	{ componentName: "Other", enable: true },
];
