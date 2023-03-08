import React from 'react'
import {useGetAllProductsQuery} from '../state/reducers/apiSlice'

const products = () => {

  const { data, isLoading, isError } = useGetAllProductsQuery()

  if (isLoading) {
    return <p>Loading . . .</p>
  } else if (isError) {
    return <p>Data Fetching not working</p>
  }

  return (
    <>
      <div className="container">

        <h1>Products</h1>

        <div className="row">

          {
            data.products.map((item) => {

              return(
                <div className="col-lg-3 mt-4" key={item.id}>
                  <div className="card">
                    <img src={item.thumbnail} className='card-img' alt="" />

                    <div className="card-body">
                      <h4>{item.title}</h4>

                      <p>{item.brand}</p>

                      <div className="row d-flex align-items-center">
                        <div className="col-6">
                          <h2>{item.price}</h2>
                        </div>
                        <div className="col-6">
                          <h6><i className="fa-solid fa-star"></i> {item.rating}</h6>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-6">
                          <p>{item.stock}</p>
                        </div>
                        <div className="col-6">
                          <p>{item.category}</p>
                        </div>
                      </div>

                    </div>
                    <a href={item.title} className='btn btn-lg btn-danger'>Order Now</a>
                  </div>
                </div>
              )

            })
          }


        </div>

      </div>
        {
          // data.products.map((item) => {
          //   return (
          //     <p>item</p>
          //   )
          // })
        }
    </>
  )
}

export default products