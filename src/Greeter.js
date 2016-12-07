class Greeter {
  constructor(name) {
    this.message = `Hello, ${name}`;
  }

  greet() {
    console.log(this.message);
  }
}

export default Greeter;
