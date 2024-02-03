import { expect, type Locator, type Page } from '@playwright/test';

export class NavBar {
    readonly page: Page;
    readonly getCity: Locator;
    readonly selectLviv: Locator;
    readonly getLviv: Locator;
    readonly getTitelLviv: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getCity = page.locator('xpath=//span[@id="currentCitySpan"]');
        this.selectLviv = page.locator('xpath=//ul[@id="citylist"]/li[5]/span');
        this.getLviv = page.locator('xpath=//span[@id="currentCitySpan"]');
        this.getTitelLviv = page.getByRole('heading', { name: 'Афіша Планети Кіно в Львові (' });
    }
};