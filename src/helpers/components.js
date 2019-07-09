import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { actionsBinder } from '../helpers/actions';

export const connectWithStyles = (styles, mapState, actions, component) => {
  return compose(
    withStyles(styles),
    connect(mapState, actionsBinder(...actions))
  )(component);
}
