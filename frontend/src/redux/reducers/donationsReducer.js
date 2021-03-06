const initialData = {
  usersDonations : [],
  allDonations: []
};

export const donationsReducer = (state = initialData, action) => {
    switch (action.type) { 
      case 'GET_ALL_DONATIONS' : {
      return {
          ...state,
          allDonations : action.payload
        }
      }    
      default: return state
   }
}