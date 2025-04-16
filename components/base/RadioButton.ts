import { Control } from "./Control";

export class RadioButton extends Control{

    async select(){
        await this.locator.check({force: true})
    }
}