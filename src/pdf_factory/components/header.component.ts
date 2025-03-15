export class HeaderComponent {
  constructor(
    private logoUrl?: string,
    private companyName?: string
  ) {}

  render() {
    return {
      canvas: [
        {
          type: 'rect',
          x: -40,
          y: -40,
          w: 596,
          h: 100,
          color: '#026EFA',
        },
      ]
    };
  }
}