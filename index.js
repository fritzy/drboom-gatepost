'use strict';

module.exports = (options) => {

  const Gatpost = options.Gatepost;
  const Boom = options.Boom;

  return {

    detect: (value) => {
      return (value instanceof Gatepost.EmptyResult);
    },

    handle: (value) => {
      return Boom.notFound(value.toString());
    }

  };
};
