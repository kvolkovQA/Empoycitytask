import { Control } from "./Control";

export class Select extends Control{

    async select(value: string){
        await this.openDDMenu()
        await this.locator.getByText(value, { exact: true }).click()

    }

    async openDDMenu(){
        await this.locator.click()
    }
}