import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
    try {
        // Read token from Authorization header
        let token = req.headers.authorization || req.headers.token;

        if (!token) {
            return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
        }

        // Remove 'Bearer ' if present
        if (token.startsWith("Bearer ")) {
            token = token.slice(7).trim();
        }

        // Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if email matches admin
        if (!decoded.email || decoded.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ success: false, message: "Access Denied. Admins Only" });
        }

        // Attach user info to request
        req.user = decoded;

        next(); // pass control to addProduct
    } catch (error) {
        console.error(error);
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default adminAuth;