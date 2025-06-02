export const generateContext = (Type: string, pathToClient: string) => `
import React, { createContext, useContext, useMemo, useState } from 'react'
import { KubernetesClient } from '${pathToClient}'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Configuration types
export interface ${Type}Config {
  restEndpoint: string
  headers?: Record<string, string>
}

// Context types
interface ${Type}ContextValue {
  client: ${Type}Client
}

// Create context
const ${Type}Context = createContext<${Type}ContextValue | undefined>(undefined)

// Query client for TanStack Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
      staleTime: 30 * 1000, // 30 seconds
      gcTime: 5 * 60 * 1000, // 5 minutes
    },
  },
})

// Provider props
interface ${Type}ProviderProps {
  children: React.ReactNode
  initialConfig?: Partial<${Type}Config>
}

// Provider component
export function ${Type}Provider({ 
  children, 
  initialConfig 
}: ${Type}ProviderProps) {
  const [config, setConfig] = useState<${Type}Config>({
    restEndpoint: initialConfig?.restEndpoint,
    headers: initialConfig?.headers || {},
  })

  // Create client instance
  const client = useMemo(() => {
    return new ${Type}Client({
      restEndpoint: config.restEndpoint,
    })
  }, [config.restEndpoint])

  const contextValue: ${Type}ContextValue = {
    client
  }

  return (
    <QueryClientProvider client={queryClient}>
      <${Type}Context.Provider value={contextValue}>
        {children}
      </${Type}Context.Provider>
    </QueryClientProvider>
  )
}

// Hook to use ${Type} context
export function use${Type}() {
  const context = useContext(${Type}Context)
  if (!context) {
    throw new Error('use${Type} must be used within a ${Type}Provider')
  }
  return context
}

// Export query client for use in hooks
export { queryClient };`;