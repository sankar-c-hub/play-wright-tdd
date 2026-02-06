export default class ScreenshotUtil {

    /**
     * Capture full page screenshot and attach to Playwright report
     * @param {import('@playwright/test').Page} page
     * @param {import('@playwright/test').TestInfo} testInfo
     * @param {string} message - attachment name
     */
    static async capture(page, testInfo, message) {
        const screenshot = await page.screenshot({ fullPage: true });

        await testInfo.attach(message, {
            body: screenshot,
            contentType: 'image/png',
        });
    }
}
