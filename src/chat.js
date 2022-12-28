import React, { useState } from 'react';

const FormExample=()=> {
  const [fields, setFields] = useState([{ value: '' }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: '' });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <div>
      {fields.map((field, i) => (
        <div key={i}>
          <input type="text" value={field.value} onChange={e => handleChange(i, e)} />
          <button type="button" onClick={() => handleRemove(i)}>-</button>
        </div>
      ))}
      <button type="button" onClick={handleAdd}>Add field</button>
    </div>
  );
}

export default FormExample;