import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
    <footer>
        <div className="container">
            <div className="box">
                <ul className='flex'>
                    <li>Terms of use</li>
                    <li>Privacy-policy</li>
                    <li>Blog</li>
                    <li>Watch List</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ratione voluptates, eius harum quam omnis reprehenderit 
                    vel quas. Modi fugit consectetur consequuntur minima id velit corporis perspiciatis.</p>
            </div>
            <div className="box">
                <h3>Follow us</h3>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-youtube'></i>
                <i className='fab fa-instagram'></i>
            </div>
            <div className="box">
                <h3>Streamit app</h3>
                <div className='img flexSB'>
                     <img src="" alt="" /><span>App Store</span>
                     <img src="" alt="" /> <span>Google Play Store</span>
                </div>

            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer