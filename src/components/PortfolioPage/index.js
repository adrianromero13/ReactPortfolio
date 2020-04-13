import React from 'react';

const PortfolioPage = (props) => (
    <div className="container well">
        <div>
            <div className="row border-top border-bottom border-success">
                <div className="col-auto text-success">
                    <h5 className="text-justify-center align-middle">Portfolio</h5>
                </div>
            </div>
        </div>
        <br />

        <div className="container well" id="customTextOnCard">
            <div className="row">
                <div className="col-6 flexbox d-none d-md-block">

                    <div className="card text-white bg-success mb-3">
                        <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src="./assets/images/DNA.jpg" alt="Card image DNA" />
                        <div className="card-header">Immunology - serology</div>
                    </div>

                    <div className="card text-info bg-light mb-3">
                        <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src="./assets/images/cycling.jpg" alt="Card image cyclist" />
                        <div className="card-header">Habits</div>
                    </div>

                    <div className="card text-light bg-danger mb-3">
                        <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src="./assets/images/DBZ.jpg" alt="Card image anime" />
                        <div className="card-header">Tv shows</div>
                    </div>

                </div>

                <div className="col-6 flexbox d-none d-md-block">
                    <div className="card text-white bg-secondary mb-3">
                        <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src="./assets/images/moon.jpg" alt="Card image full moon" />
                        <div className="card-header">Full Moon</div>
                    </div>

                    <div className="card text-white bg-secondary mb-3">
                        <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src="./assets/images/bass-clef.jpg" alt="Card image bass clef" />
                        <div className="card-header">Bass-clef</div>
                    </div>

                    <div className="card text-white bg-secondary mb-3">
                        <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src="./assets/images/camera.jpg" alt="Card image Camera" />
                        <div className="card-header">Hobbies</div>
                    </div>
                </div>
            </div>
        </div>

        <br />

        <div className="container well d-md-none">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="./assets/images/DNA.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./assets/images/cycling.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./assets/images/DBZ.jpg" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./assets/images/moon.jpg" alt="Fourth slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./assets/images/bass-clef.jpg" alt="Fifth slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./assets/images/camera.jpg" alt="Sixth slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>

)

export default PortfolioPage;