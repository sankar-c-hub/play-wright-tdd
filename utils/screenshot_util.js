export default class ScreenshotUtil {

    static async capture(page, testInfo, message) {
        const screenshot = await page.screenshot({ fullPage: true });

        await testInfo.attach(message, {
            body: screenshot,
            contentType: 'image/png',
        });
    }

    static async logText(testInfo, message) {
        await testInfo.attach('Log', {
            body: message,
            contentType: 'text/plain',
        });
    }
}
