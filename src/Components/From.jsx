import React,{useState} from 'react';

export default function From() {
    const [text, setText] = useState("Enter Your Text Here....");

    const handleonChange= (event) => {
        setText(event.target.value);
    }
    const handleonupper=(event) =>{
        let Newtext = text.toUpperCase()
        setText(Newtext);

    }

    const handleonlower=(event) =>{
        let Newtext = text.toLowerCase()
        setText(Newtext);

    }

  return (
    <div>
      <div class="m-3">
  <h1 for="exampleFormControlTextarea1" class="form-label">Type paragraph....</h1>
  <textarea value={text} class="form-control p-3 text-bg-secondary" onChange={handleonChange} id="exampleFormControlTextarea1" rows="3"></textarea>
  <button type="button" onClick={handleonupper} class="btn btn-primary">Click me on UpperCase</button>
  <button type="button" onClick={handleonlower} class="btn btn-danger m-3">Click me on lowerCase</button>

  <button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="/">Previous</a></li>
    <li class="page-item"><a class="page-link" href="/">1</a></li>
    <li class="page-item"><a class="page-link" href="/">2</a></li>
    <li class="page-item"><a class="page-link" href="/">3</a></li>
    <li class="page-item"><a class="page-link" href="/">4</a></li>
    <li class="page-item"><a class="page-link" href="/">5</a></li>
    <li class="page-item"><a class="page-link" href="/">Next</a></li>
  </ul>
</nav>
</div>
    </div>
  );
}
