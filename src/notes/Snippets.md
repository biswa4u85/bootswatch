# Coloured onBlock column
```jsx
const foundOnBlockValue = move.onBlock.match(/-?[-0-9]+/);
let textClass = null;
if (foundOnBlockValue) {
    const value = parseInt(foundOnBlockValue);
    if (value > 0) textClass = 'text-success';
    if (value < -10) textClass = 'text-danger';
}
return <td className={textClass} key={`td-${index}-onBlock`}>{move.onBlock}</td>;
```