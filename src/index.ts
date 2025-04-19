import crypto from 'crypto';

const CHAR_SET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function generateShortId(length: number = 7): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += CHAR_SET.charAt(Math.floor(Math.random() * CHAR_SET.length));
  }
  return result;
}

export async function generateUniqueShortId(
  checkExists: (id: string) => Promise<boolean>,
  length: number = 7,
  maxAttempts: number = 5
): Promise<string> {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const id = generateShortId(length);
    const exists = await checkExists(id);
    if (!exists) return id;
  }
  throw new Error('Failed to generate a unique short ID after max attempts');
}

export function generateDeterministicShortId(input: string, length: number = 7): string {
  const hash = crypto.createHash('sha256').update(input).digest('base64url');
  return hash.substring(0, length);
}

export function generateTimeBasedShortId(userId: string = '', length: number = 10): string {
  const timestamp = Date.now().toString(36);
  const randomPart = Array.from({ length }, () => CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)]).join('');
  const userPart = userId ? Buffer.from(userId).toString('base64url').slice(0, 4) : '';
  return `${userPart}${timestamp}${randomPart}`.slice(0, length);
}
