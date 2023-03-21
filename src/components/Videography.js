import { useState } from "react"
import AccNavbar from "./AccNavbar"
import Footer from "./Footer"
import SubServiceTemp from "./SubServiceTemp"
import { useNavigate } from "react-router-dom"

const Videography = () => {
    const navigate = useNavigate()
    const [packages, setPackages] = useState([
        {
            title: 'Classic Wedding Package',
            description: 'This is the Hawthorn team package, captured and edited by the hawthorn media team.',
            packageDetails: [
                'Two videographers and the production manager.',
                'Filming starts from the day of the end to till the end.',
                'One highlight video from each event including the interview for family and friends.',
                'One Hawthorn bag for the couple containing the full wedding film on a flash drive including the highlights and every other thing that comes in the box for the couple.',
                'A Reel in two weeks and wedding highlights in four weeks.'
            ],
            packageDuration: [
                'N500,000(1 day)',
                'N750,000(2 days)',
                'N900,000(3 days)'
            ]
        },
        {
            title: 'Premium Wedding Package',
            description: 'This is the Hawthorn team premium package,captured and edited by our lead creative director Sam Hawthorn.',
            packageDetails: [
                'Our team leaders,two videographers and a drone pilot throughout the events.',
                'You are entitled to either a free pre-wedding video or a fre bridal shower video.',
                'A team of camera men assigned to the groom,another to team with the bride and also another team with couples parents,guest and decors.',
                'At least one highlight videos for each event and in some cases additional video such as Reels,decor video or after party video as the team deems necessary.',
                'Three Hawthorn bags for the couples and their both families each containing the full wedding film on CD,a flash drive containing everything including the highlighs and every other thing that comes in the box for the couple.',
                'All wedding videos to be delivered within 4 weeks after the event except the pre-wedding or bridal shower which is delivered seven (7) days after the shoot and the highlight which are delivered within 4 weeks.'
            ],
            packageDuration: [
                'N1,000,000(1 day)',
                'N1,500,000(2 days)',
                'N2,000,000(3 days)'
            ]
        },
        {
            title: 'Full Wedding Package',
            preDescription: '(This is our  Creative Directors Event)',
            description: 'What this means to you is that Sam Hawthorn handles everything regarding these events,pre-wedding,wedding filming,travels with you,client’s relationship editing and all other activities in post production.',
            packageDetails: [
                'It covers for every event/ceremony that takes place within the entire wedding day and also short videos on the go including the reels.',
                'Appropriate amount of team members required as agreed with the logistics manager of the client.',
                'Filming is done on any day or ceremony chosen by the couple before the proper events and continues until the entire events are over.',
                'Trailer, teasers or highlights from each events are released on the same day after each event. Youtube videos and documentary could take up to one week after the events but the reels and other short videos are released as the event is ongoing as the highlights are released on same day.',
                'Three Hawthorn bags for the couple and their both families each containing the full wedding film on CD,a flash drivc containing everything including highlights and every other thing that comes in the box for the  couple.',
                'One Hawthorn bag for the couple each containing the full wedding film on CD, a flash drive contaning all videos including the highlights and also souvenirs for the couple.',
                'Two Hawthorn bags for the couple’s both parents each containing the videos of the main events on CD, a flash drive containing all videos including the highlights and also souvenirs for the couple’s both parents.'
            ],
            packageDuration: [
                'N2,000,000(1 day)',
                'N4,500,000(2 days)',
                'N6,000,000(3 days)',
                'N8,000,000(4 days)'
            ]
        },
    ])

    const bookNow = () => {
        navigate('/detail')
    }
    return (
        <div className="tablet">
            <AccNavbar />
            <div className="sub-services">
                <SubServiceTemp title='Videography' packages={packages} bookNow={bookNow} />
            </div>
            <Footer />
        </div>
    )
}

export default Videography
