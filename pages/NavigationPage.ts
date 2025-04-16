import { BasePage } from "./BasePage"

export class NavigationPage extends BasePage{

    async navigateTo(pageName:string){
        if(pageName == 'Practise Form'){
            await this.page.goto('https://demoqa.com/automation-practice-form')
        } else {
            await super.navigateBaseUrl()
        }
    }
}