import React, { useState } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiInput from '@material-ui/core/Input';
import { InputAdornment, IconButton, FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import colors from "../colors";
import { fieldToTextField } from "./utils"

const ZuiInput = withStyles((theme) => ({
    root: {
        padding: 12,
        fontSize: 14,
        border: `1px solid ${colors.N20}`,
        borderRadius: 4,
    },
    input: {
        padding: 0,
    },
    formControl: {
        marginTop: '8px !important'
    },
}))(MuiInput);

const Input = (props) => {
    const [hide, setHide] = React.useState(true)

    let formProps = props

    if (props.form) {
        formProps = fieldToTextField(props)
    }

    return (
        <>
            {props.label && (
                <div
                    style={{
                        marginBottom: 6,
                        fontSize: 12
                    }}
                >
                    {props.label}
                </div>
            )}

                <ZuiInput
                    {...formProps}
                    disableUnderline
                    type={
                        props.type === 'password' ?
                            hide ? 'password' : 'text'
                            : props.type
                    }
                    endAdornment={
                        props.endAdornment ?
                            props.endAdornment
                            : props.type === 'password' ?
                                <InputAdornment>
                                    <IconButton
                                        size="small"
                                        onClick={() => setHide(!hide)}
                                    >
                                        {hide ?
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.85837 7.5L12.5 10.1333V10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.299 7.76339 10.6631 7.5 10 7.5H9.85837ZM6.27504 8.16667L7.56671 9.45833C7.52504 9.63333 7.50004 9.80833 7.50004 10C7.50004 10.663 7.76343 11.2989 8.23227 11.7678C8.70111 12.2366 9.337 12.5 10 12.5C10.1834 12.5 10.3667 12.475 10.5417 12.4333L11.8334 13.725C11.275 14 10.6584 14.1667 10 14.1667C8.89497 14.1667 7.83516 13.7277 7.05376 12.9463C6.27236 12.1649 5.83337 11.1051 5.83337 10C5.83337 9.34167 6.00004 8.725 6.27504 8.16667ZM1.66671 3.55833L3.56671 5.45833L3.94171 5.83333C2.56671 6.91667 1.48337 8.33333 0.833374 10C2.27504 13.6583 5.83337 16.25 10 16.25C11.2917 16.25 12.525 16 13.65 15.55L14.0084 15.9L16.4417 18.3333L17.5 17.275L2.72504 2.5L1.66671 3.55833ZM10 5.83333C11.1051 5.83333 12.1649 6.27232 12.9463 7.05372C13.7277 7.83512 14.1667 8.89493 14.1667 10C14.1667 10.5333 14.0584 11.05 13.8667 11.5167L16.3084 13.9583C17.5584 12.9167 18.5584 11.55 19.1667 10C17.725 6.34167 14.1667 3.75 10 3.75C8.83337 3.75 7.71671 3.95833 6.66671 4.33333L8.47504 6.125C8.95004 5.94167 9.45837 5.83333 10 5.83333Z" fill="#A5AEBD" />
                                            </svg>
                                            :
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99998 3.75C5.83331 3.75 2.27498 6.34167 0.833313 10C2.27498 13.6583 5.83331 16.25 9.99998 16.25C14.1666 16.25 17.725 13.6583 19.1666 10C17.725 6.34167 14.1666 3.75 9.99998 3.75ZM9.99998 14.1667C7.69998 14.1667 5.83331 12.3 5.83331 10C5.83331 7.7 7.69998 5.83333 9.99998 5.83333C12.3 5.83333 14.1666 7.7 14.1666 10C14.1666 12.3 12.3 14.1667 9.99998 14.1667ZM9.99998 7.5C8.61665 7.5 7.49998 8.61667 7.49998 10C7.49998 11.3833 8.61665 12.5 9.99998 12.5C11.3833 12.5 12.5 11.3833 12.5 10C12.5 8.61667 11.3833 7.5 9.99998 7.5Z" fill="#A5AEBD" />
                                            </svg>
                                        }
                                    </IconButton>
                                </InputAdornment>
                                : null
                    }
                />
                {
                    formProps.helperText &&
                    <FormHelperText
                        error
                    >
                        {formProps.helperText}
                    </FormHelperText>
                }
        </>
    )
}


export default Input;