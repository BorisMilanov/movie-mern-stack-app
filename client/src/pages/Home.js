import React from "react";

function Home() {
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
            color: '#6b5b95'
        }}>Welcome to my site</h5>
            <p style={{
                textAlign: 'center',
                padding: '50px',
                fontSize: '20px',
                color: '#6b5b95'
            }}>Enjoy home page and go to collection movie page</p></div>
    </div>;
}

export default Home