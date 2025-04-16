import { Control } from "./Control";

export class DatePicker extends Control{
    private readonly yearlist = this.locator.locator('.react-datepicker__year-select');  
    private readonly mothlist = this.locator.locator('.react-datepicker__month-select');  

    async selectDate(date: string){
        const month = await this.determineMonth(date.slice(5,7))
        await this.selectYear(date.slice(0, 4))
        await this.selectMonth(month)
        await this.selectDay(date.slice(8, 10))

    }

    async selectDay(day: string){
        await this.locator.locator('.react-datepicker__day:not(.react-datepicker__day--outside-month)').getByText(day, {exact: true}).click()
    }
    async selectMonth(month: string){
        await this.openMonthList()
        await this.mothlist.selectOption(month)
    }

    async openMonthList(){
        await this.mothlist.click()
    }

    async selectYear(year: string){
        await this.openYearList()
        await this.yearlist.selectOption(year);
    }

    async openYearList(){
        await this.yearlist.click()
    }

    async determineMonth(month: string){
        const months: Record<string, string> = {
            "01": "January",
            "02": "February",
            "03": "March",
            "04": "April",
            "05": "May",
            "06": "June",
            "07": "July",
            "08": "August",
            "09": "September",
            "10": "October",
            "11": "November",
            "12": "December"
        };
        if (!(month in months)) {
            throw new Error(`Invalid month number: ${month}`);
        }
        return months[month];
    }
}