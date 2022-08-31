class ExampleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };
    }
    render() {
        if (this.state.isClicked) {
            return 'You clicked this';
        }
        return React.createElement(
            'button',
            { onClick: () => this.setState({ isClicked: true }) },
            'Click me!'
        );
    }
}
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(ExampleButton));