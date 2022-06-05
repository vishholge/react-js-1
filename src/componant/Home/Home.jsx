import React from 'react'
import './Home.css';
import product_img from '../../asset/icon.png';
import records from '../../asset/OFF_subset17.json'

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
          {
            records.map( records =>{
              return(
                <>
                <button key={records.code} type="button" className="product" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src={product_img} alt="product_img" />
                <h2>{records.product_name} ({records.generic_name})</h2>
                </button>
                
                
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Product Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td >url</td>
                            <td>{records.url}</td>
                          </tr>
                          <tr>
                            <td >Container</td>
                            <td>{records.packaging }</td>
                          </tr>
                          <tr>
                            <td >Serving Size</td>
                            <td>{records.serving_size }</td>
                          </tr>
                          <tr>
                            <td >Energy</td>
                            <td>{records.energy_100g }</td>
                          </tr>
                          <tr>
                            <td >Energy From Fat</td>
                            <td>{records.energy_from_fat_100g }</td>
                          </tr>
                        </tbody>
                      </table>
                      </div>
                     
                    </div>
                  </div>
                </div>
                </>
              )
            })
          }
    </section>
  </div>
  )
}

export default Home
