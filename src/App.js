import React from 'react';
import './App.css';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>Products</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('firstName')}
              className={getClassNamesFor('firstName')}
            >
              number
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('lastName')}
              className={getClassNamesFor('lastName')}
            >
              firstName
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('email')}
              className={getClassNamesFor('email')}
            >
              lastName
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('phone')}
              className={getClassNamesFor('phone')}
            >
              email
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('number')}
              className={getClassNamesFor('number')}
            >
              phone
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.number}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className="App">
      <ProductTable
        products={[
          { id: 1, firstName: 'Cheese', lastName: 'C', email: 'D', phone: 55, number: 20 },
          { id: 2, firstName: 'Milk', lastName: 'Ca', email: 'K', phone: 65, number: 29 },
          { id: 3, firstName: 'Yoghurt', lastName: 'Cw', email: 'C', phone: 57, number: 228 },
          { id: 4, firstName: 'Heavy', lastName: 'Ce', email: 'D', phone: 68, number: 27 },
          { id: 5, firstName: 'Butter', lastName: 'Cr', email: 'F', phone: 11, number: 25 },
          { id: 6, firstName: 'Sour', lastName: 'Ct', email: 'R', phone: 15, number: 23 },
          { id: 7, firstName: 'Fancy', lastName: 'Cy', email: 'L', phone: 12, number: 21 },
        ]}
      />
    </div>
  );
}