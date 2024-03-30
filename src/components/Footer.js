import "../App.css"

const Footer=()=>{

    return(
        <>
            <div className="footer">
            <div className="innerFooter">
                <ul>
                <h2>Company</h2>              
                <li>About</li>
                <li>Careers</li>
                <li>Team</li>
                <li>InstaMart</li>
                </ul>
            </div>
            <div className="innerFooter">
                <ul>  
                <h2>Contact Us</h2>
                <li>Help</li>
                <li>Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
                </ul>
            </div>
            <div className="innerFooter">
                <ul>
                <h2>We Deliver To</h2>
                <li>Delhi</li>
                <li>Mumbai</li>
                <li>Bangalore</li>
                <li>Chennai</li>
                <li>Kolkata</li>
                <li>Hyderabad</li>                
                </ul>
            </div>
            </div>
        </>
    );
};

export default Footer;