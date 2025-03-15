export class SizedBoxComponent {
  constructor(
    private width: number,
    private height: number,
  ) {
  }

  render() {
    return {
      text: '',
      width: this.width,
      height: this.height,
    };
  }
}
