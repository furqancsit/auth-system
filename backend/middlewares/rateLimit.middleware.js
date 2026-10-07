import rateLimit from "express-rate-limit";

const createAuthLimiter = ({ windowMs, limit, message }) => {
  return rateLimit({
    windowMs,
    limit,

    standardHeaders: "draft-8",
    legacyHeaders: false,

    message: {
      success: false,
      message,
    },
  });
};

export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
  standardHeaders: "draft-8",
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

// Login
export const loginLimiter = createAuthLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 10,
  message: "Too many login attempts. Please try again later.",
});

// Register
export const registerLimiter = createAuthLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  limit: 5,
  message: "Too many registration attempts. Please try again later.",
});

// Google login
export const googleLoginLimiter = createAuthLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 10,
  message: "Too many Google login attempts. Please try again later.",
});

// // Forgot password
// export const forgotPasswordLimiter = createAuthLimiter({
//   windowMs: 60 * 60 * 1000, // 1 hour
//   limit: 5,
//   message: "Too many password reset requests. Please try again later.",
// });
