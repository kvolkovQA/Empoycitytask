import {Page} from '@playwright/test'

export abstract class BasePage{
    constructor (readonly page:Page){        
    }

    async navigateBaseUrl(){
        await this.page.goto('')
    }
}