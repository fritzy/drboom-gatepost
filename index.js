'use strict';

module.exports = (options) => {

  return {

    detect: (value) => {
      return (value instanceof options.Gatepost.EmptyResult);
    },

    handle: (value) => {
      return options.Boom.notFound(value.toString());
    }

  };
};
