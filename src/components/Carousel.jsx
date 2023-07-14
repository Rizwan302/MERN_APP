import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" style={{objectFit:"contain !important"}}>


                <div className="carousel-indicators " id='carousel' >
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                {/* <div className="carousel-inner" style={{zIndex:"10"}}> */}

                {/* </div> */}
                <div className="carousel-inner" >
                    <div className=" carousel-caption" style={{ zIndex: "10" }}>
                    <form action="" className='d-flex' >
                        <input type='search' className=" form-control me-2" aria-label='search' placeholder='search'/>
                        <button className="btn btn-outline-success text-white bg-success">Search</button>
                    </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900×100/?burger" style={{maxHeight:"500px",objectFit:"cover"}} className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×100/?pizza" style={{maxHeight:"500px", objectFit:"cover"}} className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×100/?pasta" className="d-block w-100" style={{maxHeight:"500px",objectFit:"cover"}} alt="..." />
                    </div>


                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
