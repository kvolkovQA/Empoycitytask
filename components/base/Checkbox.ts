import { Control } from "./Control";

export class Checkbox extends Control{

    async check(){
        await this.locator.check({force: true})
    }
    async uncheck(){
        await this.locator.uncheck()
    }
}