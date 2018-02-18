import expect from 'expect'
import React from 'react'
import { mount, shallow } from 'enzyme'
import ItemForm from './ItemForm'

function setup(saving) {
  let props = {
    item: {},
    saving: saving,
    errors: {},
    onSave: () => { },
    onChange: () => { }
  }

  return shallow(<ItemForm {...props}></ItemForm>)
}

describe("Enzymy", () => {
  it("renders form and h1 enzyme", () => {
    const wrapper = setup(false);
    expect(wrapper.find("form").length).toBe(1);
    expect(wrapper.find("h1").text()).toEqual("Form");
  })

  it("save enzyme", () => {
    const wrapper = setup(false);
    expect(wrapper.find("input").props().value).toBe("Save");
  })

  it("save enzyme", () => {
    const wrapper = setup(true);
    expect(wrapper.find("input").props().value).toBe("Saving");
  })
})
