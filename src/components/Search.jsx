import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetchSearch from '../context/useFetchSearch'

const Search = () => {
    const {search} = useParams()

    const {data, loading} = useFetchSearch(search)

    if (loading) {
        <h1>Loading...</h1>
    }
  return (
    <div className='flex flex-row flex-wrap justify-center p-0'>
        {data?.length ? data?.map((item) => (
            <div
              className="w-5/12 xl:w-2/12 md:w-3/12 text-center shadow border-gray-light p-1 m-4 rounded"
              key={item?.id}
            >
              <Link to={`/product/${item?.id}`}>
                <img
                  src={item?.thumbnail}
                  alt=""
                  className="h-40 object-contain"
                />
                <hr />
                <p className="sm:text-xl sm:font-semibold mt-2">{item?.title}</p>
                <h1 className="sm:text-lg sm:font-medium">${item?.price}</h1>
              </Link>
            </div>
        )) : (
            <div className='text-center my-10 text-4xl font-semibold p-10 rounded shadow'>
                <h1>Wdon't have the product you looking for</h1>
            </div>
        )}
    </div>
  )
}

export default Search