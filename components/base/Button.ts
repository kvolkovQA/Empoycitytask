import { Control } from "./Control";

export class Button extends Control{

    async click(){
        await this.locator.click()
    }

    async mouseover(){
        await this.locator.dispatchEvent('mouseover')
    }

    async hover(){
        await this.locator.hover()
    }
}