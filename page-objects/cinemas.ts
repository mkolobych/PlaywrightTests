import { expect, type Locator, type Page } from '@playwright/test';

export class cinemasPage {
    readonly page: Page;
    readonly threeDotsButton: Locator;
    readonly getCinemas: Locator;
    readonly getTitelLvivKingCross: Locator;
    readonly getTextLvivKingCross: Locator;
    readonly lvivKingCrossHereButton: Locator;
    readonly firstLvivPlanetCinema: Locator;
    readonly lvivKingCrossAdress: Locator;
    readonly howToGetThereButton: Locator;
    readonly ticketPriceButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.threeDotsButton = page.locator('xpath=//a[@class="h-m__item-link d-toggle"]');
        this.getCinemas = page.locator('xpath=//ul[@id="addon"]/li[2]/a');
        this.getTitelLvivKingCross = page.locator('xpath=//a[contains(text(),"Львів (Forum Lviv)")]');
        this.getTextLvivKingCross = page.locator('xpath=//div[@class="col-md-9 col-xs-12"]//p[contains(text(),"«King Cross Leopolis»")]');
        this.lvivKingCrossHereButton = page.locator('xpath=//a[@href="/theatres/planeta-lvov/"][contains(text(),"тут")]');
        this.firstLvivPlanetCinema = page.locator('xpath=//div[@class="slider-block__item item active"]//p[@class="slider-block__movie-title"][contains(text(),"Перша львівська Планета Кіно")]');
        this.lvivKingCrossAdress = page.locator('xpath=//p[contains(text(),"Львівська область, с. Сокільники, вул. Стрийська, ")]');
        this.howToGetThereButton = page.locator('xpath=//a[@href="/theatres/planeta-lvov/location/"]');
        this.ticketPriceButton = page.locator('xpath=//a[@href="/theatres/planeta-lvov/prices/"]');
    }
};