import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import crypto from 'crypto';

// Rate limiting
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later'
});

// Security headers
export const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
    },
  },
  crossOriginEmbedderPolicy: true,
  crossOriginOpenerPolicy: true,
  crossOriginResourcePolicy: { policy: "same-site" },
  dnsPrefetchControl: true,
  frameguard: { action: 'deny' },
  hidePoweredBy: true,
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
  ieNoOpen: true,
  noSniff: true,
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  xssFilter: true,
});

// Request obfuscation
export const obfuscateRequest = (req, res, next) => {
  // Remove sensitive headers
  delete req.headers['x-powered-by'];
  delete req.headers['server'];
  
  // Add nonce to response
  res.locals.nonce = crypto.randomBytes(16).toString('base64');
  
  next();
};

// Response obfuscation
export const obfuscateResponse = (req, res, next) => {
  const originalSend = res.send;
  res.send = function (body) {
    if (typeof body === 'object') {
      // Obfuscate sensitive data in response
      if (body.token) {
        body.token = `Bearer ${body.token}`;
      }
      if (body.user) {
        delete body.user.password;
      }
    }
    return originalSend.call(this, body);
  };
  next();
}; 