export const increment = () => {
    return {
      type: 'INCREMENT_COUNT',
    };
  };
   
  export const decrement = () => {
    return {
      type: 'DECREMENT_COUNT',
    };
  };

  export const addvalue = (num) => {
    return {
      type: 'ADD_VALUE',
      data:parseInt(num)
    };              
  };  

  export const subtracvalue = (num) => {
    return {
      type: 'SUBTRAC_VALUE',
      data:parseInt(num)
    };              
  }; 
