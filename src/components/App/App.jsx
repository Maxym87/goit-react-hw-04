
import { useEffect, useState } from "react"
import { fetchImeges } from "../../fetch-api"
import SearchBar from "../SearchBar/SearchBar"
import Loader from "../Loader/Loader"
import Modal from 'react-modal';
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
    const [modalItem, setModalItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  


  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(page + 1);
    setImages([]);
}
  

  const handleLoadMore = () => {
  setPage(page + 1)
  }

    const openModal = item => {
    setModalItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  useEffect(() => {
    async function getImages() {
      if (query === '') {
        return;
  }
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

  Modal.setAppElement("#root")
  
  return (
<div>
  <SearchBar onSearch={handleSearch} />
  {isLoad && <Loader onLoad={isLoad}/>}
 {error && <ErrorMessage/>}
  {images.length > 0 && <ImageGallery items={images} onClick={openModal}/>}
      {images.length > 0 && !isLoad && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalItem && (
        <ImageModal
          item={modalItem}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          
        />
        
      )}
</div>
  )
}