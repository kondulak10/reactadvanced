import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as itemActions from '../../actions/itemActions';
import ItemForm from './ItemForm';

class ManageItemPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      item: Object.assign({}, this.props.item),
      errors: {}
    }
  }

  render() {
    return (
      <div>
        <h1>Manage item</h1>
        <ItemForm
          item={this.state.item}
          errors={this.state.errors}/>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  let item = {
    id: '',
    title: ''
  }
  return {
    item: item
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageItemPage)
