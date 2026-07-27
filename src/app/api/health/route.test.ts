/**
 * @jest-environment node
 */
import { GET } from './route';

describe('GET /api/health', () => {
  it('returns 200 with "we are alive"', async () => {
    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({ message: "I'm alive!" });
  });
});
