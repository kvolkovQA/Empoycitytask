import {Control} from "./Control";

export class Input extends Control{

    async fill(value:string){
        await this.locator.fill(value)
    }
    async type(value:string){
        await this.locator.pressSequentially(value)
    }
}