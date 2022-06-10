import react,{useEffect,useState} from "react"
import App from "next/app"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Searchbox from "./components/Searchbox"
import Bloglist from "./components/Bloglist"

export default function Home() {

  const [blogs, setBlogs] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('india');

	const getBlogRequest = async (searchValue) => {
		const url = `https://newsapi.org/v2/everything?q=${searchValue}}&from=2022-05-10&sortBy=publishedAt&apiKey=52926f84c4fc4bfdbd17c14f185c69d2`;
		const response = await fetch(url);
		const responseJson = await response.json();

		// console.log(responseJson)

		if (responseJson) {
			setBlogs(responseJson.articles);
		}
	};

	useEffect(() => {
		getBlogRequest(searchValue);
	}, [searchValue]);

	// useEffect(() => {
	// 	const blogFavourites = JSON.parse(
	// 		localStorage.getItem('react-movie-app-favourites')
	// 	);

	// 	if (blogFavourites) {
	// 		setFavourites(blogFavourites);
	// 	}
	// }, []);

	// const saveToLocalStorage = (items) => {
	// 	localStorage.setBlogs('react-movie-app-favourites', JSON.stringify(items));
	// };

	// const addFavouriteBlog = (blog) => {
	// 	if(favourites.indexOf(blog)===-1){
	// 	const newFavouriteList = [...favourites, blog];
	// 	setFavourites(newFavouriteList);
	// 	saveToLocalStorage(newFavouriteList);
	// 	}
	// };

	// const removeFavouriteBlog = (blog) => {
	// 	const newFavouriteList = favourites.filter(
	// 		(favourite) => favourite.imdbID !== blog.imdbID
	// 	);

	// 	setBlogs(newFavouriteList);
	// 	saveToLocalStorage(newFavouriteList);
	// };

	return (
	<>
  <Navbar/>
  <Searchbox searchValue={searchValue} setSearchValue={setSearchValue}/>
  <div className="card-outerdiv">
  <Bloglist blogs={blogs}/>
  </div>
  </>  
	);
}
