import React from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as itemActions from '../../actions/itemActions';
import ItemForm from './ItemForm';
import toastr from 'toastr'

export class ManageItemPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      item: Object.assign({}, this.props.item),
      errors: {},
      saving: false
    }

    this.updateItemState = this.updateItemState.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.item.id != nextProps.item.id) {
      this.setState({
        item: Object.assign({}, nextProps.item)
      })
    }
  }

  updateItemState(event) {
    const field = event.target.name;
    let item = Object.assign({}, this.state.item);
    item[field] = event.target.value;
    return this.setState({ item: item });
  }

  itemFormIsValid() {
    let valid = true;
    let errors = {};

    if (this.state.item.title.length < 4) {
      errors.title = "Title must be at least 4 characters.";
      valid = false;
    }

    this.setState({
      errors: errors
    })
    return valid;
  }

  saveItem(event) {
    event.preventDefault();

    if (!this.itemFormIsValid()) {
      return;
    }


    this.setState({
      saving: true
    })
    this.props.actions.saveItem(this.state.item).then(() => {
      this.redirect();
    }).catch(r => {
      toastr.error(r);
      this.setState({
        saving: false
      })
    });
  }

  redirect() {
    this.setState({
      saving: false
    })
    toastr.success("Item saved");
    this.context.router.push('/items');
  }

  render() {
    return (
      <div>
        <h1>Manage item</h1>
        <ItemForm
          item={this.state.item}
          errors={this.state.errors}
          onChange={this.updateItemState}
          onSave={this.saveItem}
          saving={this.state.saving}
        />
      </div>
    )
  }
}

ManageItemPage.contextTypes = {
  router: PropTypes.object
};

function getItemById(items, id) {
  const item = items.filter(item => item.id == parseInt(id));
  if (item) return item[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const itemId = ownProps.params.id;


  let item = {
    id: '',
    title: ''
  }

  if (itemId && state.items.length > 0) {
    item = getItemById(state.items, itemId);
  }

  console.log("Item", item);

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
