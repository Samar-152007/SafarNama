/**
 * Joi request validation middleware generator
 * @param {Joi.Schema} schema
 * @param {'body'|'query'|'params'} source
 */
export function validate(schema, source = 'body') {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[source], {
      abortEarly: false,
      stripUnknown: true,
      errors: { wrap: { label: false } },
    });

    if (error) {
      const details = error.details.map((detail) => ({
        field: detail.path.join('.'),
        message: detail.message,
      }));

      return res.status(400).json({
        success: false,
        error: 'VALIDATION_FAILED',
        message: 'Invalid request data provided.',
        details,
      });
    }

    // Replace request data with sanitized and typed value
    req[source] = value;
    next();
  };
}

export default validate;
