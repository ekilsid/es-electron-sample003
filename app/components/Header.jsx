import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.header.tab
    };

    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab(tabName) {
    if (tabName !== this.state.activeTab) {
      this.setState({
        activeTab: tabName
      });
      this.props.history.push('/' + tabName);
    }
  }

  render() {
    return (
      <div>
        <header className="toolbar toolbar-header">
          <h1 className="title">Header the tabs</h1>
        </header>
        <div className="tab-group">
          <div
            className={`tab-item ${this.state.activeTab === 'tab1' &&
              'active'}`}
            onClick={() => this.handleChangeTab('tab1')}
          >
            <span className="icon icon-close-tab" />
            Tab1
          </div>

          <div
            className={`tab-item ${this.state.activeTab === 'tab2' &&
              'active'}`}
            onClick={() => this.handleChangeTab('tab2')}
          >
            <span className="icon icon-close-tab" />
            Tab2
          </div>
          <div
            className={`tab-item ${this.state.activeTab === 'tab3' &&
              'active'}`}
            onClick={() => this.handleChangeTab('tab3')}
          >
            <span className="icon icon-close-tab" />
            Tab3
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  header: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.log('[Main#mapStateToProps]');
  console.dir(state);
  return {
    header: state.header
  };
};

export default withRouter(connect(mapStateToProps)(Header));
