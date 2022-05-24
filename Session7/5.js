function friends(name){
  this.name=name;
   this.friendList = [];

  this.addfriends= function (friendName) {
    this.friendList.push(friendName);
  };

  this.findMutualsWith = function (secondUser) {
    const mutuals = [];
    const currentUserList = this.friendList;
    const secondUserList = secondUser.friendList;

    for (let i = 0; i < this.friendList.length; i++) {
      if (secondUserList.includes(this.friendList[i])) {
        mutuals.push(this.friendList[i]);
      }
    }
    return mutuals;
  };
}
const satya=new friends("Satyabrata Dash");
satya.addfriends("subham");
satya.addfriends("Bikash");
satya.addfriends("Anshu  ");
console.log(satya);

const rajesh=new friends("Rajesh swain");
rajesh.addfriends("subham");
rajesh.addfriends("Bikash");
rajesh.addfriends("Gouri  ");
console.log(rajesh);

console.log(satya.findMutualsWith(rajesh));
