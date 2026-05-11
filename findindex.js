function findUserByUsername(arr, username){
    return arr.find(function(user){
        return user.username === username
    })
}

function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === username;
  })
  if(foundIndex === -1) return;

  return usersArray.splice(foundIndex,1)[0];
}