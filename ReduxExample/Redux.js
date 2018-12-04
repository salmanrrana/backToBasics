// This is an explanation of redux according to the insurance analogy from Stepehn Grider
// The following was done in codepen within the JS section only.
// make sure to include redux by choosing settings -> javascript -> search redux and add to project-> save
// Nothing will appear on the output in codepen. Open dev tools and check console

console.clear();

//People dropping off the different types of forms or the "Actions" and "Action Creators"

//Form to Create a policy
const createPolicy = (name, amount) => {
  return {
    // Action (a form in our insurance analogy)
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount
    }
  };
};

//Form to Delete a policy
const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  };
};

//Form to Create a claim
const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

// Implementing the Reducers or the "Departments"

// Claims Department
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    //we care about this action (form)
    //take old list of claims and add in our payload into a new array list
    return [...oldListOfClaims, action.payload];
  }
  //we dont care about the action (form)
  return oldListOfClaims;
};

// Accounting Department
const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

// Policy Department
const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
};

// wire it all to a STORE

const { createStore, combineReducers } = Redux;

// these are the names of the different reducers we just created above
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

// use createStore from redux
const store = createStore(ourDepartments);

// const action = createPolicy('Alex', 20);
// console.log("this is the action: ", action);

// store.dispatch(action);

store.dispatch(createPolicy("Alex", 20));
store.dispatch(createPolicy("Jim", 30));
store.dispatch(createPolicy("Bob", 40));

store.dispatch(createClaim("Jim", 120));
store.dispatch(createClaim("Alex", 50));

store.dispatch(deletePolicy("Bob"));

console.log(store.getState());
