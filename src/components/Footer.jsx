import React from 'react'

const Footer = () => {
    return (
        <footer className="container-fluid rounded-bottom-4 mt-4">
            <div className="row">
                <div className="col-12 text-center">
                    <button className="btn btn-danger">
                        Send me an <span className="text-black text-uppercase fs-5 ps-2">email</span>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer