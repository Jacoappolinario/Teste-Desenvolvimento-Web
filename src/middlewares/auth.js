import jwt, { verify } from 'jsonwebtoken';

export default async(request, response, next) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({ error: "User not authorizated!" });
    }

    const [, token] = authHeader.split(" ");

    try {
        const decoded = verify(token, process.env.KEY_SECRET);
        console.log(decoded)

        next()

    } catch {
        return response.status(401).json({ error: "Invalid Jwt Token" })
    }
}