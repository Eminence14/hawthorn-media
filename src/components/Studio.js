import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import AccNavbar from "./AccNavbar"
import Footer from "./Footer"
import dropArrow from "../assets/images/dropdown-arrow.svg"

const Studio = () => {
    const studioModal = useRef();
    const title = 'Studio sessions';
    const bookNow = () => {
        studioModal.current.classList.add('active')
    }
    const [packages, setPackages] = useState([
        {
            title: 'Fashion Photography',
            getting: [
                `10 profesionally edited pictures (1 outfit)
                
                Price-N100,000`,
                'ipsum', 'donor'
            ]
        },
        {
            title: 'Portrait Photography',
            getting: [
                'lorem', 'ipsum', 'donor'
            ]
        },
        {
            title: 'Birthday shoots',
            getting: [
                'lorem lorem', 'ipsum ipsum', 'donor donor'
            ]
        }
    ])
    function handleClick(e) {
        // remove the active class from all dropdown elements
        // const allDropDowns = Array.from(document.querySelectorAll('.dropdown-body'))
        // allDropDowns.forEach(dropDown => dropDown.classList.remove('active'))

        // add active class to clicked element
        e.target.parentElement.children[1].classList.toggle('active')

    }




    return (
        <div className="tablet">
            <AccNavbar />
            <div className="sub-services">
                <div className="subservice-template">
                    <header>
                        <h1>{title}</h1>
                        <p className="title-desc">select any of our {title.toLowerCase()} package to get started.</p>
                    </header>
                    <div className="subservice-cards">
                        {
                            packages.map((pack, id) => (
                                <div className="subservice-card" key={id}>
                                    <header>
                                        <h1 className="package-title">{pack.title}</h1>
                                    </header>
                                    <section className="package-body">
                                        <h2>What you get:</h2>

                                        <div className="dropdown-container">
                                            <div className="dropdown" onClick={handleClick}>
                                                <div className="dropdown-head">
                                                    Choose package
                                                    <img src={dropArrow} alt="" />
                                                </div>
                                                <div className="dropdown-body">
                                                    {
                                                        pack.getting.map((option, key) => (
                                                            <div key={key}>
                                                                {option}
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <button className="button" onClick={bookNow}>Book Now</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="modal" ref={studioModal} >
                    <div id="modal-overlay" onClick={() => {
                        studioModal.current.classList.remove('active')
                    }}></div>
                    <div className="modal-content">
                        <p>
                            Furthermore all makeup and set design prices are not included in the photography cost but we have secured discount with make up artist like bookie lavida, Jide of st. Ola, Ronald 07th and LBV makeovers.
                        </p>
                        <Link to='/detail'>Continue</Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Studio