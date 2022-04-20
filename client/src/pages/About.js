import React from "react";

function About() {
    return <div>

        <div style={{
            backgroundImage: `url("https://media.gettyimages.com/photos/grunge-background-picture-id173560870?s=612x612")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh'
        }}> <h5 style={{
            textAlign: 'center',
            padding: '50px',
            fontSize: '40px',
            color: 'black'
        }}>Info about me</h5>
            <p style={{
                textAlign: 'center',
                padding: '50px',
                fontSize: '20px',
                color: 'black'
            }}>Programming is my greatest passion and the very purpose of my life at the present moment. I have a good foundation of ECMAScript standard. I work well with modules and I have a good understanding of the MVC architecture.
                I am an energetic person with great ambition. I work smart and also hard with a great dose of discipline.</p></div>
    </div>;
}

export default About