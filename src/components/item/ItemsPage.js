import React from 'react';
import { connect } from 'react-redux';
import * as itemActions from '../../actions/itemActions'
import { bindActionCreators } from 'redux';
import ItemsList from './ItemsList';

class ItemsPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      item: { title: "" }
    }

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const item = this.state.item;
    item.title = event.target.value;
    this.setState({
      item: item
    })
  }

  onClickSave() {
    this.props.actions.createItem(this.state.item);
  }

  render() {
    const {items} = this.props;

    return (
      <div>
        <h1>ItemsPage</h1>
        <ItemsList items={items}></ItemsList>
        <h1>Add item</h1>
        <input type="text" onChange={this.onTitleChange} value={this.state.item.title} />
        <input type="submit" value="Save" onClick={this.onClickSave} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);
