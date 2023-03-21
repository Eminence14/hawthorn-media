import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import AccNavbar from "./AccNavbar"
import Footer from "./Footer"
import SubServiceTemp from "./SubServiceTemp"

const Photography = () => {

    const photoModal = useRef();

    const [packages, setPackages] = useState([
        {
            title: 'Full Wedding Package',
            description: '',
            packageDetails: [
                'Unlimited coverage',
                'Bridal session',
                'One 12” x 24” Photobook',
                'One 20” x 30” Frame',
                'Digital copies in a flash drive',
                '2 Photographers and an assistant',
                'Pre-wedding or post-wedding photo session (2 looks)',
                'Pre-wedding or post-wedding photo session (2 looks)',
            ],
            packageDuration: [
                'N500,000(1 day)',
                'N800,000(2 days)',
            ]
        },
        {
            title: 'Platinum Wedding Package',
            description: '',
            packageDetails: [
                'Unlimited coverage',
                'Bridal session',
                'One 12” x 36” luxurious synthetic Photobook,two 12” x 24” ',
                'Extra photobook(for couple and respective parents) ',
                'One 20” x 30” Frame and 16” x 20” frames.',
                'Digital copies in a flash drive',
                '3 Photographers and an assistant',
                'Pre-wedding or post-wedding photo session (3 looks)',
            ],
            packageDuration: [
                'N700,000(1 day)',
                'N1,300,000(2 days)',
            ]
        },
    ])
    const bookNow = () => {
        photoModal.current.classList.add('active')
    }
    const popData = [
        'Bookings are confirmed upon reciept of non-refundable payment.',
        'Full payments are required on or before the scheduled date of events.',
        'Prices are non-negotiable but discounts may apply on multiple day booking.',
        'pre-wedding/post wedding is a complimentary service and when taken out does not affect the cost.',
        'Cost of flight and accomodation are not included for events outside abuja,however we understand how much this may cost the clients and are willing to give discounts on the basis of this, thank you.',
    ]
    return (
        <div className="tablet">
            <AccNavbar />
            <div className="sub-services">
                <SubServiceTemp title='Photography' packages={packages} bookNow={bookNow} />
                <div className="photo-modal" ref={photoModal} >
                    <div id="photo-overlay" onClick={() => {
                        photoModal.current.classList.remove('active')
                    }}></div>
                    <div className="photo-modal-content">
                        <h2>Please note:</h2>
                        {
                            popData.map((data, ind) => (
                                <div className="pop-data" key={ind}> <span> &bull;</span> {data}</div>
                            ))
                        }
                        <div className="footer">
                            <h3>Sam Hawthorn</h3>
                            <span>Hawthorn media</span>
                            <Link to='/detail'>Continue</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Photography