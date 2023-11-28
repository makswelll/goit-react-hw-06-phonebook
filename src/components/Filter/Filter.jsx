export const Filter = ({ value, onChange }) => (
  <input
    type="text"
    name="filter"
    value={value}
    onChange={onChange}
    placeholder="Find contacts by name"
  />
);
