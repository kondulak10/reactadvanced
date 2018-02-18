import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import ItemForm from './ItemForm'

function setup(saving) {
  let props = {
    item: {},
    saving: saving,
    errors: {},
    onSave: () => { },
    onChange: () => { }
  }

  let renderer = TestUtils.createRenderer();
  renderer.render(<ItemForm {...props}></ItemForm>)
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  }
}

describe("Item form via react test utils", () => {
  it("renders form and h1", () => {
    const { output } = setup();
    expect(output.type).toBe("form");
    let [h1] = output.props.children;
    expect(h1.type).toBe("h1");
  })

  it("save button", ()=>{
    const {output} = setup(false);
    const submitButton = output.props.children[2];
    expect(submitButton.props.value).toBe("Save");
  })

  it("save button", ()=>{
    const {output} = setup(true);
    const submitButton = output.props.children[2];
    expect(submitButton.props.value).toBe("Saving");
  })
})
