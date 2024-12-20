import React from 'react';
import immutable from 'immutable';
import Component from '../common/component.react';
import Dataset from './dataset.react';

require('./datasetlist.styl');

export default class DatasetList extends Component {

  render() {
    return (
      <ul className='DatasetList'>
        {this.props.datasets.map((dataset, i) => {
          return <Dataset dataset={dataset} key={dataset.title} />;
        })}
      </ul>
    );
  }

}

DatasetList.propTypes = {
  datasets: React.PropTypes.instanceOf(immutable.List).isRequired
};