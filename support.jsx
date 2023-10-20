    <div className="col-lg-9 col-md-8">
      <div className="row pb-3">
          {/* sorting */}
        <div className="col-12 pb-1">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="ml-2">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-light dropdown-toggle" >
                  Sorting
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    Latest
                  </a>
                  <a className="dropdown-item" href="#">
                    Popularity
                  </a>
                  <a className="dropdown-item" href="#">
                    Best Rating
                  </a>
                </div>
              </div>
              <div className="btn-group ml-2">
                <button type="button" className="btn btn-sm btn-light dropdown-toggle" >
                  Showing
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    10
                  </a>
                  <a className="dropdown-item" href="#">
                    20
                  </a>
                  <a className="dropdown-item" href="#">
                    30
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Product items */}
        {book !== undefined && book.length > 0 ? (
          book.map((element)=>{
              return (
                <>
                <div className="col-lg-3 col-md-6 col-sm-6 pb-1" key={element._id}>
                  
                <div className="product-item bg-light mb-4">
                   {/* Product image and actions */}
              <div className="product-img position-relative overflow-hidden">

              <img className="img-fluid w-100 " src={element.image} alt="Product" />

              <div className="product-action">
                <a className="btn btn-outline-dark btn-square" onClick={()=>setCart(cart+1)}>
                  <i className="fa fa-shopping-cart" ></i>
                </a>
                <a className="btn btn-outline-dark btn-square" href="#">
                  <i className="far fa-heart"></i>
                </a>
                <a className="btn btn-outline-dark btn-square" href="#">
                  <i className="fa fa-sync-alt"></i>
                </a>
                
                 <Link to={`product/detail/${element._id}`} className="btn btn-outline-dark btn-square"> <i className="fa fa-search"></i></Link>
                
              </div>

            </div>

            {/* Product details */}
            <div className="text-center py-4">
              <a className="h6 text-decoration-none text-truncate" href="#">
                {element.title}
              </a>
              <div className="d-flex align-items-center justify-content-center mt-2">
                <h5>{element.price}</h5>
                <h6 className="text-muted ml-2">
                  <del>$00.00</del>
                </h6>
              </div>
              <div className="d-flex align-items-center justify-content-center mb-1">
                <small className="fa fa-star text-primary mr-1"></small>
                <small className="fa fa-star text-primary mr-1"></small>
                <small className="fa fa-star text-primary mr-1"></small>
                <small className="fa fa-star text-primary mr-1"></small>
                <small className="fa fa-star text-primary mr-1"></small>
                <small>(99)</small>
              </div>
            </div>

            </div>
            </div>
            </>)
            })
            
        ) : isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>No products found.</div>
        )}





        {/* Product items */}
        

            


      
    
    
        {/* Pagination */}
        <div className="col-12">
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>