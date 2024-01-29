import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import { BsFilePost } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';

function Testimonials() {
  //   function handleClick() {
  //     console.log('mmm');
  //   }
  const storedTestimonials = JSON.parse(localStorage.getItem('testimonials'));
  const [testimonials, setTestimonials] = useState(storedTestimonials);
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
  }, []);

  return (
    <div className="container m-auto">
      <Title text={'Testimonials App'} />
      <Button
        text={'Posts'}
        btnClass="btn-info"
        icon={<BsFilePost />}
        onClick={() => setTestimonials('Posts')}
      />
      <Button
        text={'Users'}
        btnClass="btn-info"
        icon={<FaRegUserCircle />}
        onClick={() => setTestimonials('Users')}
      />
      <Button
        text={'Comments'}
        btnClass="btn-info"
        icon={<FaComments />}
        onClick={() => setTestimonials('Comments')}
      />
      <Title
        classes={'subtitle text-primary'}
        text={!testimonials ? 'Select from above!' : testimonials}
      />
      {!items
        ? null
        : items.map((item) => {
            return (
              <div className="card card-primary mb-2" key={item.id}>
                {item.name && <h2 className="card-header">{item.name}</h2>}
                <div className="card-body">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
                {item.email && (
                  <small className="card-footer">{item.email}</small>
                )}
              </div>
            );
          })}
    </div>
  );
}

export default Testimonials;
