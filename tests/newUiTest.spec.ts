import { test, expect } from '@playwright/test';
import { cinemasPage } from '../page-objects/cinemas';

test.beforeEach(async ({ page }) => {
    await page.goto("https://planetakino.ua/movies/");
});

test.describe("threeDots drop-down", () => {
    test("User can see info about Lviv", async ({ page }) => {
        const cinemas = new cinemasPage(page);
        await cinemas.threeDotsButton.click();
        await cinemas.getCinemas.click();

        await expect(cinemas.getTitelLvivKingCross).toBeVisible();
        await expect(cinemas.getTextLvivKingCross).toBeVisible();
    });

    test("User can see info about Lviv planetakino", async ({ page }) => {
        const cinemas = new cinemasPage(page);
        await cinemas.threeDotsButton.click();
        await cinemas.getCinemas.click();
        await cinemas.lvivKingCrossHereButton.click();

        await expect(page).toHaveURL("https://planetakino.ua/theatres/planeta-lvov/");
        await expect(cinemas.firstLvivPlanetCinema).toHaveText("Перша львівська Планета Кіно 6 залів CINETECH+, IMAX, попкорн-бар");
    });

    test("User can see «King Cross Leopolis» address", async ({ page }) => {
        const cinemas = new cinemasPage(page);
        await cinemas.threeDotsButton.click();
        await cinemas.getCinemas.click();

        await expect(cinemas.lvivKingCrossAdress).toHaveText("Львівська область, с. Сокільники, вул. Стрийська, 30, ТРЦ «King Cross Leopolis»");
        await expect(cinemas.howToGetThereButton).toHaveText("Як дістатися?");
        await expect(cinemas.ticketPriceButton).toHaveText("Вартість квитків");
    });
});