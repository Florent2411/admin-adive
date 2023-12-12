const Formatter = {
  arrayResponse: {
    format: (array) => {
      return array.map((entry) => ({ id: entry.id, ...entry.attributes }));
    },
  },
};

export default Formatter;
