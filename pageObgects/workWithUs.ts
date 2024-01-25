import { expect, type Locator, type Page } from '@playwright/test';

export class WorkwithUsPage {
    readonly page: Page;
    readonly dotbutton: Locator;
    readonly workWithUsbutton: Locator;
    readonly workHeaderLeft: Locator;
    readonly workHeaderRight: Locator;
    readonly aboutThePlanet: Locator;
    readonly vacanciesButton: Locator;
    readonly vacancyHeader: Locator;
    readonly lvivVacancyButton: Locator;
    readonly lvivForumFilter: Locator;
    readonly lvivKingCrossFilter: Locator;
    readonly lvivleolendFilter: Locator;
    readonly leaveResumeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dotbutton = page.locator('//a[@class="h-m__item-link d-toggle"]');
        this.workWithUsbutton = page.locator('xpath=//a[contains(text(),"Робота у нас")]');
        this.workHeaderLeft = page.locator('xpath=//div[@class="home-intro-left-title"]//span[1]');
        this.workHeaderRight = page.locator('xpath=//div[@class="home-intro-right-title"]//span[1]');
        this.aboutThePlanet = page.locator('xpath=//h2[contains(text(),"Про Планету")]');
        this.vacanciesButton = page.locator('xpath=//div[@class="home-intro-counter"]');
        this.vacancyHeader = page.locator('xpath=//h1[@class="h1"]');
        this.lvivVacancyButton = page.locator('xpath=//li[contains(@class,"vacancies-nav--cities--item")]//a[contains(text(),"Львів")]');
        this.lvivForumFilter = page.locator('xpath=//*[@id="js-vacancies--places"]/li[2]/a');
        this.lvivKingCrossFilter = page.locator('xpath=//*[@id="js-vacancies--places"]/li[3]/a');
        this.lvivleolendFilter = page.locator('xpath=//*[@id="js-vacancies--places"]/li[4]/a');
        this.leaveResumeButton = page.locator('xpath=//a[contains(@class,"cv-button")]//span[contains(text(),"Залиш резюме")]');
    }
};