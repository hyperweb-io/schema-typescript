export class HTTPError extends Error {
  constructor(message: string, public status: number) {
    super(`${message} | Status: ${status}`);
    this.name = this.constructor.name;
  }
}
    
export class BadRequestError extends HTTPError {
  constructor() { super('Bad Request', 400); }
}
export class UnauthorizedError extends HTTPError {
  constructor() { super('Unauthorized', 401); }
}
export class PaymentRequiredError extends HTTPError {
  constructor() { super('Payment Required', 402); }
}
export class ForbiddenError extends HTTPError {
  constructor() { super('Forbidden', 403); }
}
export class NotFoundError extends HTTPError {
  constructor() { super('Not Found', 404); }
}
export class MethodNotAllowedError extends HTTPError {
  constructor() { super('Method Not Allowed', 405); }
}
export class NotAcceptableError extends HTTPError {
  constructor() { super('Not Acceptable', 406); }
}
export class ProxyAuthenticationRequiredError extends HTTPError {
  constructor() { super('Proxy Authentication Required', 407); }
}
export class RequestTimeoutError extends HTTPError {
  constructor() { super('Request Timeout', 408); }
}
export class ConflictError extends HTTPError {
  constructor() { super('Conflict', 409); }
}
export class GoneError extends HTTPError {
  constructor() { super('Gone', 410); }
}
export class LengthRequiredError extends HTTPError {
  constructor() { super('Length Required', 411); }
}
export class PreconditionFailedError extends HTTPError {
  constructor() { super('Precondition Failed', 412); }
}
export class PayloadTooLargeError extends HTTPError {
  constructor() { super('Payload Too Large', 413); }
}
export class URITooLongError extends HTTPError {
  constructor() { super('URI Too Long', 414); }
}
export class UnsupportedMediaTypeError extends HTTPError {
  constructor() { super('Unsupported Media Type', 415); }
}
export class RangeNotSatisfiableError extends HTTPError {
  constructor() { super('Range Not Satisfiable', 416); }
}
export class ExpectationFailedError extends HTTPError {
  constructor() { super('Expectation Failed', 417); }
}
export class ImATeapotError extends HTTPError {
  constructor() { super("I'm a Teapot", 418); }
}
export class MisdirectedRequestError extends HTTPError {
  constructor() { super('Misdirected Request', 421); }
}
export class UnprocessableEntityError extends HTTPError {
  constructor() { super('Unprocessable Entity', 422); }
}
export class LockedError extends HTTPError {
  constructor() { super('Locked', 423); }
}
export class FailedDependencyError extends HTTPError {
  constructor() { super('Failed Dependency', 424); }
}
export class UpgradeRequiredError extends HTTPError {
  constructor() { super('Upgrade Required', 426); }
}
export class PreconditionRequiredError extends HTTPError {
  constructor() { super('Precondition Required', 428); }
}
export class TooManyRequestsError extends HTTPError {
  constructor() { super('Too Many Requests', 429); }
}
export class RequestHeaderFieldsTooLargeError extends HTTPError {
  constructor() { super('Request Header Fields Too Large', 431); }
}
export class UnavailableForLegalReasonsError extends HTTPError {
  constructor() { super('Unavailable For Legal Reasons', 451); }
}
export class InternalServerError extends HTTPError {
  constructor() { super('Internal Server Error', 500); }
}
export class NotImplementedError extends HTTPError {
  constructor() { super('Not Implemented', 501); }
}
export class BadGatewayError extends HTTPError {
  constructor() { super('Bad Gateway', 502); }
}
export class ServiceUnavailableError extends HTTPError {
  constructor() { super('Service Unavailable', 503); }
}
export class GatewayTimeoutError extends HTTPError {
  constructor() { super('Gateway Timeout', 504); }
}
export class HTTPVersionNotSupportedError extends HTTPError {
  constructor() { super('HTTP Version Not Supported', 505); }
}
export class VariantAlsoNegotiatesError extends HTTPError {
  constructor() { super('Variant Also Negotiates', 506); }
}
export class InsufficientStorageError extends HTTPError {
  constructor() { super('Insufficient Storage', 507); }
}
export class LoopDetectedError extends HTTPError {
  constructor() { super('Loop Detected', 508); }
}
export class NotExtendedError extends HTTPError {
  constructor() { super('Not Extended', 510); }
}
export class NetworkAuthenticationRequiredError extends HTTPError {
  constructor() { super('Network Authentication Required', 511); }
}
    
  
export function createHTTPError(status: number): HTTPError {
  switch (status) {
  case 400: return new BadRequestError();
  case 401: return new UnauthorizedError();
  case 402: return new PaymentRequiredError();
  case 403: return new ForbiddenError();
  case 404: return new NotFoundError();
  case 405: return new MethodNotAllowedError();
  case 406: return new NotAcceptableError();
  case 407: return new ProxyAuthenticationRequiredError();
  case 408: return new RequestTimeoutError();
  case 409: return new ConflictError();
  case 410: return new GoneError();
  case 411: return new LengthRequiredError();
  case 412: return new PreconditionFailedError();
  case 413: return new PayloadTooLargeError();
  case 414: return new URITooLongError();
  case 415: return new UnsupportedMediaTypeError();
  case 416: return new RangeNotSatisfiableError();
  case 417: return new ExpectationFailedError();
  case 418: return new ImATeapotError();
  case 421: return new MisdirectedRequestError();
  case 422: return new UnprocessableEntityError();
  case 423: return new LockedError();
  case 424: return new FailedDependencyError();
  case 426: return new UpgradeRequiredError();
  case 428: return new PreconditionRequiredError();
  case 429: return new TooManyRequestsError();
  case 431: return new RequestHeaderFieldsTooLargeError();
  case 451: return new UnavailableForLegalReasonsError();
  case 500: return new InternalServerError();
  case 501: return new NotImplementedError();
  case 502: return new BadGatewayError();
  case 503: return new ServiceUnavailableError();
  case 504: return new GatewayTimeoutError();
  case 505: return new HTTPVersionNotSupportedError();
  case 506: return new VariantAlsoNegotiatesError();
  case 507: return new InsufficientStorageError();
  case 508: return new LoopDetectedError();
  case 510: return new NotExtendedError();
  case 511: return new NetworkAuthenticationRequiredError();
  default: return new HTTPError('Unknown Error', status);
  }
}
  