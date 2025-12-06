import { User } from '../types';

// This is a placeholder for Better Auth SDK integration
// In a real application, you would import and use the actual Better Auth SDK.

export class AuthService {
  private currentUser: User | null = null;

  async signup(email: string, password: string): Promise<User> {
    console.log('Signing up with Better Auth:', email);
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser: User = { id: 'user-' + Date.now(), email };
        this.currentUser = newUser;
        resolve(newUser);
      }, 1000);
    });
  }

  async signin(email: string, password: string): Promise<User> {
    console.log('Signing in with Better Auth:', email);
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          const existingUser: User = { id: 'user-123', email };
          this.currentUser = existingUser;
          resolve(existingUser);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  }

  async logout(): Promise<void> {
    console.log('Logging out from Better Auth');
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        this.currentUser = null;
        resolve();
      }, 500);
    });
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
