export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-04'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = "skkqdi48i8B1LKs0lAcHO0clNoDFA3sea8yQ4zGCQufjFVeXcJrzoSuchYdeHQnYdEmS0h2JIdxI1Azq70QbhDD2DSgFxYgPAauAl47Xttx9uT6SzHRHRCTI4yJvExqXoUUYhVSjRUvwM6F856xhWO2ASDtHjhGjrE7Gw0zTya4t9XFkwR1I"
  

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
