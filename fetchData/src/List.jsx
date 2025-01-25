const List = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name || item.title || item.username}</li>
      ))}
    </ul>
  );
}

export default List;
