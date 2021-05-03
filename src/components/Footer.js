const nDate = new Date().getFullYear();
    console.log(nDate);
    const Footer = () => {
    return <div className="footer">
    <container className="imgContainer">
    
      <h2>Follow us on:</h2>
      
        <a className="imgAnchor" href="https://twitter.com/" target="_blank" rel="noreferrer" ><img src="twitter.png" alt="twitter" /></a>
        <a className="imgAnchor" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src="facebook.png" alt="facebook" /></a>
        <a className="imgAnchor" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src="instagram.png" alt="instagram" /></a>
        <a className="imgAnchor" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src="linkedin.png" alt="linkedin" /></a>
    </container>
    <container className="address">
    <h3>Find us at:</h3>
     <p>Amazing Cocktail-Blog, Musterstraße 555, 30867 Musterstadt</p>
     </container>
     <container className="contact">
    <h3>Subscribe:</h3>
    <input placeholder="Your email here"></input> 
    <p>Copyright © {nDate}</p>
    </container>

    </div>;
}
export default Footer