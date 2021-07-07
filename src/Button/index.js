import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


const ZuiButton = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none'
        }
    },
    outlinedPrimary: {
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            color: 'white'
        }
    },
    outlinedSecondary: {
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: 'white'
        }
    },
    containedSecondary: {
        color: 'white'
    }
}))(MuiButton);

const Button = ({ loading, disabled, ...props}) => {
    return (
        <ZuiButton 
            {...props}
            disabled={disabled || loading}
        >
            {loading ? 
            <CircularProgress 
                size={24}
                color="inherit"
            />
            : props.children}
        </ZuiButton>
    )
}

Button.propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'primary'
     */
    color: PropTypes.oneOfType([
        PropTypes.oneOf(['inherit', 'primary', 'secondary']),
        PropTypes.string,
    ]),
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled: PropTypes.bool,
    /**
     * If `true`, no elevation is used.
     * @default false
     */
    disableElevation: PropTypes.bool,
    /**
     * If `true`, the  keyboard focus ripple is disabled.
     * @default false
     */
    disableFocusRipple: PropTypes.bool,
    /**
     * If `true`, the ripple effect is disabled.
     *
     * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
     * to highlight the element by applying separate styles with the `.Mui-focusedVisible` class.
     * @default false
     */
    disableRipple: PropTypes.bool,
    /**
     * Element placed after the children.
     */
    endIcon: PropTypes.node,
    /**
     * @ignore
     */
    focusVisibleClassName: PropTypes.string,
    /**
     * If `true`, the button will take up the full width of its container.
     * @default false
     */
    fullWidth: PropTypes.bool,
    /**
     * The URL to link to when the button is clicked.
     * If defined, an `a` element will be used as the root node.
     */
    href: PropTypes.string,
    /**
     * The size of the component.
     * `small` is equivalent to the dense button styling.
     * @default 'medium'
     */
    size: PropTypes.oneOfType([
        PropTypes.oneOf(['small', 'medium', 'large']),
        PropTypes.string,
    ]),
    /**
     * Element placed before the children.
     */
    startIcon: PropTypes.node,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.object,
    /**
     * @ignore
     */
    type: PropTypes.oneOfType([PropTypes.oneOf(['button', 'reset', 'submit']), PropTypes.string]),
    /**
     * The variant to use.
     * @default 'text'
     */
    variant: PropTypes.oneOfType([
        PropTypes.oneOf(['contained', 'outlined', 'text']),
        PropTypes.string,
    ]),
    /**
     * If `true`, the component is loading.
     * @default false
     */
    loading: PropTypes.bool,
};

Button.defaultProps = {
    color: 'primary',
    variant: 'contained'
}

export default Button;