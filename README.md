 # Universal components for Zapchaztiulka frontend development

репозиторій містить універсальні компоненти для фронтенд-розробки каталогу, адмінпанелі та чатботу, а також має [живу сторінку](zupchastulka-storybook.netlify.app) для легшого візульного вибору потрібного компоненту

включає:
- buttons
- icons
- inputs
- selects
- loader
- notificcations
- tooltips
- modals


## Підключення до репозиторію

ввести в термінаті команду для встановлення пакету залежностей:  
```sh
npm install git+ssh://github.com/Zapchaztiulka/universal-components-frontend.git
```  
 ## Запустити сервер для розробки
```
npm run dev
``` 
 ## Запустити storybook для розробки
```
npm run sb
``` 
 ## Після розробки компоненту та сторісов - запустити build storybook для деплою
```
npm run sb-build
``` 


### Приклад використання компонентів:

 `імпортувати`
 ```
 ../admin-panel-frontend/universal-components-frontend/presets.jsimport Button from "universal-components-frontend/src/components/buttons/button"
 ```
 підключити конфіг тейлвінду
 в tailwind.config.js
  ```export * from "universal-components-frontend/tailwind.config"```

  відрендерити
  ```javascript
const MyComponent = () => {
    return (
      // інша розмітка чи компоненти
      <Button />
    )
}
```
```

## Макет з компонентами
[Figma](https://www.figma.com/file/ahUh3DaGTm5nEVD1QjglAK/%E2%9A%99-Zapchaztiulka?node-id=0%3A1&mode=dev) сторінка Components & Design documentation



## Правила роботи з компонентами
1. Називати компоненти максимально близько до того, як вони іменовані на макеті
2. Задавати стилі найбільш універсально
3. Для кожного className додавати можливість перекриття стилів заданням через пропси
4. Додаючи компонент додавати і його рендер на живу сторінку

Більш детальна інформація знаходиться в [DOC.md](DOC.md). В документі описана: 
- структура репозиторію для наповнення компонентами
- структура компоненту та базові правила синтаксису
- логічні кроки по наповненню компонентами
- логічні кроки по створенню стори для компонента


## Learn More

You can learn more about Storybook in the [Storybook documentation](https://storybook.js.org/docs/react/get-started/introduction).  
To learn React, check out the [React documentation](https://reactjs.org/).