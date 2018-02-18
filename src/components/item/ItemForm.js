import React from 'react';
import TextInput from '../common/TextInput';

const ItemForm = ({ item, onChange, errors, saving, onSave }) => {
  return (
    <form>
      <h1>Form</h1>
      <TextInput
        name="title"
        label="Title"
        value={item.title}
        onChange={onChange}
        error={errors.title}
      />
      <input type="submit"
        disabled={saving}
        value={saving ? "Saving" : "Save"}
        className="btn btn-primary"
        onClick={onSave} />
    </form>
  )
}

export default ItemForm;
