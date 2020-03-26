import React from 'react'

export default function AddToRL({ book, handleAddBook }) {

	const onAddBook = () => handleAddBook(book)

	return (
		<button onClick={onAddBook}>Add to Reading List</button>
	)
}