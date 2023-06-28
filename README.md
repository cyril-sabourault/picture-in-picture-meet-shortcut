# Picture-in-Picture Meet shortcut

This chrome extensions allows users to trigger Meet's Picture in Picture mode using `ctrl + p` keyboard shortcut.

## Installation

Clone the repository and load the extension in Chrome.  
See [Loading an unpacked extension][loading-an-unpacked-extension] for more details.

Browse to [Google Meet][google-meet] and press `ctrl + p` to toggle Picture-in-Picture mode while in a meeting.

## Implementation Notes

- The extension only runs on [Google Meet][google-meet] pages.

- The extension uses [chrome.scripting][chrome-scripting-api] API to inject JavaScript into web pages.

- The extension only supports the English language because it relies on the English text on the page to identify the Picture in Picture button.

- The extension will briefly display the "more options" submenu in order to access the Picture-in-Picture button.

- Works with macOS ctrl key, tested on Chrome version 114.0 official Build for arm64 on June 28 2023.

[loading-an-unpacked-extension]: https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked
[google-meet]: https://meet.google.com/
[chrome-scripting-api]: https://developer.chrome.com/docs/extensions/reference/scripting/
