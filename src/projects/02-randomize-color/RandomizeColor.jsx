import Title from '../components/Title';

function RandomizeColor() {
  function handle1Click(e) {
    let body = document.querySelector('body');
    body.style.background = getRandomColor();
    e.target.style.background = getRandomColor();
  }
  function handle2Click(e) {
    let body = document.querySelector('body');
    body.style.background = getRandomColor();
    e.target.style.background = getRandomColor();
  }
  function handle3Click(e) {
    let body = document.querySelector('body');
    body.style.background = getRandomColor();
    e.target.style.background = getRandomColor();
  }
  function handle4Click(e) {
    let body = document.querySelector('body');
    body.style.background = getRandomColor();
    e.target.style.background = getRandomColor();
  }

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className="container m-auto text-center">
      <Title text={'Randomize Color'} classes={'mb-4'} />
      <button className="btn btn-danger" onClick={handle1Click}>
        Click Me
      </button>
      <button className="btn btn-success" onClick={handle2Click}>
        Click Me
      </button>
      <button className="btn btn-primary" onClick={handle3Click}>
        Click Me
      </button>
      <button className="btn btn-warning" onClick={handle4Click}>
        Click Me
      </button>
    </div>
  );
}

export default RandomizeColor;
