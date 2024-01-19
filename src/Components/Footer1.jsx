import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer1 = () => {
  return (
    <div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
    <img src="https://scontent.fblr24-3.fna.fbcdn.net/v/t39.30808-1/301405597_205404045152716_4282159939682054480_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=109&ccb=1-7&_nc_sid=4da83f&_nc_ohc=3gbYbtsTRqcAX_E7x8Q&_nc_ht=scontent.fblr24-3.fna&oh=00_AfDJwG3Zbe5CEi66UtgBwTFkQsbP4tedP62ag8pVGa08vg&oe=65AD0C61" alt="" style={{"width" : "200px", "height" : "200px"}} />
      <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
      </a>
      
      {/* <p class="text-muted">&copy; </p> */}
    </div>
    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><NavLink href="#" class="nav-link p-0 text-muted">Home</NavLink></li>
        <li class="nav-item mb-2"><NavLink href="#" class="nav-link p-0 text-muted">Features</NavLink></li>
        <li class="nav-item mb-2"><NavLink href="#" class="nav-link p-0 text-muted">Pricing</NavLink></li>
        <li class="nav-item mb-2"><NavLink href="#" class="nav-link p-0 text-muted">FAQs</NavLink></li>
        <li class="nav-item mb-2"><NavLink href="#" class="nav-link p-0 text-muted">About</NavLink></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><NavLink href="#" class="nav-link p-0 text-muted">Home</NavLink></li>
        <li class="nav-item mb-2"><NavLink href="#" class="nav-link p-0 text-muted">Features</NavLink></li>
        <li class="nav-item mb-2"><NavLink href="#" class="nav-link p-0 text-muted">Pricing</NavLink></li>
        <li class="nav-item mb-2"><NavLink href="#" class="nav-link p-0 text-muted">FAQs</NavLink></li>
        <li class="nav-item mb-2"><NavLink href="#" class="nav-link p-0 text-muted">About</NavLink></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><NavLink href="#" class="nav-link p-0 text-muted">Home</NavLink></li>
        <li class="nav-item mb-2"><NavLink href="#" class="nav-link p-0 text-muted">Features</NavLink></li>
        <li class="nav-item mb-2"><NavLink href="#" class="nav-link p-0 text-muted">Pricing</NavLink></li>
        <li class="nav-item mb-2"><NavLink href="#" class="nav-link p-0 text-muted">FAQs</NavLink></li>
        <li class="nav-item mb-2"><NavLink href="#" class="nav-link p-0 text-muted">About</NavLink></li>
      </ul>
    </div>
  </footer>
  <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top hunter">
      <p>&copy; 2022 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><NavLink class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></NavLink></li>
        <li class="ms-3"><NavLink class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></NavLink></li>
        <li class="ms-3"><NavLink class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></NavLink></li>
      </ul>
    </div>
</div>
  )
}

export default Footer1