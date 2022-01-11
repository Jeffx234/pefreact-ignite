import { ProductItem } from "./ProductItem"
import { List, ListRowRenderer } from 'react-virtualized'
import React from "react"

interface ISearchResultsProps {
  totalPrice:  number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>
  onAddToWishlist: (id: number) => void;
}


export function SearchResults( {results, onAddToWishlist, totalPrice }: ISearchResultsProps ) {

  const rowRenderer:ListRowRenderer = ( { index, key, style }) => {
    return (
      <div key={key} style={style}>

        <ProductItem 
        product={results[index]}
        onAddToWishlist={onAddToWishlist}
      />
      </div>
    )
  }

  //useMemo
  return(
    <div>
      <h2>{totalPrice}</h2>

      <List 
      height={300}
      rowHeight={30}
      width={900}
      overscanRowCount={5}
      rowCount={results.length}
      rowRenderer={rowRenderer}
      />

      {/*results.map(product => {
        return(
          <ProductItem 
          key={product.id}
          product={product}
          onAddToWishlist={onAddToWishlist}
          />
        )
      })*/}
    </div>
  )
}

/**
 * 1. Criar uma nova versao do component
 * 2. Comparar com a versao anteior
 * 3 se houverem alteraçãoes, vai atualizar o que alterou
 */

/**
 * 1. Pure Function Components
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. Medium to big size
 */

/**
 * useMemo  / useCallback
 * 0 - Evitar que a configuração seja refeita do zero
 * 1- Calculos pesados
 * 2. Igualdadade referencial( quando a gente repassa aquela configuração para um componente filho)
 */
