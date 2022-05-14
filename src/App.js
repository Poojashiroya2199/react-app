import React, {useState} from 'react';

import Images from './Constant/image';
import Header from './Components/Header/Header';
import Image from './Components/Image/Image';

import { Wrapper, ImageWrapper, Error } from './App-style';

function App() {
  const [searchText, setSearchText] = useState('');
  const [imageList, setImageList] = useState(Images);
  const [error, setError] = useState('');

  const handleSearch = (value) => {
    setSearchText(value);
    
    if(!value) {
      setImageList([...Images]);
    }

    else{
      const newList = imageList.filter((image) => {
        return image.title.includes(value) || image.id.includes(value) || image.img.includes(value);
      });

      if(newList.length === 0){
        setError('Results not found');
        setImageList([...Images]);
      }
      else {
      setError('');
      setImageList([...newList]);
      }
    }
  };

  return (
    <Wrapper>
     <Header searchText={searchText} handleSearch={handleSearch} />
     {error && <Error>!No Results and default Images visible</Error>}
     <ImageWrapper>
        {imageList.map((image, index) => (
          <Image img={image.img} alt='images'  title={image.title} id={image.id} key={index}/>
        ))}
     </ImageWrapper>
    </Wrapper>
  );
}

export default App;
