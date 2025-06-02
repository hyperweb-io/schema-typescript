
import React, { createContext, useContext, useMemo, useState } from 'react'
import { KubernetesClient } from './swagger-client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Configuration types
export interface KubernetesConfig {
  restEndpoint: string
  headers?: Record<string, string>
}

// Context types
interface KubernetesContextValue {
  client: KubernetesClient
}

// Create context
const KubernetesContext = createContext<KubernetesContextValue | undefined>(undefined)

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
interface KubernetesProviderProps {
  children: React.ReactNode
  initialConfig?: Partial<KubernetesConfig>
}

// Provider component
export function KubernetesProvider({ 
  children, 
  initialConfig 
}: KubernetesProviderProps) {
  const [config, setConfig] = useState<KubernetesConfig>({
    restEndpoint: initialConfig?.restEndpoint,
    headers: initialConfig?.headers || {},
  })

  // Create client instance
  const client = useMemo(() => {
    return new KubernetesClient({
      restEndpoint: config.restEndpoint,
    })
  }, [config.restEndpoint])

  const contextValue: KubernetesContextValue = {
    client
  }

  return (
    <QueryClientProvider client={queryClient}>
      <KubernetesContext.Provider value={contextValue}>
        {children}
      </KubernetesContext.Provider>
    </QueryClientProvider>
  )
}

// Hook to use Kubernetes context
export function useKubernetes() {
  const context = useContext(KubernetesContext)
  if (!context) {
    throw new Error('useKubernetes must be used within a KubernetesProvider')
  }
  return context
}

// Export query client for use in hooks
export { queryClient };