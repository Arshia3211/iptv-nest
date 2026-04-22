import * as jwt from 'jsonwebtoken';

export const generateToken = (user: any): string => {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET || 'your-secret-key',  
    { expiresIn: '30d' }  
    
  );
};
