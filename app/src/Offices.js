const Offices = (props) => {
    const { image, heading, address, phone, country } = props;
    return (
        <div className={`content-offices-${country}`}>
            <div className={`content-heading-container-${country}`}>
                <span className={`content-heading-text-input-container-${country}`}>{heading}</span>
                <div className={`Frame-1000002098-${country}`}>
                    <span className="Frame-title-address">Address</span>
                    <span className={`Frame-text-address-${country}`}>{address}</span>
                </div>
                <div className="Frame-1000002099">
                    <span className="Frame-title-phone">Phone</span>
                    <span className="Frame-text-phone">{phone}</span>
                </div>
            </div>
            <img className="Rectangle-5680" src={image} alt ="img" />
        </div>
    )
}

export default Offices