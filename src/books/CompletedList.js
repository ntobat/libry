import React from 'react'
import BookDetail from './BookDetail'


export default function CompletedList({ books, handleBookCL, readDate, getDateRead }) {
	return (
		<>
		<h2 className="CompletedList-title">Books I've Read</h2>
			<div className="CompletedList">
			{books.map((book, index) => {
				return book.inCL ? (
					<div key={index} className="card">
						<BookDetail
							key={book.title_id}
							book={book}
							handleBookCL={handleBookCL}
							inCL={true}
							inRL={false}
							readDate={getDateRead(book)}
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