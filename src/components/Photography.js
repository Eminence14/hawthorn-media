import { useState } from "react"
import AccNavbar from "./AccNavbar"
import Footer from "./Footer"
import SubServiceTemp from "./SubServiceTemp"

const Photography = () => {
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
    return (
        <div className="tablet">
            <AccNavbar />
            <div className="sub-services">
                <SubServiceTemp title='Photography' packages={packages} />
            </div>
            <Footer />
        </div>
    )
}

export default Photography