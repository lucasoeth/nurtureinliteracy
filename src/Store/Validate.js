const Validate = state => {
  /*
    0 => not checked or valid
    1 => Required
    2 => invalid
  */

  const category = {
    firstName: 'basicString',
    lastName: 'basicString',
    email: 'email',
  }

  var result = state.valid; //making a copy of state


  for (var prop in state.PersonalInfo) {
    result[prop] = 0;
    if (state.PersonalInfo[prop].length === 0) {
      result[prop] = 1;
    } else if (!formatChecker[category[prop]](state.PersonalInfo[prop])){
      result[prop] = 2;
    }
  }
  return result;
}

const formatChecker = {
  //return false if invalid
  basicString: (string) => {
    const regex = /^[A-z]{2,}[-']?[A-z]*$/;
    return regex.test(string);
  },

  email: (email) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  },

  address: (address) => {
    const regex = /^\d{1,5}\s((NW|NE|SW|SE|north|south|west|east|n|e|s|w)\.?\s)?(\b\w*\b\s){1,2}\w*$/;
    return regex.test(address);
  },

  city: (city) => {
    const regex = /^[A-z.']+(\s[A-z]+){0,2}/;
    return regex.test(city);
  },

  number: (info) => {

  }
}

export default Validate;
