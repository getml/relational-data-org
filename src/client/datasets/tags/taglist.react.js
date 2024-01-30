import Component from '../../common/component.react.js';
import React from 'react';
import immutable from 'immutable';
import Tag from './tag.react';

require('./taglist.styl');

export default class TagList extends Component {

  render() {
    return (
      <ul className='TagList'>
        {this.props.tags.map((tag, i) => {
          return (
            <li key={tag.name + '-' + tag.text}>
              <Tag tag={tag} />
            </li>
          );
        })}
      </ul>
    );
  }

}

TagList.propTypes = {
  tags: React.PropTypes.instanceOf(immutable.List)
}