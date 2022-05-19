import "./input-form.component.scss";
const Inputform = ({ label, ...otherprops }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherprops} />
      <label
        className={`${
          otherprops.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};

export default Inputform;
