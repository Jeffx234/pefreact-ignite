import { memo, useState } from 'react'
import dynamic from 'next/dynamic'
import { IAddProductToWishProps } from './AddProductToWishList'

//import { AddProductToWishlist } from './AddProductToWishList'

const AddProductToWishlist = dynamic<IAddProductToWishProps>(() => {
  return import('./AddProductToWishList').then( mod => mod.AddProductToWishlist)
}, {
  loading: () => <span>Carregando...</span>
})

interface IProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }
  onAddToWishlist: (id: number) => void;
}

 function ProductItemComponent( { product, onAddToWishlist }: IProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist ] = useState(false)

  return(
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>
      
    { isAddingToWishlist && (
        <AddProductToWishlist 
        onAddToWishlist={() => onAddToWishlist(product.id)}
        onRequestClose={() => setIsAddingToWishlist(false)}
        />
    )}

    </div>
  )
}


// Impede do component redenrizar toda hora
export const ProductItem = memo(ProductItemComponent, (provprops, nextProps) => {
  return Object.is(provprops.product , nextProps.product)
});