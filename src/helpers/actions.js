import Actions from '../actions';

/**
 * Got this handy-dandy middleware from
 * https://codeburst.io/minimal-code-for-redux-async-actions-c47ea85f2141
 *
 * Slightly modified to remove seemingly pointless promises and tidy code.
 */
export const inProgressTypeName = (basicActionName) => `${basicActionName}_IN_PROGRESS`;
export const successTypeName = (basicActionName) => `${basicActionName}_SUCCESS`;
export const errorTypeName = (basicActionName) => `${basicActionName}_ERROR`;

export const asyncMiddleware = store => next => async action => {
  if (!action.hasOwnProperty('async')) {
    return next(action);
  } else {
    const { httpMethod, params, type } = action;

    const handleError = async (error) => {
      store.dispatch({
        type: errorTypeName(type),
        error
      });
    }

    store.dispatch({type: inProgressTypeName(type)});

    httpMethod(...params)
      .then(resp => {
        if (resp.error) {
          handleError(resp.error);
          return next(action);
        }

        store.dispatch({
          type: successTypeName(type),
          ...resp
        });
      })
      .catch(error => handleError(error));

    return next(action);
  }
};

export const actionsBinder = (...actionNames) => {
  return (dispatch) => {
    return actionNames.reduce((bound, actionName) => {
      var actionCreator = Actions[actionName];
      if (typeof actionCreator !== 'function') {
        throw new Error(`Unknown action creator: ${actionName}`);
      }

      bound[actionName] = function() {
        return dispatch(actionCreator.apply(Actions, arguments));
      };

       return bound;
    }, {});
  };
}

export default {
  inProgressTypeName,
  successTypeName,
  errorTypeName,
  asyncMiddleware,
  actionsBinder
}
