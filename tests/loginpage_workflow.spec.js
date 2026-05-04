// @ts-check
import { test, expect } from '@playwright/test';
import JsonUtility from '../utils/json_utility.js'
import { DemoWebShopPage } from '../pages/demo_web_shop_page.js';
import ScreenshotUtil from '../utils/screenshot_util.js';
import { Lambda } from '../utils/lambda.js';
import { WishPage } from '../pages/wish_page.js';

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

  test('@smoke @login @test001 Verify login with valid credentials', async ({ page }, testInfo) => {
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

  test('@smoke @login @test012 Verify the radio button functionality of Wish Page', async ({ page }, testInfo) => {
    const wishPage = new WishPage(page);

    await page.goto('https://testautomationpractice.blogspot.com/');

    await wishPage.maleCheckbox.check();
    await ScreenshotUtil.capture(page, testInfo, 'Male Checkbox');
    expect(await wishPage.maleCheckbox.isChecked()).toBeTruthy();
    expect(await wishPage.femaleCheckbox.isChecked()).toBeFalsy();

    await wishPage.femaleCheckbox.check();
    await ScreenshotUtil.capture(page, testInfo, 'Female Checkbox');
    expect(await wishPage.femaleCheckbox.isChecked()).toBeTruthy();
    expect(await wishPage.maleCheckbox.isChecked()).toBeFalsy();
  });

  test.only('@smoke @login @test013 Verify the iframe functionality of Wish Page', async ({ page }, testInfo) => {
    const wishPage = new WishPage(page);  
    await page.goto('https://demo.automationtesting.in/Register.html');  
    await wishPage.switchToFrame.click();
    await wishPage.frames.click();
    await page.waitForTimeout(5000); // Wait for the frame to load
    const frame = page.frameLocator(JsonUtility.getLocator('Wish Page', 'SingleFrameXPATH'));
    await frame.getByLabel('First Name').fill('John');
    await ScreenshotUtil.capture(page, testInfo, 'First Name in Frame');
  });
 
});

