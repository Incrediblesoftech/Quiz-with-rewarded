import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import OutsideClickHandler from "react-outside-click-handler";
import cn from "classnames";
import { CgCloseR } from "react-icons/cg";
import styles from "./Modal.module.scss";
function Modal(props) {
  const {
    outerClassName,
    containerClassName,
    isOpen,
    onClose,
    showCloseBtn,
    children,
    size,
    title,
    closeIconClassName,
  } = props;


  

  if (typeof document !== "undefined") {
    return createPortal(
      isOpen && (
        <div className={cn(styles.modal)} id="modal">
          <div
            className={cn(
              styles.outer,
              {
                [styles.sm]: size === "sm",
                [styles.m]: size === "m",
                [styles.md]: size === "md",
                [styles.lg]: size === "lg",
              },
              outerClassName
            )}
          >

              <div className={cn(styles.container, containerClassName)}>
                {title}
                <div className="">{children}</div>
                {showCloseBtn && (
                  <div
                    className={cn(styles.close)}
                    onClick={onClose}
                  >
                    <CgCloseR size={20} className={styles.closeIcon}/>
                  </div>
                )}
              </div>

          </div>
        </div>
      ),
      document.body
    );
  }
}

export default Modal;

Modal.propTypes = {
  outerClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  showCloseBtn: PropTypes.bool,
  children: PropTypes.element,
  size: PropTypes.oneOf(["sm", "m", "md", "lg"]),
  isDisableOutsideClick: PropTypes.bool,
  modalClassName: PropTypes.string,
  title: PropTypes.element,
  closeIconClassName: PropTypes.string,
};

Modal.defaultProps = {
  outerClassName: "",
  containerClassName: "",
  isOpen: false,
  onClose: () => {},
  showCloseBtn: true,
  children: null,
  size: "sm",
  isDisableOutsideClick: false,
  modalClassName: "",
  title: null,
  closeIconClassName: "",
};
