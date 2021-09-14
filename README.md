# Приложение Калькулятор

### на чистом JavaScript

## Описание

Требуется инициализировать базовое JS приложение (без использования каких-либо библиотек и фреймворков). Для этого приложения создать в том числе Webpack конфиг, который позволяет запускать это приложение с оптимизированным кодом. Webpack-конфиг сделать с оптимизации кода. То есть на выходе в билде должно получиться 2 файла: HTML и JS. Вне зависимости от того, сколько файлов было на этапе разработки.

Суть приложения: реализовать свой калькулятор с проверкой всех условий. Пример дизайна калькулятора и полное ТЗ в [файле](https://docs.google.com/document/d/1j8DnTnRSNoRBdYtKu3Rgk1STLso4X5Rev2-oEyxMsK8/edit#heading=h.rtfo3o71ktll).

---

## Запуск приложения

1. В терминале корневого каталога приложения ввести npm run build.
2. Из папки /dist корневого каталога приложения запустить файл index.html в браузере.

---

## Структура файлов приложения

**_В корневом каталоге находятся файлы:_**

    - .eslintrc.json - конфигурационный файл Eslint;
    - .gitignore - нужен для скрытия файлов и папок от системы контроля версий Git;
    - .prettierrs - конфигурациооный файл Prettier;
    - jest.config.js - конфигурационный файл тестирования Jest;
    - package-lock.json и package.json - конфигурационные файлы пакетов npm;
    - test.js - файл тестирования работы калькулятора с использованием jest;
    - webpack.config.js - конфигурационный файл WebPack.

**_В папке ./src/app - файлы:_**

    - index.js - главный JavaScript файл.

**_В папке ./src/app/modules - файлы:_**

    - JavaScript файлы - модули приложения

**_В папке ./src/app/modules/all_commands - файлы:_**

    - JavaScript файлы - модули приложения(команды).

**_В папке ./src/app/modules/themes - файлы:_**

    - JavaScript файл, который отвечает за смену темы калькулятора.

**_В папке ./src/app/public - файлы:_**

     - index.html - главный html файл приложения.


**_В папке ./src/app/style - файлы:_**

    - style.scss - файл стилей приложения.
