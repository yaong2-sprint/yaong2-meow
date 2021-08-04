import TypeError from './TypeError.js';

export default class ApiError extends TypeError {
  constructor(message, type, status) {
    super(message, type);
    this.status = status;
  }
}
