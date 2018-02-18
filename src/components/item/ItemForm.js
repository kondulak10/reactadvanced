import React from 'react';
import TextInput from '../common/TextInput';

const ItemForm = ({ item, onChange, errors, loading, onSave }) => {
  return (
    <div>
      <form>
        <TextInput
          name="title"
          label="Title"
          value={item.title}
          onChange={onChange}
          error={errors.title}
        />
        <input type="submit"
          disabled={loading}
          value={loading ? "Saving" : "Save"}
          className="btn btn-primary"
          onClick={onSave} />
      </form>
    </div>
  )
}

export default ItemForm;
