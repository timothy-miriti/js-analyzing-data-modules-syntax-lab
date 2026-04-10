require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (let i = 0; i < args.length; i++) {
    const currentArray = args[i];
    combinedObject.users = [...combinedObject.users, ...currentArray];
  }

  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  return combinedObject;
}

module.exports = combineUsers;


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

