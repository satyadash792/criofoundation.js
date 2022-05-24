function User(fullName) {
  this.fullName = fullName;
  this.friendList = [];

  this.addFriend = function (friendName) {
    this.friendList.push(friendName);
  };

  this.printFriendList = function () {
    for (let i = 0; i < this.friendList.length; i++) {
      console.log(this.friendList[i]);
    }
  };

  this.findMutualsWith = function (secondUser) {
    const mutuals = [];
    const currentUserList = this.friendList;
    const secondUserList = secondUser.friendList;

    for (let i = 0; i < currentUserList.length; i++) {
      if (secondUserList.includes(currentUserList[i])) {
        mutuals.push(currentUserList[i]);
      }
    }
    return mutuals;
  };
}

//User 1 = Amit
const amit = new User("Amit Jha");
//Added Friends
amit.addFriend("Vivek");
amit.addFriend("Abhishek");
amit.addFriend("Akash");
amit.addFriend("Sonu");

//Printed friend list
console.log("\nAmit\n")
amit.printFriendList();

//User 2 = Satya
const satya = new User("Satya Dash");
//Added Friends
satya.addFriend("Shubham");
satya.ad