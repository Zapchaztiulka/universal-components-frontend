# Universal components for Zapchaztiulka frontend development

репозиторій містить універсальні компоненти для фронтенд-розробки каталогу, адмінпанелі та чатботу, а також має [живу сторінку](https://cerulean-halva-2bf838.netlify.app/) для легшого візульного вибору потрібного компоненту

включає:



## Підключення до репозиторію

ввести в термінаті команду для встановлення пакету залежностей:  
```npm install git+ssh://github.com/Zapchaztiulka/universal-components-frontend.git```  


приклад використання компонентів:  
імпортувати  
```import Button from "universal-components-frontend/src/components/buttons/button"```  
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

## Макет з компонентами
[Figma](https://www.figma.com/file/ahUh3DaGTm5nEVD1QjglAK/%E2%9A%99-Zapchaztiulka?node-id=0%3A1&mode=dev) сторінка Components & Design documentation

## Правила роботи з компонентами
1. Називати компоненти максимально близько до того, як вони іменовані на макеті
2. Задавати стилі найбільш універсально
3. Для кожного className додавати можливість перекриття стилів заданням через пропси
4. Додаючи компонент додавати і його рендер на живу сторінку