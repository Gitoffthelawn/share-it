export default {
  methods: {
    copyNotification(isEn) {
      chrome.notifications.create({
        type: "basic",
        title: "Share it",
        message: isEn ? "Copied." : "コピーしました",
        silent: true,
        iconUrl: "../icon128.png"
      }, ()=> {window.close()} );
    }
  }
}
