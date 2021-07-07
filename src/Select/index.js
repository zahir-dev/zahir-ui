import React from 'react'
import ReactSelect from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Select = ({
  placeholder,
  ...props
}) => {

  let value = props.value
  
  if(props.field) {
    value = props.field.value
  }


  return (
    <>
      {props.label && (
        <div
          style={{
            marginBottom: 6,
            fontSize: 12,
          }}
        >
          {props.label}
        </div>
      )}
      <ReactSelect
        options={props.options || options}
        placeholder={placeholder}
        value={value}
        styles={{
          control: styles => ({ 
            ...styles,
            padding: 3,
            backgroundColor: 'white',
            borderColor: '#EEF2F5',
            boxShadow: 'none',
            "&:hover": {
              borderColor: '#EEF2F5',
            }
          }),
          indicatorSeparator: styles => ({
            ...styles,
            display: 'none'
          })
        }}
      />
    </>
  )
}

export default Select;