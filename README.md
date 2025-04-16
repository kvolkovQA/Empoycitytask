# app-users
This is a test E2E Repo for automation scripts.

## Setup project
1) clone the repository

2) Install Playwright
```bash
npm init playwright@latest
```
3) Install Allure
```bash
npm install --save-dev @playwright/test allure-playwright
```
4) Run tests 
```bash
npx playwright test
```
By default (pw config file) tests will be runned for all 3 browsers

## Notes

### Данная реализация автотестов была выполнена на основе полученного задания и указанных критериев.

### Критерии оценки не были выполнены в полном и желаемом объеме, так как это требует масштабных временных затрат.

### Использование интерфейса типизации для заполнении формы не является лучшим решением и не имеет гибкости которую можно получить если вынести типизацию в отдельные методы с локальной валидацие (ИМХО)
