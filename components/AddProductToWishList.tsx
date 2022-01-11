export interface IAddProductToWishProps {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

export  function AddProductToWishlist( {onAddToWishlist, onRequestClose} : IAddProductToWishProps) {
  return(
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )
}