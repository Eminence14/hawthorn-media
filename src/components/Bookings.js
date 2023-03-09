import { useLayoutEffect } from "react";
import AccNavbar from "./AccNavbar";
import Footer from "./Footer";

const Bookings = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="tablet">
            <AccNavbar />
            <div className="booking">
                <h1>Your Bookings</h1>
                <span>The tables shows the details of the service booked with us.</span>
                <div className="booking-table">
                    <span>Your Booking Table</span>
                    <table>
                        <thead>
                            <tr>
                                <th>booking id</th>
                                <th>amount</th>
                                <th>type</th>
                                <th>status</th>
                                <th>detail</th>
                            </tr>
                        </thead>

                        <tr>
                            <td>123456</td>
                            <td>$1287</td>
                            <td>transfer</td>
                            <td>completed</td>
                            <td>02:37pm meeting one</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>$224</td>
                            <td>cash</td>
                            <td>pending</td>
                            <td>04:15pm meeting two</td>
                        </tr>

                    </table>

                    <span className="booked">You don't have any booking yet</span>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Bookings;