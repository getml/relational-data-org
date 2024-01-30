import React from 'react';
import shallowEqual from 'react-pure-render/shallowEqual';

export default class Component extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (this.context.router) {
      const changed = this.pureComponentLastPath !== this.context.router.getCurrentPath();
      this.pureComponentLastPath = this.context.router.getCurrentPath();

      if (changed)
        return true;
    }

    return !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState);
  }

}

Component.contextTypes = {
  router: React.PropTypes.func
}