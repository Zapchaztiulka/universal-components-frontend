# Universal components for Zapchaztiulka frontend development

репозиторій містить універсальні компоненти для фронтенд-розробки каталогу, адмінпанелі та чатботу

включає:


## Підключення до репозиторію

ввести в термінаті команду для встановлення пакету залежностей:  
```npm install git+ssh://github.com/Zapchaztiulka/universal-components-frontend.git```  


приклад використання компонентів:  
імпортувати  
```import Button from "universal-components-frontend/src/components/buttons/button"```
відрендерити  
```javascript
const MyComponent = () => {
    return (
      // інша розмітка чи компоненти
      <Button />
    )
}