import AccNavbar from "./AccNavbar";
import Footer from "./Footer";
import ActiveBook from '../assets/images/active-booking.svg';
import CompleteBook from '../assets/images/completed-booking.svg';
import TotalBook from '../assets/images/total-booking.svg';
import { Link } from "react-router-dom";


const Dashboard = () => {
    window.scrollTo(0, 0)
    return (
        <div className="tablet">
            <AccNavbar className='tablet-nav' />
            <div className="dashboard">
                <h1>Account Summary</h1>
                <div className="dash-stats">
                    <div className="dash-stats-card">
                        <div>
                            <span>Active Bookings</span>
                            <span>0</span>
                        </div>
                        <img src={ActiveBook} alt="" />
                    </div>
                    <div className="dash-stats-card">
                        <div>
                            <span>Completed Bookings</span>
                            <span>0</span>
                        </div>
                        <img src={CompleteBook} alt="" />
                    </div>
                    <div className="dash-stats-card">
                        <div>
                            <span>Total Bookings</span>
                            <span>0</span>
                        </div>
                        <img src={TotalBook} alt="" />
                    </div>
                </div>
                <div className="dash-cta">
                    <h1>Ready To Book a Service at Hawthorn?</h1>
                    <p>
                        We offers various services which includes Photoshoots, Videography, Studio sessions etc. You can also request for a custom quote.
                    </p>
                    <Link to='/services'>Start Booking</Link>
                </div>
            </div>
            <Footer className='' />
        </div>
    );
}

export default Dashboard;