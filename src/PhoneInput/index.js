import { useTheme } from '@material-ui/core';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import colors from '../colors';

function Phone(props) {
  const theme = useTheme();

  let formProps = props;
  const { onChange, form } = formProps;

  const onValueChange = (phoneNumber) => {
    if (form) {
      form.setFieldValue(props.field.name, phoneNumber)
    }

    if (onChange) {
      onChange(phoneNumber);
    }
  };

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
      <PhoneInput
        country={props.country}
        inputStyle={{
          color: theme.palette.text.primary,
          width: '100%',
          height: 42,
          border: `1px solid ${colors.N20}`
        }}
        buttonStyle={{
          border: `1px solid ${colors.N20}`,
          backgroundColor: 'transparent'

        }}
        {...formProps}
        onChange={onValueChange}
      />
    </>
  )
}

Phone.defaultProps = {
  country: 'id'
}

export default Phone;