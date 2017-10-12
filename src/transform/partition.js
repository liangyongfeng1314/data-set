const assign = require('lodash/assign');
const values = require('lodash/values');
const partition = require('../util/partition');
const {
  registerTransform
} = require('../data-set');

const DEFAULT_OPTIONS = {
  groupBy: [], // optional
  orderBy: []
};

registerTransform('partition', (dataView, options = {}) => {
  options = assign({}, DEFAULT_OPTIONS, options);
  dataView.rows = partition(dataView.rows, options.groupBy, options.orderBy);
});

function group(dataView, options = {}) {
  options = assign({}, DEFAULT_OPTIONS, options);
  dataView.rows = values(partition(dataView.rows, options.groupBy, options.orderBy));
}

registerTransform('group', group);
registerTransform('groups', group);
