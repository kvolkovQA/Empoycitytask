import { test } from '@playwright/test';
import * as allure from "allure-js-commons"
import { FormPage } from './../pages/FormPage';
import { RequiredFieldsData, AllFieldsData } from './../types/PractiseFormTypes' 
import { NavigationPage } from '../pages/NavigationPage';

const requiredFieldsValidData: RequiredFieldsData = {
  firstName: 'Student',
  lastName: 'User',
  email: 'StudentUser@mail.com',
  gender: 'Male',
  mobile: '8999887766'
};

const allFieldsValidData: AllFieldsData = {
  firstName: 'Student',
  lastName: 'User',
  email: 'StudentUser@mail.com',
  gender: 'Male',
  mobile: '8999887766',
  dateofbirth: '2000-12-31',
  subjects: 'Math',
  hobbies: ['Sports', 'Music'],
  pictures: 'TestData/test.png',
  currentaddress: 'Current Fake Adress 123',
  state: 'NCR',
  city:  'Delhi',
};

test('Тест с заполнением только обязательных полей', async ({ page }) => {
  await allure.story("Positive Cases");
  const navpage = new NavigationPage(page)
  const formpage = new FormPage(page)
  await allure.step("Открыть страницу Practice Form", async () => {
    await navpage.navigateTo('Practice Form')
  })
  await allure.step("Заполнить форму, только обязатльные поля", async () => {
    await formpage.fillForm(requiredFieldsValidData)
  })
  await allure.step("Отправить форму", async () => {
    await formpage.submitForm()
  })
  await allure.step("Проверить статус отправки - успешно", async () => {
    await formpage.veirfySuccessSubmitting()
  })
  await allure.step("Сделать скриншот резульата", async () => {
    await formpage.makeScreenshot({
    path: 'Screenshots/screenshot_test_1.png'
    })
  })
});

test('Тест с заполнением всех полей', async ({ page }) => {
  await allure.story("Positive Cases");
  const navpage = new NavigationPage(page)
  const formpage = new FormPage(page)
  await allure.step("Открыть страницу Practice Form", async () => {
    await navpage.navigateTo('Practice Form')
  })
  await allure.step("Заполнить форму, все поля", async () => {
    await formpage.fillForm(allFieldsValidData)
  })
  await allure.step("Отправить форму", async () => {
    await formpage.submitForm()
  })
  await allure.step("Проверить статус отправки - успешно", async () => {
    await formpage.veirfySuccessSubmitting()
  })
  await allure.step("Сделать скриншот резульата", async () => {
    await formpage.makeScreenshot({
    path: 'Screenshots/screenshot_test_2.png'
    })
  })
});

test('Тест валидации поля Email', async ({ page }) => {
  await allure.story("Negative Cases");
  const navpage = new NavigationPage(page)
  const formpage = new FormPage(page)
  await allure.step("Открыть страницу Practice Form", async () => {
    await navpage.navigateTo('Practice Form')
  })
  await allure.step("Заполнить форму, обязатльные поля с некорректным email", async () => {
    await formpage.fillForm({
      firstName: 'Student',
      lastName: 'User',
      email: 'StudentUsermail.com',
      gender: 'Male',
      mobile: '8999887766'
    })
  })
  await allure.step("Отправить форму", async () => {
    await formpage.submitForm()
  })
  await allure.step("Проверить статус отправки - успешно", async () => {
    await formpage.veirfyValidationError(['email'])
  })
  await allure.step("Сделать скриншот резульата", async () => {
    await formpage.makeScreenshot({
    path: 'Screenshots/screenshot_test_3.png'
    })
  })
});

test('Тест валидации поля Mobile', async ({ page }) => {
  await allure.story("Negative Cases");
  const navpage = new NavigationPage(page)
  const formpage = new FormPage(page)
  await allure.step("Открыть страницу Practice Form", async () => {
    await navpage.navigateTo('Practice Form')
  })
  await allure.step("Заполнить форму, обязатльные поля с некорректным Mobile", async () => {
    await formpage.fillForm({
      firstName: 'Student',
      lastName: 'User',
      email: 'Student@Usermail.com',
      gender: 'Male',
      mobile: '89998877'
    })
  })
  await allure.step("Отправить форму", async () => {
    await formpage.submitForm()
  })
  await allure.step("Проверить статус отправки - успешно", async () => {
    await formpage.veirfyValidationError(['mobile'])
  })
  await allure.step("Сделать скриншот резульата", async () => {
    await formpage.makeScreenshot({
    path: 'Screenshots/screenshot_test_4.png'
    })
  })
});

test('Тест валидации пропуск заполнения поля Firstname и Mobile', async ({ page }) => {
  await allure.story("Negative Cases");
  const navpage = new NavigationPage(page)
  const formpage = new FormPage(page)
  await allure.step("Открыть страницу Practice Form", async () => {
    await navpage.navigateTo('Practice Form')
  })
  await allure.step("Заполнить форму, обязатльные поля c пропуском Firstname и Mobile", async () => {
    await formpage.fillForm({
      lastName: 'User',
      email: 'Student@Usermail.com',
      gender: 'Male',
    })
  })
  await allure.step("Отправить форму", async () => {
    await formpage.submitForm()
  })
  await allure.step("Проверить статус отправки - успешно", async () => {
    await formpage.veirfyValidationError([
        'username',
        'mobile'
      ])
  })
  await allure.step("Сделать скриншот резульата", async () => {
    await formpage.makeScreenshot({
    path: 'Screenshots/screenshot_test_5.png'
    })
  })
});