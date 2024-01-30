import React from 'react';
import Component from './component.react';

export default function exposeRouter(BaseComponent) {

  class ExposeRouter extends Component {

    render() {
      return <BaseComponent {...this.props} router={this.context.router} />;
    }

  }

  ExposeRouter.contextTypes = {
    router: React.PropTypes.func.isRequired
  };

  ExposeRouter.displayName = `${BaseComponent.name}ExposeRouter`;


  return ExposeRouter;

}
