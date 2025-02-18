import "@testing-library/jest-dom/vitest"
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll } from "vitest"
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
    http.get('https://www.dnd5eapi.co/api/skills/*', () => {
        // ...and respond to them using this JSON response.
        return HttpResponse.json({
            "desc": [
                "test description"
            ],
        })
    }),
]

 
export const server = setupServer(...handlers);

// Setup server before and after tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
