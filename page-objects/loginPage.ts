import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly getLoginPage: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly submitLogIn: Locator;
    readonly myProfile: Locator;
    readonly myProfileTitel: Locator;
    readonly submitLogOut: Locator;
    readonly requiredEmail: Locator;
    readonly requiredPassword: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getLoginPage = page.getByRole('link', { name: 'Вхід' });
        this.emailField = page.locator('xpath=//input[@id="loginform-login"]');
        this.passwordField = page.locator('xpath=//input[@id="loginform-password"]');
        this.submitLogIn = page.locator('xpath=//*[@id="login-form"]/div[2]/button');
        this.myProfile = page.getByRole('link', { name: 'M 0 бонусів' });
        this.myProfileTitel = page.getByRole('heading', { name: 'Особистий кабінет' });
        this.submitLogOut = page.locator('.logout');
        this.requiredEmail = page.getByText('Необхідно заповнити це поле').first();
        this.requiredPassword = page.getByText('Необхідно заповнити це поле').nth(1);
    }

    async login(useremail: string, password: string) {
        await this.emailField.fill(useremail);
        await this.passwordField.fill(password);
        await this.submitLogIn.click();
    }
};