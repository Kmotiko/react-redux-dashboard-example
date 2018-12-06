import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from "react-router";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

import DashboardDrawer from '../components/DashboardDrawer'




class PageA extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pagea: {data: {}}
    }
  }

  render() {
    const { classes, pagea } = this.props;
    return (
      <div>
      Page A
        <List>
          { pagea.data.map((id, index) => (
            <ListItem
              key={index}
              dense
              button
              //onClick={}
              //className={classes.listItem}
            >
              <ListItemText primary={`id : ${id}`} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

class PageAMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pagea: {}
    }
  }

  componentDidMount(){
    this.props.actions.pageARequest()
  }

  render() {
    const { classes, pagea } = this.props;
    return(
      <section>
        <DashboardDrawer actions={this.props.actions} menuOpen={this.props.menuOpen} pagea={this.props.pagea}>
          <PageA actions={this.props.actions} pagea={this.props.pagea}/>
        </DashboardDrawer>
      </section>
    );
  }
}

PageAMain.propTypes = {
}

export default PageAMain;
