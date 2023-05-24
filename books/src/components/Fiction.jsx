import fiction from "../fiction.json"
import BookCard from "./BookCard"

export default function Fiction() {



 return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional Books</h1>

      <div className="books-container">
        {fiction.map((ele)=>(
          <BookCard
          key = {ele.id}
          title = {ele.title}
          author={ele.author}
          year={ele.year}
          price={ele.price}
          img={ele.img}
          />
        ))}
      </div>
    </div>
  );
}
