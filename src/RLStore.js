import React, { createContext, useState } from 'react';


export const ReadingListContext = createContext(null)

export default ({ children }) => {
	const [booksToRead, setBooksToRead] = useState(['book', 'book1']);

	const store = {
		booksToRead: [booksToRead, setBooksToRead]
	}

	return <ReadingListContext.Provider value={store}>{children}</ReadingListContext.Provider>
}