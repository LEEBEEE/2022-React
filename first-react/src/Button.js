import PropTypes from 'prop-types';
export default function Button({ color, text, onClick }) {
    return (
        <button className={color} onClick={onClick}>{text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string
}
Button.defaultProps = {
    text: 'btn'
}