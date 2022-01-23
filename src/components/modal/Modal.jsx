import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
    static defaultProps = {
        open: false,
    };

    static propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        largeImg: PropTypes.string.isRequired
    };
    componentDidMount() {
        window.addEventListener("keydown", this.handleClose);
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleClose);
    }

    handleClose = (e) => {
        if (e.code === "Escape") {
            this.props.onClose();
        }
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        const { open, largeImg } = this.props;
        return createPortal(
            open ? (
                <div className="Overlay" onClick={this.handleClose}>
                    <div className="Modal">
                        <img src={largeImg} alt="" />
                    </div>
                </div>
            ) : null,
            modalRoot
        );
    }
}

export default Modal;