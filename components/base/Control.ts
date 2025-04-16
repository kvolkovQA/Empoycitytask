import { Locator } from '@playwright/test';

export abstract class Control {
    protected readonly _locator: Locator;
  
    constructor(locator: Locator) {
        this._locator = locator;
      }

      get locator() {
        return this._locator;
      }
  
    async isVisible(): Promise<boolean> {
      return await this.locator.isVisible();
    }
  
    async isEnabled(): Promise<boolean> {
      return await this.locator.isEnabled();
    }
  
    async waitForVisible(timeout = 5000): Promise<void> {
      await this.locator.waitFor({ state: 'visible', timeout });
    }
  }