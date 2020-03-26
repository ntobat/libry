import React, { useState } from 'react';
// import axios from 'axios'
// import logo from './logo.svg';
import './App.scss';
import BookList from './books/BookList'
import ReadingList from './books/ReadingList'
import CompletedList from './books/CompletedList'
import BookData from "./data/books-sample.json";


export default function App() {

	/* ---
	   Set up consts
	--- */
	const [books, setBooks] = useState(BookData)

	/* ---
	   Declare functions
	--- */
	function handleBookRL(book) {
		if( !book.inCL ) {
			setBooks(books => 
				books.map(b => 
					b.title_id === book.title_id
						? { ...b, inRL: !book.inRL ? true : false }
						: b
				)
			)
		}
	}

	function handleBookCL(book) {
		book.inRL = false
		setBooks(books => 
			books.map(b => 
				b.title_id === book.title_id
					? { ...b, inCL: !book.inCL ? true : false }
					: b
			)
		)
		getDateRead(book)
	}

	function getDateRead(book) {
		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
		var today  = new Date()
		var clickDate = today.toLocaleDateString("en-US", options)
		book.readDate = clickDate
	}

	
	/* ---
	   Return HTML
	--- */
	return (
    <main>
      <BookList books={books} getDateRead={getDateRead} handleBookRL={handleBookRL} handleBookCL={handleBookCL} />
      <br /><br /><br /><br />
      <ReadingList books={books} getDateRead={getDateRead} handleBookRL={handleBookRL} handleBookCL={handleBookCL} />
      <br /><br /><br /><br />
      <CompletedList books={books} getDateRead={getDateRead} handleBookCL={handleBookCL} />
    </main>
  );
}