import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import AccNavbar from "./AccNavbar"
import Footer from "./Footer"
import dropArrow from "../assets/images/dropdown-arrow.svg"

const Studio = () => {
    const studioModal = useRef();
    const title = 'Studio sessions';
    const [activeIndex, setActiveIndex] = useState(null)
    const bookNow = () => {
        studioModal.current.classList.add('active')
        setActiveIndex(null)
    }

    const [packages, setPackages] = useState([
        {
            title: 'Fashion Photography',
            getting: [
                {
                    title: '10 profesionally edited pictures (1 outfit)',
                    price: 'Price N100,000'
                },
                {
                    title: '20 profesionally edited pictures (10 outfits)',
                    price: 'Price N200,000'
                },
                {
                    title: '30 profesionally edited pictures (15 outfits)',
                    price: 'Price N300,000'
                },
                {
                    title: '40 profesionally edited pictures (20 outfits)',
                    price: 'Price N400,000'
                },
                {
                    title: '50 profesionally edited pictures (25 outfits)',
                    price: 'Price N500,000'
                },
            ]
        },
        {
            title: 'Portrait Photography',
            getting: [
                {
                    title: '10 profesionally edited pictures (1 outfit)',
                    price: 'Price N100,000'
                },
                {
                    title: '20 profesionally edited pictures (2 outfits)',
                    price: 'Price N150,000'
                },
                {
                    title: '30 profesionally edited pictures (3 outfits)',
                    price: 'Price N200,000'
                },
                {
                    title: '40 profesionally edited pictures (4 outfits)',
                    price: 'Price N250,000'
                },
                {
                    title: '50 profesionally edited pictures (5 outfits)',
                    price: 'Price N300,000'
                },
            ]
        },
        {
            title: 'Birthday shoots',
            getting: [
                {
                    title: '',
                    price: 'N100,000(Inside)'
                },
                {
                    title: '',
                    price: 'N150,000(Inside)'
                }
            ]
        }
    ])
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    let dropdown;



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
                            packages.map((pack, index1) => {
                                const isActive = index1 === activeIndex
                                return (
                                    <div className="subservice-card" key={index1}>
                                        <header>
                                            <h1 className="package-title">{pack.title}</h1>
                                        </header>
                                        <section className="package-body">
                                            <h2>What you get:</h2>
                                            <div className="dropdown">
                                                <div className="dropdown-head" onClick={() => handleClick(index1)}>
                                                    Choose package
                                                    <img src={dropArrow} alt="" className={`drop-arrow ${isActive ? 'active' : ''}`} />
                                                </div>
                                                <div className={`dropdown-body ${isActive ? 'active' : ''}`}>
                                                    {
                                                        dropdown = pack.getting.map(({ title, price }, index2) => {
                                                            return (
                                                                <div key={index2}>
                                                                    <p>{title}</p>
                                                                    <div>{price}</div>
                                                                    <span></span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>

                                            </div>


                                        </section>

                                        <button className="button" onClick={bookNow}>Book Now</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="modal" ref={studioModal} >
                    <div id="modal-overlay" onClick={() => {
                        studioModal.current.classList.remove('active')
                    }}></div>
                    <div className="modal-content">
                        <p>
                            Furthermore all makeup and set design prices aPrice re not included in the photography cost but we have secured discount with make up artist like bookie lavida, Jide of st. Ola, Ronald 07th and LBV makeovers.
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