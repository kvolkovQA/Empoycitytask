import {expect} from '@playwright/test'
import { BasePage } from './BasePage';
import { PracticeForm } from '../components/PracticeForm';
import { SuccessForm } from '../components/SuccessForm';
import { FlexibleFormData } from '../types/PractiseFormTypes';

export class FormPage extends BasePage {
    private readonly PracticeFromComponent = new PracticeForm(this.page.locator('form'));
    private readonly SuccessFromComponent = new SuccessForm(this.page.locator('.modal-dialog'));
    private readonly mainComponent = this.page.locator('div .practice-form-wrapper');    
    //Child
    private readonly header = this.mainComponent.locator('h1');
    private readonly subheader = this.mainComponent.locator('h5');
     private readonly validError =  this.mainComponent.locator('.was-validated .form-control:invalid') 

    async fillForm(data: FlexibleFormData){
        await this.initialize()
        await this.PracticeFromComponent.fillForm(data)
    }

    async submitForm(){
        await this.PracticeFromComponent.submitForm()
    }

    async veirfySuccessSubmitting(){
        // await this.verifyResponseStatus() example of implementation
        await this.SuccessFromComponent.verifyBaseElements()
    }

    async veirfyValidationError(fields: string[]){
        // This is Stub can be updated to verifying each field
        for(let field in fields){
        await expect(this.validError.nth(parseInt(field))).toBeVisible() 
        }
    }

    async verifyResponseStatus(){
        await this.page.waitForResponse('**/api/successsubmit', { timeout: 5000 });
    }

    async makeScreenshot(data:any){
        await this.page.screenshot({ path:data.path})
    }

    private async initialize(){
        await expect(this.header).toBeVisible()
        await expect(this.header).toContainText('Practice Form')
        await expect(this.subheader).toBeVisible()
        await expect(this.subheader).toContainText('Student Registration Form')
    }
}