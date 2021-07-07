import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiTypography from '@material-ui/core/Typography';

const buildScale = (size, lineHeight) => ({
    fontSize: size,
    lineHeight: lineHeight + 'px'
});

const buildWeight = (weight) => ({
    fontWeight: weight
});



const ZuiTypography = withStyles((theme) => ({
    root: {

    },
}))(MuiTypography);

const scales = {
    100: buildScale(8.1, 10),
    200: buildScale(9.7, 12),
    300: buildScale(12, 15),
    400: buildScale(14, 18),
    500: buildScale(16.8, 21),
    600: buildScale(20.2, 25),
    700: buildScale(24.2, 30),
    800: buildScale(29, 36),
    900: buildScale(34.8, 44),
}

const weights = {
    "regular": buildWeight("normal"),
    "semi-bold": buildWeight(500),
    "bold": buildWeight("bold"),
    "extra-bold": buildWeight(800),
    "black": buildWeight(900),
}

const Typography = (p) => {
    let { scale, weight, style = {}, ...props } = p;
    
    if (scale && scales[scale]) {
        style = {
            ...scales[scale],
            ...style
        }
    }

    if (weight && weights[weight]) {
        style = {
            ...weights[weight],
            ...style
        }
    }
    return (
        <ZuiTypography
            {...props}
            style={style}
        >
            {props.children}
        </ZuiTypography>
    )
}

Typography.propTypes = {
    /**
     * Applies the theme typography styles.
     */
    scale: PropTypes.oneOf([
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ]),
    /**
     * Applies the theme typography styles.
     */
    weight: PropTypes.oneOf([
        "regular",
        "semi-bold",
        "bold",
        "extra-bold",
        "black"
    ]),
    /**
     * Set the text-align on the component.
     * @default 'inherit'
     */
    align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
    /**
     * If `true`, the text will have a bottom margin.
     * @default false
     */
    gutterBottom: PropTypes.bool,
    /**
     * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
     *
     * Note that text overflow can only happen with block or inline-block level elements
     * (the element needs to have a width in order to overflow).
     * @default false
     */
    noWrap: PropTypes.bool,
    /**
     * If `true`, the element will be a paragraph element.
     * @default false
     */
    paragraph: PropTypes.bool,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.object,
    /**
     * Applies the theme typography styles.
     * @default 'body1'
     */
    variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([
        PropTypes.oneOf([
            'body1',
            'body2',
            'button',
            'caption',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'inherit',
            'overline',
            'subtitle1',
            'subtitle2',
        ]),
        PropTypes.string,
    ]),
    /**
     * The component maps the variant prop to a range of different HTML element types.
     * For instance, subtitle1 to `<h6>`.
     * If you wish to change that mapping, you can provide your own.
     * Alternatively, you can use the `component` prop.
     * @default {
     *   h1: 'h1',
     *   h2: 'h2',
     *   h3: 'h3',
     *   h4: 'h4',
     *   h5: 'h5',
     *   h6: 'h6',
     *   subtitle1: 'h6',
     *   subtitle2: 'h6',
     *   body1: 'p',
     *   body2: 'p',
     *   inherit: 'p',
     * }
     */
    variantMapping: PropTypes /* @typescript-to-proptypes-ignore */.object,
};

Typography.defaultProps = {
    classes: {}
}

export default Typography;