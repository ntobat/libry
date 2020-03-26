// pokemon
    
const [loading, setLoading] = useState(true)

const [pokemon, setPokemon] = useState([])
const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
const [nextPageUrl, setNextPageUrl] = useState()
const [prevPageUrl, setPrevPageUrl] = useState()

// useEffect tells app to render something when something happens
useEffect(() => {
	setLoading(true)
	let cancel
	// get pageUrl from the state above and set up pokemon
	axios.get(currentPageUrl, {
		// added property to get function for canceling request
		cancelToken: new axios.CancelToken(c => cancel = c)
	}).then(res => {
		setLoading(false)
		setNextPageUrl(res.data.next)
		setPrevPageUrl(res.data.previous)
		setPokemon(res.data.results.map(p => p.name))
	})

	return () => cancel()
	// if currentPageUrl changes, useEffect will re-render
}, [currentPageUrl])

//pagination functions
function goNext() {
	setCurrentPageUrl(nextPageUrl)
}
function goPrev() {
	setCurrentPageUrl(prevPageUrl)
}


if (loading) return "Loading..."