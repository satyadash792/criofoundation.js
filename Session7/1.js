function User(fullName) {
  this.fullName = fullName;
  this.friendList = [];

  this.addFriend = function (friendName) {
    this.friendList.push(friendName);
  };
  
}