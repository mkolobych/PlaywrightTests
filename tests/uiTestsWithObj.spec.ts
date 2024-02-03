import { test, expect } from '@playwright/test';
import { NavBar } from '../page-objects/navigationBar';
import { SchedulePage } from '../page-objects/lvivSchedulePage';
import { LoginPage } from '../page-objects/loginPage';

let email = "mkolobich@gmail.com";
let password = "asdfwsx12";

test.beforeEach(async ({ page }) => {
    await page.goto("https://planetakino.ua/movies/");
});

test.describe("top non-navigational menu", () => {
    test("User can select Lviv", async ({ page }) => {
        const navigationBar = new NavBar(page);
        await navigationBar.getCity.click();
        await navigationBar.selectLviv.click();

        await expect(navigationBar.getLviv).toBeVisible();
        await expect(navigationBar.getTitelLviv).toBeVisible();
    });
});

test.describe("Lviv Schadule Page", () => {
    test("User can view the schedule", async ({ page }) => {
        const navigationBar = new NavBar(page);
        const lvivSchedulePage = new SchedulePage(page)
        await navigationBar.getCity.click();
        await navigationBar.selectLviv.click();
        await lvivSchedulePage.getSchedule.click();

        await expect(lvivSchedulePage.getScheduleTitel).toBeVisible();
    });
});

test.describe("login flows", () => {
    test("User can log in/log out from the personal office", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.getLoginPage.click();
        await loginPage.login(email, password);
        await loginPage.myProfile.click();

        await expect(loginPage.myProfileTitel).toHaveText("Особистий кабінет");
        await loginPage.submitLogOut.click();
        await expect(page.getByText('Реєструйся у клубі Планети Кіно!')).toHaveText("Реєструйся у клубі Планети Кіно!");
    });

    test("Required fields", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.getLoginPage.click();
        await loginPage.submitLogIn.click();

        await expect(loginPage.requiredEmail).toHaveText("Необхідно заповнити це поле");
        await expect(loginPage.requiredPassword).toHaveText("Необхідно заповнити це поле");
    });
});