import PropTypes from 'prop-types';
export default function Button({ children, disabled }) {
  return (
    <Button
      disabled={disabled}
     
    >
      {children}
    </Button>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};
