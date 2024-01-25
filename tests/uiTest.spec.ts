import { test, expect } from '@playwright/test';
import { WorkwithUsPage } from '../pageObgects/workWithUs';

test.beforeEach(async ({ page }) => {
    await page.goto("https://planetakino.ua/movies/");
});

test.describe("Work with us page", () => {
    test("User can move to the work with us page", async ({ page }) => {
        const workWithUs = new WorkwithUsPage(page);
        await workWithUs.dotbutton.click();
        await workWithUs.workWithUsbutton.click();

        await expect(page).toHaveURL("https://planetakino.ua/about/vacancy/");
        await expect(page).toHaveTitle("Вакансії Main");
        await expect(workWithUs.workHeaderLeft).toHaveText("Станьчастиною");
        await expect(workWithUs.workHeaderRight).toHaveText("суперкоманди!");
        await expect(workWithUs.aboutThePlanet).toBeVisible();
    });

    test("User can see vacancies", async ({ page }) => {
        const workWithUs = new WorkwithUsPage(page);
        await workWithUs.dotbutton.click();
        await workWithUs.workWithUsbutton.click();
        await workWithUs.vacanciesButton.click();

        await expect(page).toHaveURL("https://planetakino.ua/vacancies/");
        await expect(page).toHaveTitle("Vacancy");
        await expect(workWithUs.vacancyHeader).toBeVisible();
        await expect(workWithUs.lvivVacancyButton).toHaveText("Львів");
    });

    test("User can see vacancies  in the Lviv", async ({ page }) => {
        const workWithUs = new WorkwithUsPage(page);
        await workWithUs.dotbutton.click();
        await workWithUs.workWithUsbutton.click();
        await workWithUs.vacanciesButton.click();
        await workWithUs.lvivVacancyButton.click();

        await expect(page).toHaveTitle("Vacancy");
        await expect(workWithUs.lvivForumFilter).toBeVisible();
        await expect(workWithUs.lvivKingCrossFilter).toBeVisible();
        await expect(workWithUs.lvivleolendFilter).toBeVisible();
        await expect(workWithUs.leaveResumeButton).toHaveText("Залиш резюме");
    });
});