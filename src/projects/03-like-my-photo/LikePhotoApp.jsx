import Title from '../components/Title';
import { FaRegSmile } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
import corgi from './img/corgi.jpg';
import { useEffect, useState } from 'react';

function LikePhotoApp() {
  //   let like = true;
  const storedCount = JSON.parse(localStorage.getItem('count'));
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(storedCount || 0);
  const toggleLike = () => {
    setLike((like) => !like);
    setCount((count) => count + 1);
  };
  const handleRightClick = () => {
    setCount((count) => count - 1);
  };

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <div className="container text-center">
      <Title text={'Like Photo App'} />
      <Title classes={'subtitle'} text={`Likes ${count}`} />
      <div
        className="card card-dark m-auto"
        style={{ width: 300, cursor: 'pointer' }}
      >
        <div className="card-header fs-xl">
          <FaRegSmile className="mr-2" />
          <small>DoggyDog</small>
        </div>
        <img
          src={corgi}
          alt="dog"
          style={{ height: 'fit-content' }}
          onDoubleClick={toggleLike}
          onContextMenu={handleRightClick}
        />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: 'space-between' }}
        >
          <FaComments />{' '}
          {like ? (
            <FaRegHeart onClick={toggleLike} />
          ) : (
            <FaHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LikePhotoApp;
