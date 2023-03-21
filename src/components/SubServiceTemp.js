const SubServiceTemp = ({ title, packages, bookNow }) => {



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
                                {pack.preDescription && <h4>{pack.preDescription}</h4>}
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
                                        <label className="duration-options" key={id} htmlFor={dur}>{dur}

                                            <input type='radio' name="duration" id={dur} key={id} />
                                            <span className="checkmark"></span>
                                        </label>
                                    ))
                                }
                            </section>

                            <button className="button" onClick={bookNow}>Book Now</button>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default SubServiceTemp