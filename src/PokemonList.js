import React from 'react'

export default function PokemonList({ pokemon }) {
	return (
		<div>
			{pokemon.map(p => (
				<div key={p}>{p}</div>
			))}
		</div>
	)
}



// with booksToRead as an object array
<h3>My Reading List</h3>
			{booksToRead.map((book) => {
				return (
					<BookDetail key={book.title_id} book={book} />
				)
			})}

// with booksToRead as a Set
{[...booksToRead].map((book) => {
				return (
					<BookDetail key={book.title_id} book={book} />
				)
			})}

//attempting to memo-ize the booklist update bullshit
const rl = useMemo(
		() => {
		const nodupsrl = Array.from(new Set(booksToRead.map(book => book.title_id))).map(title_id => {
			return booksToRead.find(book => book.title_id === title_id)
		})
	}, [booksToRead])


//old attempt to map ReadingList to a Set and remove duplicates blah blah
const nodupsrl = Array.from(new Set(booksToRead.map(book => book.title_id))).map(title_id => {
	return booksToRead.find(book => book.title_id === title_id)
})
setBooksToRead(nodupsrl)

//old App.js stuff to handle adding book to RL
const books = useState([])
	const [booksToRead, setBooksToRead] = useState([])
	const [addRemove, setAddRemove] = useState(true)
	const [label, setLabel] = useState('Add to Reading List')

	function handleAddBook(book) {
		const newID = book.title_id
		if( (typeof booksToRead.find(x => x.title_id === newID)) == 'undefined' ) {
			setBooksToRead([...booksToRead, book])	
		}
	}

	function handleRemoveBook(book) {
		const array = booksToRead
		const index = array.indexOf(book)
		const newArray = [...array.slice(0, index), ...array.slice(index +1)]
		setBooksToRead(newArray)
	}

	function addOrRemove(book) {
		// if( book.addRemove ) {
		// 	handleAddBook(book)
  //     book.label = 'Remove from Reading List'
  //     book.addRemove = false
		// } else {
		// 	handleRemoveBook(book)
  //     book.label = 'Add to Reading List'
  //     book.addRemove = true
		// }
		if( addRemove ) {
			handleAddBook(book)
			setLabel('Remove from Reading List')
			setAddRemove(false)
		} else {
			handleRemoveBook(book)
			setLabel('Add to Reading List')
			setAddRemove(true)
		}
	}

  return (
  	<main>
	  	<BookList books={books} handleAddBook={handleAddBook} addOrRemove={addOrRemove} label={label} />
	  	<br/><br/>
	  	<br/><br/>
	  	<ReadingList booksToRead={booksToRead} handleRemoveBook={handleRemoveBook} />
		</main>
  );
}









