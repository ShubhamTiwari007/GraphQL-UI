import { gql, useQuery } from "@apollo/client";
import "./App.css";
function App() {
  const GET_ALL_BOOKS = gql`
    query AllBooks {
      allBooks {
        id
        title
        description
        author
        price
        pages
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ALL_BOOKS);

  if (loading) return <p>Loading ... </p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <div className="book-container">
      {data.allBooks.map(({ id, title, description, author, price, pages }) => (
        <div className="book-card" key={`${author}-${id}`}>
          <h2>{title}</h2>
          <h3>by {author}</h3>
          <p>{description}</p>
          <p>
            <strong>Pages:</strong> {pages}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
