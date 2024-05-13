export default function ArticlesList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
      </li>))}
  </ul>
  )
}