import React from 'react'
import BookDetail from './BookDetail'


export default function ReadingList({ books, handleBookRL, handleBookCL, inCL }) {
	return (
		<>
		<h2 className="readinglist-title">My Reading List</h2>
			<div className="readinglist">
			{books.map((book, index) => {
				return book.inRL ? (
					<div key={index} className="card">
						<BookDetail
							key={book.title_id}
							book={book}
							handleBookRL={handleBookRL}
							inCL={false}
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
				) : null
			})}
		</div>
		</>
	)
}