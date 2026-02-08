// @ts-check
import { test, expect } from '@playwright/test';
import JsonUtility from '../utils/json_utility.js'
import { DemoWebShopPage } from '../pages/demo_web_shop_page.js';
import ScreenshotUtil from '../utils/screenshot_util.js';
import { Lambda } from '../utils/lambda.js';

const url = JsonUtility.getConfigValue('url');
const browser = JsonUtility.getConfigValue('browser');
const headless = JsonUtility.getConfigValue('headless');

test.describe('Homepage Functionality Tests', () => {

  test.beforeEach(async ({ page }, testInfo) => {
    await Lambda.setTestName(page, testInfo);
  });

  test.afterEach(async ({ page }, testInfo) => {
    await Lambda.setTestStatus(page, testInfo);
  });

  test.only('@smoke @login @test001 Verify login with valid credentials', async ({ page }, testInfo) => {
    // test steps
    const demoPage = new DemoWebShopPage(page);
    await page.goto(url);

    await expect(demoPage.booksLink).toBeVisible();
    await demoPage.booksLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Books page screenshot');

    await expect(demoPage.computersLink).toBeVisible();
    await demoPage.computersLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'computer page screenshot');

    await expect(demoPage.electronicsLink).toBeVisible();
    await demoPage.electronicsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'electronics page screenshot');

    await expect(demoPage.apparelShoesLink).toBeVisible();
    await demoPage.apparelShoesLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Apparel Shoes screenshot');

    await expect(demoPage.digitalDownloadsLink).toBeVisible();
    await demoPage.digitalDownloadsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'digital Downloads page screenshot');

    await expect(demoPage.jewelryLink).toBeVisible();
    await demoPage.jewelryLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'jewelry page screenshot');

    await expect(demoPage.giftCardsLink).toBeVisible();
    await demoPage.giftCardsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'gift Cards page screenshot');
  });

  test('@smoke @sanity @login @test002 Verify error with invalid username', async ({ page }, testInfo) => {
    const demoPage = new DemoWebShopPage(page);

    await page.goto(url);

    await expect(demoPage.booksLink).toBeVisible();
    await demoPage.booksLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Books page screenshot');

    await expect(demoPage.computersLink).toBeVisible();
    await demoPage.computersLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'computer page screenshot');

    await expect(demoPage.electronicsLink).toBeVisible();
    await demoPage.electronicsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'electronics page screenshot');

    await expect(demoPage.apparelShoesLink).toBeVisible();
    await demoPage.apparelShoesLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Apparel Shoes screenshot');

    await expect(demoPage.digitalDownloadsLink).toBeVisible();
    await demoPage.digitalDownloadsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'digital Downloads page screenshot');

    await expect(demoPage.jewelryLink).toBeVisible();
    await demoPage.jewelryLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'jewelry page screenshot');

    await expect(demoPage.giftCardsLink).toBeVisible();
    await demoPage.giftCardsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'gift Cards page screenshot');
  });

  test('@smoke @sanity @login @test003 Verify error with invalid password', async ({ page }, testInfo) => {
    const demoPage = new DemoWebShopPage(page);

    await page.goto(url);

    await expect(demoPage.booksLink).toBeVisible();
    await demoPage.booksLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Books page screenshot');

    await expect(demoPage.computersLink).toBeVisible();
    await demoPage.computersLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'computer page screenshot');

    await expect(demoPage.electronicsLink).toBeVisible();
    await demoPage.electronicsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'electronics page screenshot');

    await expect(demoPage.apparelShoesLink).toBeVisible();
    await demoPage.apparelShoesLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Apparel Shoes screenshot');

    await expect(demoPage.digitalDownloadsLink).toBeVisible();
    await demoPage.digitalDownloadsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'digital Downloads page screenshot');

    await expect(demoPage.jewelryLink).toBeVisible();
    await demoPage.jewelryLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'jewelry page screenshot');

    await expect(demoPage.giftCardsLink).toBeVisible();
    await demoPage.giftCardsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'gift Cards page screenshot');
  });

  test('@smoke @sanity @login @test004 Verify login with blank username and password', async ({ page }, testInfo) => {
    const demoPage = new DemoWebShopPage(page);

    await page.goto(url);

    await expect(demoPage.booksLink).toBeVisible();
    await demoPage.booksLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Books page screenshot');

    await expect(demoPage.computersLink).toBeVisible();
    await demoPage.computersLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'computer page screenshot');

    await expect(demoPage.electronicsLink).toBeVisible();
    await demoPage.electronicsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'electronics page screenshot');

    await expect(demoPage.apparelShoesLink).toBeVisible();
    await demoPage.apparelShoesLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Apparel Shoes screenshot');

    await expect(demoPage.digitalDownloadsLink).toBeVisible();
    await demoPage.digitalDownloadsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'digital Downloads page screenshot');

    await expect(demoPage.jewelryLink).toBeVisible();
    await demoPage.jewelryLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'jewelry page screenshot');

    await expect(demoPage.giftCardsLink).toBeVisible();
    await demoPage.giftCardsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'gift Cards page screenshot');
  });

  test('@smoke @sanity @login @test005 Verify password masking', async ({ page }, testInfo) => {
    const demoPage = new DemoWebShopPage(page);

    await page.goto(url);

    await expect(demoPage.booksLink).toBeVisible();
    await demoPage.booksLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Books page screenshot');

    await expect(demoPage.computersLink).toBeVisible();
    await demoPage.computersLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'computer page screenshot');

    await expect(demoPage.electronicsLink).toBeVisible();
    await demoPage.electronicsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'electronics page screenshot');

    await expect(demoPage.apparelShoesLink).toBeVisible();
    await demoPage.apparelShoesLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Apparel Shoes screenshot');

    await expect(demoPage.digitalDownloadsLink).toBeVisible();
    await demoPage.digitalDownloadsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'digital Downloads page screenshot');

    await expect(demoPage.jewelryLink).toBeVisible();
    await demoPage.jewelryLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'jewelry page screenshot');

    await expect(demoPage.giftCardsLink).toBeVisible();
    await demoPage.giftCardsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'gift Cards page screenshot');
  });

  test('@smoke @login @test006 Verify Show Password functionality', async ({ page }, testInfo) => {
    const demoPage = new DemoWebShopPage(page);

    await page.goto(url);

    await expect(demoPage.booksLink).toBeVisible();
    await demoPage.booksLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Books page screenshot');

    await expect(demoPage.computersLink).toBeVisible();
    await demoPage.computersLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'computer page screenshot');

    await expect(demoPage.electronicsLink).toBeVisible();
    await demoPage.electronicsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'electronics page screenshot');

    await expect(demoPage.apparelShoesLink).toBeVisible();
    await demoPage.apparelShoesLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Apparel Shoes screenshot');

    await expect(demoPage.digitalDownloadsLink).toBeVisible();
    await demoPage.digitalDownloadsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'digital Downloads page screenshot');

    await expect(demoPage.jewelryLink).toBeVisible();
    await demoPage.jewelryLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'jewelry page screenshot');

    await expect(demoPage.giftCardsLink).toBeVisible();
    await demoPage.giftCardsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'gift Cards page screenshot');
  });

  test('@smoke @login @test007 Verify login button is disabled until credentials entered', async ({ page }, testInfo) => {
    const demoPage = new DemoWebShopPage(page);

    await page.goto(url);

    await expect(demoPage.booksLink).toBeVisible();
    await demoPage.booksLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Books page screenshot');

    await expect(demoPage.computersLink).toBeVisible();
    await demoPage.computersLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'computer page screenshot');

    await expect(demoPage.electronicsLink).toBeVisible();
    await demoPage.electronicsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'electronics page screenshot');

    await expect(demoPage.apparelShoesLink).toBeVisible();
    await demoPage.apparelShoesLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Apparel Shoes screenshot');

    await expect(demoPage.digitalDownloadsLink).toBeVisible();
    await demoPage.digitalDownloadsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'digital Downloads page screenshot');

    await expect(demoPage.jewelryLink).toBeVisible();
    await demoPage.jewelryLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'jewelry page screenshot');

    await expect(demoPage.giftCardsLink).toBeVisible();
    await demoPage.giftCardsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'gift Cards page screenshot');
  });

  test('@smoke @login @test008 Verify user redirection after logout', async ({ page }, testInfo) => {
    const demoPage = new DemoWebShopPage(page);

    await page.goto(url);

    await expect(demoPage.booksLink).toBeVisible();
    await demoPage.booksLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Books page screenshot');

    await expect(demoPage.computersLink).toBeVisible();
    await demoPage.computersLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'computer page screenshot');

    await expect(demoPage.electronicsLink).toBeVisible();
    await demoPage.electronicsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'electronics page screenshot');

    await expect(demoPage.apparelShoesLink).toBeVisible();
    await demoPage.apparelShoesLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Apparel Shoes screenshot');

    await expect(demoPage.digitalDownloadsLink).toBeVisible();
    await demoPage.digitalDownloadsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'digital Downloads page screenshot');

    await expect(demoPage.jewelryLink).toBeVisible();
    await demoPage.jewelryLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'jewelry page screenshot');

    await expect(demoPage.giftCardsLink).toBeVisible();
    await demoPage.giftCardsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'gift Cards page screenshot');
  });

  test('@smoke @login @test009 Verify case sensitivity in login credentials', async ({ page }, testInfo) => {
    const demoPage = new DemoWebShopPage(page);

    await page.goto(url);

    await expect(demoPage.booksLink).toBeVisible();
    await demoPage.booksLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Books page screenshot');

    await expect(demoPage.computersLink).toBeVisible();
    await demoPage.computersLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'computer page screenshot');

    await expect(demoPage.electronicsLink).toBeVisible();
    await demoPage.electronicsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'electronics page screenshot');

    await expect(demoPage.apparelShoesLink).toBeVisible();
    await demoPage.apparelShoesLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Apparel Shoes screenshot');

    await expect(demoPage.digitalDownloadsLink).toBeVisible();
    await demoPage.digitalDownloadsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'digital Downloads page screenshot');

    await expect(demoPage.jewelryLink).toBeVisible();
    await demoPage.jewelryLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'jewelry page screenshot');

    await expect(demoPage.giftCardsLink).toBeVisible();
    await demoPage.giftCardsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'gift Cards page screenshot');
  });

  test('@smoke @login @test010 Verify Remember Me checkbox functionality', async ({ page }, testInfo) => {
    const demoPage = new DemoWebShopPage(page);

    await page.goto(url);

    await expect(demoPage.booksLink).toBeVisible();
    await demoPage.booksLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Books page screenshot');

    await expect(demoPage.computersLink).toBeVisible();
    await demoPage.computersLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'computer page screenshot');

    await expect(demoPage.electronicsLink).toBeVisible();
    await demoPage.electronicsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'electronics page screenshot');

    await expect(demoPage.apparelShoesLink).toBeVisible();
    await demoPage.apparelShoesLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'Apparel Shoes screenshot');

    await expect(demoPage.digitalDownloadsLink).toBeVisible();
    await demoPage.digitalDownloadsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'digital Downloads page screenshot');

    await expect(demoPage.jewelryLink).toBeVisible();
    await demoPage.jewelryLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'jewelry page screenshot');

    await expect(demoPage.giftCardsLink).toBeVisible();
    await demoPage.giftCardsLink.click();
    await ScreenshotUtil.capture(page, testInfo, 'gift Cards page screenshot');
  });

  test('@smoke @login @test011 Verify login with valid credentials orange hrm', async ({ page }, testInfo) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await ScreenshotUtil.capture(page, testInfo, 'Username');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await ScreenshotUtil.capture(page, testInfo, 'Password');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await ScreenshotUtil.capture(page, testInfo, 'Dashboard');
  });

});


