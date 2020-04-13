import React from 'react';


const About = props => (
    <div className="container"
        style={{
            backgroundColor: 'rgba(54,54,54,0.767'
        }}
    >
            <div className="row border-top border-bottom border-success">
                <div className="col-auto text-success">
                    <p className=""><h5 className="text-justify-center align-middle">About Me</h5></p>
                </div>
            </div>
            <div className="row">
                <div className="col-4 text-light justify-content-end">
                    <img src="" alt="me out in the woods" className="shadow-lg p-2 mb-5 img-fluid" max-width="100%" height="auto" />
                </div>
                <div className="col text-light text-left">
                        <p>
                            Born and raised in the small and lively city of <strong>Pomona</strong>, <strong>California</strong>, where I grew up with a strong affiliation to music, art, and the life sciences. 
                            Before moving to the Bay Area for bigger, and better opportunnities, Pomona is where I learned to play 5 different instruments, picked up on the culture of brewing beer, and graduated with a Bachelor's of Science in Microbiology.
                        </p>
                        <p>
                            Now I am living in The Bay, where I enjoy cycling, homebrewing, occasionally visiting new places in the energetic city of San Fransisco. 
                            On my down time, I enjoy playing video games, reading medical journals, watching cooking tutorials, youtuber chefs, and my favorite anime T.V shows.
                        </p>
                        <p>
                            I aspire to learn. 
                            I'm currently attending the Coding Bootcamp of UC Berkeley, Extensions to become a <strong>Full Stack Developer</strong>, and obtain the tools I seek to expand my knowledge and understanding of the world of computer engineering. 
                            I hope to one day utilize those skills to combine with my aspirations in the fields of medical sciences.
                        </p>
                </div>
            </div>
        </div>
);

export default About;