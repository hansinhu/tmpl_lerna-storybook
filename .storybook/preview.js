export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'porcelain',
    values: [{
      name: 'white',
      value: '#fff',
    }, {
      name: 'black',
      value: '#000'
    }, {
      name: 'porcelain',
      value: '#F0F2F5'
    }]
  }
}