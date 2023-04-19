import React from 'react';

export default function Contact(props) {
    return (
        <>
        <div className='container'style={{backgroundColor:props.mode === 'dark'?'black':'white', color:props.mode === 'dark'?'white':'black'}}>
            <h1>GIT HUB REPOSITORYS.</h1>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Sunt quam voluptates quaerat illo rerum enim,
                  magnam temporibus necessitatibus ducimus tenetur perspiciatis
                   quis sit unde ullam est dolor porro blanditiis maiores!</h3>
    <a className=" contact" href="https://github.com/deepupahadi/Textutlis-dsdc"><h2>Click here</h2> </a>
    </div>
        </>
    );
}
