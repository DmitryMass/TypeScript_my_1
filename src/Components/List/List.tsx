import React from 'react';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  // компонент которій необходимо отрисовать
}
// T - любой тип T[] массив любого типа
//  Используем для дженериков обычные ф-ции

function List<T>({ items, renderItem }: ListProps<T>) {
  return <div>{items.map(renderItem)}</div>;
}

export default List;
