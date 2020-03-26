import React,  { useState } from 'react'
import BookDetail from './BookDetail'


export default function BookList ({ books, readDate, getDateRead, handleBookRL, handleBookCL }) {
	
	return (
		<div className="booklist">
			{books.map((book, index) => {
				return (
					<div key={index} className="card">
						<BookDetail
							key={book.title_id}
							book={book}
							handleBookRL={handleBookRL}
							handleBookCL={handleBookCL}
							readDate={getDateRead(book)}
							inCL={false}
							inRL={false}
						/>
						<label className="input-checkbox">
							<input
								type="checkbox"
								checked={book.inCL}
								className="checkbox"
								onChange={() => {
									handleBookCL(book)
								}}
							/>
							<span className="label">Read It!</span>
						</label>
					</div>
				)
			})}
		</div>
	)
}