export default function Select(props) {
  return (
    <>
      <label className="form-label">{props.label}</label>
      <select
        className="form-select form-select-lg"
        value={props.value}
        onChange={(event) => {
          props.onChange(event.target.value);
        }}
      >
        {props.options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </>
  );
}
