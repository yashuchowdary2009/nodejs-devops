const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // 1️⃣ Get Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Access denied. Token missing",
      });
    }

    // 2️⃣ Extract token
    const token = authHeader.split(" ")[1];

    // 3️⃣ Verify token
    jwt.verify(token, process.env.JWTSECRETE, (err, decoded) => {
      if (err) {
        // 🔴 Token expired
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({
            message: "Session expired. Please login again",
          });
        }

        // 🔴 Invalid token
        return res.status(401).json({
          message: "Invalid token. Please login again",
        });
      }

      // 4️⃣ Token valid → attach user info
      req.user = decoded;
      next();
    });

  } catch (error) {
    return res.status(401).json({
      message: "Authentication failed",
    });
  }
};

module.exports = authMiddleware;
