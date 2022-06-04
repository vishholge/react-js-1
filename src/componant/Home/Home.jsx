import React from 'react'
import './Home.css';
import product_img from '../../asset/icon.png';

function Home() {
  return (
    <div>
      <header>
          <nav>
              <div className="nav-logo">
                  <h4>TheFoodList</h4>
              </div>
          </nav>
      </header>

      <section id='product_list'>
          {/* product items --> loop */}
            <div className="product">
                <img src={product_img} alt="" />
                <h2>product_name (ge)</h2>
            </div>
           
      </section>
    </div>
  )
}

export default Home
