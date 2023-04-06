import React,{useState} from 'react';

export default function From() {
    const [text, setText] = useState("");

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
    const handleclear=(event)=>{
      setText("");
    }

  return (
    <div>
      <div class="m-3">
  <h1 for="exampleFormControlTextarea1" class="form-label">Type paragraph....</h1>
  <textarea value={text} class="form-control p-3 text-bg-secondary" onChange={handleonChange} id="exampleFormControlTextarea1" rows="3"></textarea>
  <button type="button" onClick={handleonupper} class="btn btn-primary">Click me on UpperCase</button>
  <button type="button" onClick={handleonlower} class="btn btn-danger m-3">Click me on lowerCase</button>
  <button type="button" onClick={handleclear} class="btn btn-outline-danger m-3">Clear text</button>
<div className='p-3'>
  <h2>Your text summary</h2>
</div>
<p>your text contains:{text.split(" ").length-1}word and {text.length}:cheracters</p>
</div>
<h1>priview text</h1>
<p>{text}</p>
    </div>
  );
}
