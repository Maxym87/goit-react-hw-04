
import css from './App.module.css'
import { useEffect, useState } from "react"
import { fetchImeges } from "../../fetch-api"
import SearchBar from "../SearchBar/SearchBar"
import Loader from "../Loader/Loader"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import ImageGallery from "../ImageGallery/ImageGallery"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageModal from "../ImageModal/ImageModal"


export default function App() { 

  const [images, setImages] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('')
  const [modal, setModal] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [userName, setUserName] = useState(null);
  const [likes, setLikes] = useState(null);
  


  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(page + 1);
    setImages([]);
}
  

  const handleLoadMore = () => {
  setPage(page + 1)
  }

  const openModal = (url, likes, username) => {
    setModal(true);
    setImageURL(url);
    setUserName(username);
    setLikes(likes);
  }

  const closeModal = () => {
    setModal(false);
  }
  
  useEffect(() => {
      if (query === '') {
        return;
  }

    async function getImages() {
      try {
        setError(false);
        setIsLoad(true);
        const data = await fetchImeges(query, page);
        setImages((prevArticles) => {
          return [...prevArticles, ...data];
        });
   } catch (error) {
    setError(true)
   } finally {setIsLoad(false)}
    } 
    
  getImages() 
  }, [page, query])


  
  return (
<div className={css.container}>
  <SearchBar onSearch={handleSearch} />
  {isLoad && <Loader onLoad={isLoad}/>}
      {error && <ErrorMessage />}
  {images.length > 0 && <ImageGallery items={images} onClick={openModal}/>}
      {images.length > 0 && !isLoad && <LoadMoreBtn onClick={handleLoadMore} />}
      {modal && <ImageModal img={imageURL} likes={likes} user={userName} modalState={modal} onClose={closeModal} />}
</div>
  )
}