const CartReducer = (state, action) =>{
  switch(action.type){
    case "Add":
      const existingItem = state.find(item => item.id === action.product.id);
      if (existingItem) {
        // Item exists, update the quantity
        return state.map(item =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + action.product.quantity }
            : item
        );
      } else {
        // Item does not exist, add it to the cart
        return [...state, action.product];
      }

    case "Remove":
      return state.filter(p=> p.id != action.id)

    case "Increase":
      const IndexI = state.findIndex(p=>p.id === action.id)
      state[IndexI].quantity += 1
      return[...state]
    case "Decrease":
      const IndexD = state.findIndex(p=>p.id === action.id)
      state[IndexD].quantity -= 1
      return[...state]

    default:
      state;
  }
}

export default CartReducer
