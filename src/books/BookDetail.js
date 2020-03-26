import React, { useState, useEffect } from 'react'


function Button({ children, handleBookRL }) {
	return (
		<button className='btn' onClick={handleBookRL}>
			{children}
		</button>
		)
}


export default function BookDetail({ book, readDate, inCL, handleBookRL, button }) {

	const [hasButton, setHasButton] = useState(true)
	useEffect(() => {
		setHasButton(prev => !prev)
	}, [book.inCL])

	if ( !hasButton && !inCL ) {
		button = <Button handleBookRL={() => { handleBookRL(book) }} children={ book.inRL ? "Remove from Reading List" : "Add to Reading List" } />
	} else { button = <Button children={'Completed on ' + book.readDate} /> }

	return (
		<>
		<div>
			<img src={book.cover} className="cover-img" alt="book cover" />
			<div className="book-data">
				<h3 className="title">{book.title}</h3>
				<span className="_by">by</span>
				<p className="author">{book.author}</p>
			</div>
		</div>
		{button}
		</>
	)
}


// PRE-got the RL button remove to work, this function took care of hiding button in CompletedList
// if ( !inCL ) {
// 	button = <Button handleBookRL={() => { handleBookRL(book) }} children={ book.inRL ? "Remove from Reading List" : "Add to Reading List" } />
// } else { button = null }