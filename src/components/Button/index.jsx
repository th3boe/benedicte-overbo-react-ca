import "./button.m.css"
import PropTypes from "prop-types"

export default function Button({name, onClick}) { 
    return (
        <button className="view-product-btn" onClick={onClick}>{name}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string
}