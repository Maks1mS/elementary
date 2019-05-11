# Elemetary

Elemetary - библиотека для создания атомарных react компонентов.
Вдохновленная tahyon и styled-system.

### Как начать использовать:
Так как в основе Elementary лежит styled-components, интерфейс может быть вам знаком. <br>
Создаем элемент:
```
import elementary from 'elementary';

const Link = elementary.a([
    'color',
    'bacground-color'
], {
    effects: [':hover', ':focus'],
    variants: ['links'],
    themed: 'Link'
});
```
В качестве первого аргумента передаем массив css свойств, которые мы будем использовать.<br>
Вторым аргументом идет конфигурация:
- effects - какие эффекты можно будет использовать из jsx
- variants - варианты свойств из темы
- themed - стили из темы по дефолту

Далее иcпользуем наш элемент:
```
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(<Link color="red" hoverColor="blue" focusColor="green"/>, document.getElementById('root');
```
В качестве пропсов передаем color, hoverColor и focusColor. В итоге мы получаем ссылку, у которой в зависимости от эффекта наведения или фокуса меняется цвет. Аналогично будет работать любое css свойство, которое вы передадите в момент создания компонента.

### Медиа-запросы:
```
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(<Link color=['red', 'blue', 'green']/>, document.getElementById('root')
```
Для работы с медиа-запросами достаточно указать значения свойства в массиве, где каждое свойство будет применяться отностильно breakpoint из темы. <br>

### Использование совместно с styled-components:
```
import elementary from 'elementary';
import styled from 'styled-components';

const absLink = styled.a`
    border: 2px solid black;
`;

const Link = elementary(absLink)([
    'color',
    'bacground-color'
], {
    effects: [':hover', ':focus'],
    variants: ['links'],
    themed: 'Link'
});
```

### Полный пример

```
import React from 'react';
import ReactDom from 'react-dom';
import elementary from 'elementary';
import styled from 'styled-components';

const absLink = styled.a`
    border: 2px solid black;
`;

const Link = elementary(absLink)([
    'color',
    'bacground-color'
], {
    effects: [':hover', ':focus'],
    variants: ['links'],
    themed: 'Link'
});

ReactDom.render(<Link color=['red', 'blue', 'green']/>, document.getElementById('root')
```

Демо: TODO