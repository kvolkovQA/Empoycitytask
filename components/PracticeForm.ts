import {expect, Locator} from '@playwright/test'
import { Button } from './base/Button';
import { Input } from './base/Input';
import { TextArea } from './base/Textarea';
import { RadioButton } from './base/RadioButton';
import { Checkbox } from './base/Checkbox';
// import { DatePicker } from '../components/base/DatePicker';
import { Select } from './base/Select';
import { DatePicker } from './base/DatePicker';
import { FlexibleFormData } from '../types/PractiseFormTypes';

export class PracticeForm {
    protected readonly formlocator: Locator
    protected readonly firstNameInput: Input;    
    protected readonly lastNameInput: Input;    
    protected readonly emailInput: Input;    
    protected readonly mobileInput: Input;    
    protected readonly subjectsInput: Input;    
    protected readonly currentAddressTextarea: TextArea;    
    protected readonly dateofBirthInput: Input;    
    protected readonly dateofBirthDatePicker: DatePicker;    
    protected readonly submitButton: Button;    
    protected readonly chooseFileButton: Button;    
    protected readonly validError: Locator;   

    constructor(locator: Locator) {
        this.formlocator = locator;

        //Input field
        this.firstNameInput = new Input(this.formlocator.locator('input[id="firstName"]'))
        this.lastNameInput = new Input(this.formlocator.locator('input[id="lastName"]'))
        this.emailInput = new Input(this.formlocator.locator('input[id="userEmail"]'))
        this.mobileInput = new Input(this.formlocator.locator('input[id="userNumber"]'))
        this.subjectsInput = new Input(this.formlocator.locator('[id="subjectsContainer"] input'))
        this.currentAddressTextarea = new TextArea(this.formlocator.locator('textarea[id="currentAddress"]'))
        //Date picker
        this.dateofBirthInput = new Input(this.formlocator.locator('[id="dateOfBirthInput"]'))
        this.dateofBirthDatePicker = new DatePicker(this.formlocator.locator('.react-datepicker')) 
        //Button
        this.submitButton = new Button(this.formlocator.getByRole('button', {name: 'Submit'}))    
        this.chooseFileButton = new Button(this.formlocator.getByLabel('Select picture'))   
        }
        //Radiobutton
        getRadioButton(radioName: string): RadioButton {
            return new RadioButton(this.formlocator.getByRole('radio', {name: radioName, exact: true}))
        }
        //Checkbox
        getCheckbox(chbxName: string): Checkbox {
            return new Checkbox(this.formlocator.getByRole('checkbox', {name: chbxName }))
        }
        //Select
        getSelect(selectName: string): Select {
            return new Select(this.formlocator.locator(`[id='${selectName}']`))
        }

        async fillForm(data: FlexibleFormData){
            if("firstName" in data) await this.firstNameInput.fill(data.firstName)
            if("lastName" in data) await this.lastNameInput.fill(data.lastName)
            if("email" in data) await this.emailInput.fill(data.email)
            if("mobile" in data) await this.mobileInput.fill(data.mobile)
            if("gender" in data) await this.getRadioButton(data.gender).select()
            if("dateofbirth" in data) await this.selectDate(data.dateofbirth)
            if("subjects" in data) await this.selectSubject(data.subjects)
            if("hobbies" in data) await this.selectHobbies(data.hobbies)
            if("pictures" in data) await this.uploadPicture(data.pictures)
            if("currentaddress" in data) await this.currentAddressTextarea.fill(data.currentaddress)
            if("state" in data) await this.getSelect('state').select(data.state)
            if("city" in data) await this.getSelect('city').select(data.city)
        }

        async selectDate(date: string){
            await this.openDatePicker()
            await this.dateofBirthDatePicker.selectDate(date)
        }

        async openDatePicker(){        
            await this.dateofBirthInput.locator.click()
        }

        async selectSubject(tag: string){
            await this.subjectsInput.fill(tag)
            await this.formlocator.press('Enter')
        }

        async selectHobbies(hobbylist:string[]){
            for (const hobby of hobbylist) {
                await this.getCheckbox(hobby).check();
                }
        }

        async uploadPicture(picturePath: string){
            await this.chooseFileButton.locator.setInputFiles(picturePath)
        }

        async submitForm(){
            await this.submitButton.click()
        }

}