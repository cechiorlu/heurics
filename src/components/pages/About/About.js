import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="about">
            <h2>About</h2>
            <p>
                Heurics is a game built with React for children between the ages of 5 and 11. It comprises of challenges that stimulate critical thinking in children,
                while introducing them to some programming concepts such as loops, pure functions, basic logic, etc.
            </p>
            <p>
                The Heurics web application has an MIT License. This means it is a free, open sourced software. It is our intentions to make this application a boiler plate
                from which other education centered apps can be developed. If you notice a bug or would like to suggest a feature, you are welcome to contribute at <a href="http://github.com/cechiorlu/heurics" target="_blank" rel="noopener noreferrer">github.com/cechiorlu/heurics</a>
            </p>
            <p>
                Read about the development process <a href="http://" target="_blank" rel="noopener noreferrer">here</a>

            </p>
        </div>
    )
}


export default About