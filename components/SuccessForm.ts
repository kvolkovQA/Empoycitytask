import {expect, Locator} from '@playwright/test'
import { Button } from './base/Button';
import { Table } from './base/Table';

export class SuccessForm {
    protected readonly modallocator: Locator
    protected readonly header: Locator;
    protected readonly table: Table;
    protected readonly closeButton: Button;

    constructor(locator: Locator) {
        this.modallocator = locator        

    //Input field
    this.header = this.modallocator.locator('.h4');
    this.table = new Table(this.modallocator.locator('.table'));
    this.closeButton = new Button(this.modallocator.getByRole('button', {name: 'Close'}))
    }

    async verifyBaseElements(){
        expect(this.header).toBeVisible()
        await expect(this.closeButton.locator).toBeVisible()
    }
}
    