import React from 'react';
import immutable from 'immutable';
import DocumentTitle from 'react-document-title';
import Component from '../common/component.react';
import ContributeForm from '../contribute/contributeForm.react';

export default class ContributePage extends Component {


  render() {
    return (
      <DocumentTitle title='Contribute'>
        <section className='content'>
          <h1>Contribute</h1>
          <ContributeForm message={this.props.app.get('message')} />
        </section>
      </DocumentTitle>
    );
  }

}

ContributePage.propTypes = {
  app: React.PropTypes.instanceOf(immutable.Map).isRequired
};