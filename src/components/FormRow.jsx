const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <>
      <label htmlFor={name}>{labelText || name}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
export default FormRow;
