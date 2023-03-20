
const SubServiceTemp = ({ title, packages }) => {
    return (
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
                                <p className="package-description">{pack.description}</p>
                            </header>

                            <section className="package-body">
                                <h2>What you get:</h2>
                                {
                                    pack.packageDetails.map((detail, id) => (
                                        <div className="packageDetail" key={id}> <span> &bull;</span> {detail}</div>
                                    ))
                                }
                                <h2>Please select duration.</h2>
                                {
                                    pack.packageDuration.map((dur, id) => (
                                        <label className="duration-options" htmlFor={dur}>{dur}
                                            <input type='radio' name="duration" id={dur} key={id} />
                                            <span className="checkmark"></span>
                                        </label>
                                    ))
                                }
                            </section>

                            <button className="button">Book Now</button>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default SubServiceTemp