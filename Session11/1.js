class User {
  constructor(name = "User") {
    this.user = {
      isLoggedIn: false,
      fullName: name,
    };
  }

  logIn() {
    this.user.isLoggedIn = true;
    return this;
  }

  logOut() {
    this.user.isLoggedIn = false;
    return this;
  }

  printLoginState() {
    console.log(`${this.user.fullName} is loggedIn = ${this.user.isLoggedIn}`);
    return this;
  }
}

//this -> balmeet = {user, logIn(), logOut()}
const balmeet = new User("Balmeet");
balmeet.logIn().printLoginState().logOut().printLoginState();

const neha = new User("Neha");
neha.logIn().printLoginState()