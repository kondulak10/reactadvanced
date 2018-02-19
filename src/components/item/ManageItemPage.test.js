import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageItemPage} from "./ManageItemPage";

function setup() {
  let props = {

  }

  return shallow(<ManageItemPage {...props}></ManageItemPage>)
}

describe("ManageItemPage", ()=>{
  it ("Mount save!", ()=>{
    const props = {
      actions: {saveItem: ()=>{return Promise.resolve()}},
      item: {
        title: "pes"
      }
    }
    const wrapper = mount(<ManageItemPage {...props}/>)
    const saveButton = wrapper.find("input").last();
    expect(saveButton.prop("type")).toBe("submit");
    saveButton.simulate("click");
    expect(wrapper.state().errors.title).toBe("Title must be at least 4 characters.")
  });

  it ("Shallow", ()=>{
    const wrapper = setup();
  });
})
