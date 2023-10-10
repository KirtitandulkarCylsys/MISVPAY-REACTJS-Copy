import React from 'react';

class NotificationsDropdown extends React.Component {
  render() {
    return (
      <div className="dropdown">
        <a
          id="dLabel"
          role="button"
          data-toggle="dropdown"
          data-target="#"
          href="/page.html"
        >
          <i className="glyphicon glyphicon-bell"></i>
        </a>

        <ul
          className="dropdown-menu notifications"
          role="menu"
          aria-labelledby="dLabel"
        >
          <div className="notification-heading">
            <h4 className="menu-title">Notifications</h4>
            <h4 className="menu-title pull-right">
              View all
              <i className="glyphicon glyphicon-circle-arrow-right"></i>
            </h4>
          </div>
          <li className="divider"></li>
          <div className="notifications-wrapper">
            <a className="content" href="#">
              <div className="notification-item">
                <h4 className="item-title">Evaluation Deadline 1 · day ago</h4>
                <p className="item-info">Marketing 101, Video Assignment</p>
              </div>
            </a>
            {/* Add more notification items as needed */}
          </div>
          <li className="divider"></li>
          <div className="notification-footer">
            <h4 className="menu-title">
              View all
              <i className="glyphicon glyphicon-circle-arrow-right"></i>
            </h4>
          </div>
        </ul>
      </div>
    );
  }
}

export default NotificationsDropdown;
