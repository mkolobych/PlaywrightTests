import { expect, type Locator, type Page } from '@playwright/test';

export class SchedulePage {
    readonly page: Page;
    readonly getSchedule: Locator;
    readonly getScheduleTitel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getSchedule = page.locator('xpath=/html/body/div[1]/header/div/div[1]/ul/li[1]/a');
        this.getScheduleTitel = page.locator('xpath=//*[@id="showtime-page"]/h1');
    }
};