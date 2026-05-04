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

  test('@smoke @login @test013 Verify the iframe functionality of Wish Page', async ({ page }, testInfo) => {
    const wishPage = new WishPage(page);
    await page.goto('https://demo.automationtesting.in/Register.html');
    await wishPage.switchToFrame.click();
    await wishPage.frames.click();
    await page.waitForTimeout(5000); // Wait for the frame to load
    const frame = page.frameLocator(JsonUtility.getLocator('Wish Page', 'SingleFrameXPATH'));
    await frame.getByLabel('First Name').fill('John');
    await ScreenshotUtil.capture(page, testInfo, 'First Name in Frame');
  });

  test('@smoke @login @test014 Verify successful login with valid credentials using CSS locators', async ({ page }, testInfo) => {
    await page.goto("https://demoblaze.com/index.html")
    await page.locator("a#login2").click();
    await ScreenshotUtil.capture(page, testInfo, 'Login button in Home Page');
    await page.locator("input#loginusername").fill("pavanol")
    await ScreenshotUtil.capture(page, testInfo, 'Username Field');
    await page.locator("input#loginpassword").fill("test@123");
    await ScreenshotUtil.capture(page, testInfo, 'Password Field');
    await page.locator("button[onclick='logIn()']").click();
    await ScreenshotUtil.capture(page, testInfo, 'Login Button');
    const logoutButton = await page.locator("a#logout2");
    await expect(logoutButton).toBeVisible();
    await ScreenshotUtil.capture(page, testInfo, 'Logout Button');
  });

  test('@smoke @login @test014 Verify successful login and capture list of the products', async ({ page }, testInfo) => {

    await page.goto("https://demoblaze.com/index.html")
    await page.locator("a#login2").click();
    await ScreenshotUtil.capture(page, testInfo, 'Login button in Home Page');
    await page.locator("input#loginusername").fill("pavanol")
    await ScreenshotUtil.capture(page, testInfo, 'Username Field');
    await page.locator("input#loginpassword").fill("test@123");
    await ScreenshotUtil.capture(page, testInfo, 'Password Field');
    await page.locator("button[onclick='logIn()']").click();
    await ScreenshotUtil.capture(page, testInfo, 'Login Button');
    const logoutButton = await page.locator("a#logout2");
    await expect(logoutButton).toBeVisible();
    await ScreenshotUtil.capture(page, testInfo, 'Logout Button');

    const productsList = await page.$$("//h4/a");

    let list = [];

    for (const product of productsList) {
      const text = await product.textContent();
      if (text) {
        list.push(text.trim());
      }
    }

    const joinedText = list.join(", ");

    await ScreenshotUtil.logText(testInfo, joinedText);

  });

  test('@smoke @login @test015 Validate locating elements using various Playwright locators', async ({ page }, testInfo) => {
    await page.goto("https://demoblaze.com/index.html")

    //creating element page.getByAltText()
    const altElement = await page.getByAltText('First slide');
    await expect(altElement).toBeVisible();

    //creating element page.getByPlaceholder()
    const palceHolderElement = await page.getByPlaceholder('Username');
    await expect(palceHolderElement).toBeVisible()


  });

  test('@smoke @login @test016 Validate iframes elements using various Playwright locators', async ({ page }, testInfo) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame1 = page.frameLocator("frame[src='frame_1.html']");
    await frame1.locator("input[name='mytext1']").fill("frame1");
    await ScreenshotUtil.capture(page, testInfo, 'Filled text in iframe1');

    const frame2 = page.frameLocator("frame[src='frame_2.html']");
    await frame2.locator("input[name='mytext2']").fill("frame2");
    await ScreenshotUtil.capture(page, testInfo, 'Filled text in iframe2');

    const frame3 = page.frameLocator("frame[src='frame_3.html']");
    await frame3.locator("input[name='mytext3']").fill("frame3");
    await ScreenshotUtil.capture(page, testInfo, 'Filled text in iframe3');

    const frame4 = page.frameLocator("frame[src='frame_4.html']");
    await frame4.locator("input[name='mytext4']").fill("frame4");
    await ScreenshotUtil.capture(page, testInfo, 'Filled text in iframe4');

  });

  test.only('@smoke @login @test017 Validate multiple tabs in playwright', async ({ page }, testInfo) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator("a:has-text('OrangeHRM, Inc')").click()
    ]); 

    const tabElement = await newPage.locator("img[src='/public/_resources/themes/orangehrm/dist/images/OrangeHRM_Logo.svg']");
    await expect(tabElement).toBeVisible();
    await ScreenshotUtil.capture(newPage, testInfo, 'New Tab with OrangeHRM Logo');

    await page.bringToFront();
    await page.locator("input[placeholder='Username']").fill("Admin");
    await page.locator("input[placeholder='Password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    const dashboardElement = await page.locator("p.oxd-userdropdown-name");
    await expect(dashboardElement).toBeVisible();
    await ScreenshotUtil.capture(page, testInfo, 'Dashboard after Login');
  
  });







});

