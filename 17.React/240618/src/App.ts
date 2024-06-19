import Component from "./lib/Component";
import Counter from "./Components/Counter";

export default class App extends Component {
  constructor(parent: HTMLElement) {
    super(parent);
    this.setState({ test: 1 });

    new Counter(document.getElementById("counter"));
  }

  override componentDidMount(): void {
    console.log("now test");
  }
  // overloading : 적용방법 찾아볼 것

  override componentDidUpdate(): void {
    // console.log(new Date());
    // setTimeout(
    //   () => {
    //     this.setState({ test: this.state.test + 1 });
    //     //   this.state.test += 1;
    //   },
    //   10 * 60 * 1000
    // );
  }

  // override render() {
  //   console.log(this.state);
  //   return `<div>
  //               ${this.state?.test}
  //           </div>`;
  // }

  override render() {
    console.log(this.state);
    return `
    <div>
      ${this.state?.test}
      <div id="counter"></div>
    </div>`;
  }
}
