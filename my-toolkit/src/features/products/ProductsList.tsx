import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch } from "../../app/store"
import { useEffect } from "react"
import {
  fetchProducts,
  selectLoading,
  selectProducts,
  productsSlice,
} from "./productsSlice"
import ClearIcon from "@mui/icons-material/Clear"


const { removeProduct } = productsSlice.actions

export const ProductsList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector(selectProducts)
  const loading = useSelector(selectLoading)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading)
    return <p className="text-xl text-center text-gray-600 p-8">
      Загрузка...
    </p>

  return (
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
      <a
        className="
          inline-block 
          py-2 px-4            
          text-white           
          bg-gray-800          
          border-2 border-gray-800 
          rounded-lg           
          font-bold            
          text-base            
          cursor-pointer       
          mt-4                 
          transition duration-300 
          hover:bg-gray-700    
          hover:border-gray-700
        "
        target="_blank"
        href="https://github.com/dmitrined/toolkit_projects_ait/tree/main/my-toolkit/src/features/products"
      >
        Посмотреть код этой страницы  GitHubIcon
      </a>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col relative"
          >
            <button
              type="button"
              onClick={() => dispatch(removeProduct(product.id))}
              className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full text-xs font-bold hover:bg-red-600 transition-colors z-10"
              aria-label="Remove Product"
            >
              <ClearIcon />
            </button>

            <div className="flex justify-center items-center h-52 mb-4 overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-3">
              {product.title}
            </h2>

            <div className="mt-auto pt-3 border-t border-gray-100 space-y-1">
              <p className="text-2xl font-bold text-indigo-600">
                ${product.price.toFixed(2)}
              </p>

             
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
