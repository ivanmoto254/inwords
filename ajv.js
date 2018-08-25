const Ajv = require('ajv')

module.exports = () => {
  const ajv = new Ajv({allErrors: true, format: 'full'})
  // Handle custom keywords
}