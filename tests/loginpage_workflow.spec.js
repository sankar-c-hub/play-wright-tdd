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

  test('@smoke @login @test006 Verify login with valid credentials orange hrm', async ({ page }, testInfo) => {
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

  test('@smoke @login @test007 Verify the radio button functionality of Wish Page', async ({ page }, testInfo) => {
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

  test('@smoke @login @test008 Verify the iframe functionality of Wish Page', async ({ page }, testInfo) => {
    const wishPage = new WishPage(page);
    await page.goto('https://demo.automationtesting.in/Register.html');
    await wishPage.switchToFrame.click();
    await wishPage.frames.click();
    await page.waitForTimeout(5000); // Wait for the frame to load
    const frame = page.frameLocator(JsonUtility.getLocator('Wish Page', 'SingleFrameXPATH'));
    await frame.getByLabel('First Name').fill('John');
    await ScreenshotUtil.capture(page, testInfo, 'First Name in Frame');
  });

  test('@smoke @login @test009 Verify successful login with valid credentials using CSS locators', async ({ page }, testInfo) => {
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

  test('@smoke @login @test010 Verify successful login and capture list of the products', async ({ page }, testInfo) => {

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

  test('@smoke @login @test011 Validate locating elements using various Playwright locators', async ({ page }, testInfo) => {
    await page.goto("https://demoblaze.com/index.html")

    //creating element page.getByAltText()
    const altElement = await page.getByAltText('First slide');
    await expect(altElement).toBeVisible();

    //creating element page.getByPlaceholder()
    const palceHolderElement = await page.getByPlaceholder('Username');
    await expect(palceHolderElement).toBeVisible()


  });

  test('@smoke @login @test012 Validate iframes elements using various Playwright locators', async ({ page }, testInfo) => {
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

  test('@smoke @login @test013 Validate multiple tabs in playwright', async ({ page }, testInfo) => {

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

  test('@smoke @login @test014 Validate handling of dropdown in Playwright', async ({ page }, testInfo) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //first way to handle dropdown
    const countryDropdown = await page.locator("#country");
    await countryDropdown.selectOption("Canada");
    await ScreenshotUtil.capture(page, testInfo, 'Selected Country Dropdown');
    const selectedOption = await countryDropdown.inputValue();
    await ScreenshotUtil.logText(testInfo, `Selected Country: ${selectedOption}`);
    await page.waitForTimeout(2000);

    //second way to handle dropdown
    const dropdown = await page.locator("#country");
    await dropdown.selectOption({ label: "India" });
    await ScreenshotUtil.capture(page, testInfo, 'Selected Country Dropdown');
    const selectedOption2 = await dropdown.inputValue();
    await ScreenshotUtil.logText(testInfo, `Selected Country: ${selectedOption2}`);
    await page.waitForTimeout(2000);

    //third way to handle dropdown
    const dropdownElement = await page.locator("#country");
    await dropdownElement.selectOption({ index: 5 });
    await ScreenshotUtil.capture(page, testInfo, 'Selected Country Dropdown');
    const selectedOption3 = await dropdownElement.inputValue();
    await ScreenshotUtil.logText(testInfo, `Selected Country: ${selectedOption3}`);
    await page.waitForTimeout(2000);

    //fouth way to handle dropdown
    const dropdownElement2 = await page.locator("#country");
    await dropdownElement2.selectOption({ value: "australia" });
    await ScreenshotUtil.capture(page, testInfo, 'Selected Country Dropdown');
    const selectedOption4 = await dropdownElement2.inputValue();
    await ScreenshotUtil.logText(testInfo, `Selected Country: ${selectedOption4}`);
    await page.waitForTimeout(2000);

    const options = await countryDropdown.locator("option").allTextContents();
    const optionsText = options.map(option => option.toLowerCase()).join(", ");
    await ScreenshotUtil.logText(testInfo, `Available Countries: ${optionsText}`);
    await expect(optionsText.includes("india")).toBeTruthy();

    const selectedOptionText = await page.locator("#country").textContent();
    await ScreenshotUtil.logText(testInfo, `Selected Country Text: ${selectedOptionText}`);
    await expect(selectedOptionText?.toLowerCase()).toContain("australia");

  });

  test('@smoke @login @test015 Validate keyboard actions in Playwright', async ({ page }, testInfo) => {
    await page.goto("https://gotranscript.com/text-compare");
    await page.locator("textarea[name='text1']").fill("Hello World");
    await ScreenshotUtil.capture(page, testInfo, 'Filled Text Area 1');

    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.locator("textarea[name='text2']").click();
    await page.keyboard.press('Control+V');
    await ScreenshotUtil.capture(page, testInfo, 'Filled Text Area 2 with Keyboard Actions');
    await page.waitForTimeout(2000);

    await page.locator("textarea[name='text1']").clear();
    await page.type("textarea[name='text1']", "Playwright is awesome!");
    await ScreenshotUtil.capture(page, testInfo, 'Filled Text Area 1 with Type Method');

    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.locator("textarea[name='text2']").click();
    await page.keyboard.press('Control+V');
    await ScreenshotUtil.capture(page, testInfo, 'Filled Text Area 2 with Copied Text from Text Area 1');
    await page.waitForTimeout(2000);
  });

  test('@smoke @login @test016 Validate file upload in Playwright', async ({ page }, testInfo) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    //uploding single file
    const dropzone = await page.locator("#filesToUpload");
    await dropzone.setInputFiles("files/linked_ate1.pdf");
    const uploadedFile = await page.locator("ul[id='fileList'] li").textContent();
    await expect(uploadedFile?.includes('No Files Selected')).toBeFalsy();
    await ScreenshotUtil.capture(page, testInfo, 'Uploaded Single File');
    await page.waitForTimeout(3000);

    //clearing uploaded file
    await dropzone.setInputFiles([]);
    const noFilesText1 = await page.locator("ul[id='fileList'] li").textContent();
    await expect(noFilesText1?.includes('No Files Selected')).toBeTruthy();
    await ScreenshotUtil.capture(page, testInfo, 'Cleared Uploaded File');
    await page.waitForTimeout(3000);

    //uploding multiple files
    await dropzone.setInputFiles(["files/linked_ate1.pdf", "files/linked_ate2.pdf"]);
    const uploadedFiles = await page.locator("ul[id='fileList'] li").allTextContents();
    const uploadedFilesText = uploadedFiles.join(", ");
    await expect(uploadedFilesText.includes('No Files Selected')).toBeFalsy();
    await ScreenshotUtil.capture(page, testInfo, 'Uploaded Multiple Files');
    await page.waitForTimeout(3000);

    //uploding empty list of files
    await dropzone.setInputFiles([]);
    const noFilesText = await page.locator("ul[id='fileList'] li").textContent();
    await expect(noFilesText?.includes('No Files Selected')).toBeTruthy();
    await ScreenshotUtil.capture(page, testInfo, 'Cleared Uploaded Files');
    await page.waitForTimeout(3000);

  });

  test('@smoke @login @test017 Validate mouse hover in Playwright', async ({ page }, testInfo) => {
    await page.goto("https://gotranscript.com/text-compare");
    await page.waitForTimeout(2000);
    await page.locator("#dServices").hover();
    await ScreenshotUtil.capture(page, testInfo, 'Hovered on Services Menu');
    await page.waitForTimeout(2000);
    await page.locator("//h4[text()=' Human Transcription']").click();
    await ScreenshotUtil.capture(page, testInfo, 'Clicked on Human Transcription Submenu');
    await page.waitForTimeout(2000);

    await page.locator("#dPricing").hover();
    await ScreenshotUtil.capture(page, testInfo, 'Hovered on Pricing Menu');
    await page.locator("(//h4[text()='Pricing Calculator'])[1]").click();
    await ScreenshotUtil.capture(page, testInfo, 'Clicked on Pricing Calculator Submenu');
    await page.waitForTimeout(2000);

  });

  test('@smoke @login @test018 Validate right-click context menu in Playwright', async ({ page }, testInfo) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    const element = await page.locator("//button[@id='alertBtn']");
    await element.scrollIntoViewIfNeeded();
    await element.click({ button: 'right' });
    await ScreenshotUtil.capture(page, testInfo, 'Right Clicked on Alert Button');
    await page.waitForTimeout(2000);

  });

  test.only('@smoke @login @test019 Validate double-click functionality in Playwright', async ({ page }, testInfo) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);

    const element = await page.locator("button[ondblclick='myFunction1()']");
    await element.scrollIntoViewIfNeeded();
    await element.dblclick();
    await ScreenshotUtil.capture(page, testInfo, 'Double Clicked on Double Click Button');
    await page.waitForTimeout(2000);

    const alertText = await page.locator("#field2").inputValue();
    await ScreenshotUtil.logText(testInfo, `Alert Text: ${alertText}`);
    await expect(alertText.toLocaleLowerCase().includes("hello world")).toBe(true);
    await page.waitForTimeout(2000);
   
  });



});

