import React from 'react';
import { connect } from 'react-redux';
import * as itemActions from '../../actions/itemActions'
import { bindActionCreators } from 'redux';
import ItemsList from './ItemsList';
import {browserHistory} from 'react-router';
import ManageItemPage from './ManageItemPage';

class ItemsPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      item: { title: "" }
    }

    this.redirectToAdd = this.redirectToAdd.bind(this);
  }

  redirectToAdd() {
    browserHistory.push("/item");
  }

  render() {
    const { items } = this.props;

    return (
      <div>
        <h1>ItemsPage</h1>
        <h2>Add item</h2>
        <input type="submit" value="Add item" className="btn btn-primary" onClick={this.redirectToAdd} />
        <h2>See items</h2>
        <ItemsList items={items}></ItemsList>
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
