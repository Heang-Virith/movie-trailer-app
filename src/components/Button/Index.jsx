import './button.css';

export default function Button(props) {
    return (
        <button className="btn" type={props.type}>
            { props.text }
        </button>
    );
}