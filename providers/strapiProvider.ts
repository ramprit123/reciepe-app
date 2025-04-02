// strapiProvider.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const STRAPI_API_URL = process.env.EXPO_PUBLIC_STRAPI_URL!; // Update this to your Strapi URL
const STRAPI_TOKEN = process.env.EXPO_PUBLIC_STRAPI_TOKEN!; // Replace with your Strapi API token if required

const apiClient = axios.create({
  baseURL: STRAPI_API_URL,
  headers: {
    Authorization: `Bearer ${STRAPI_TOKEN}`, // Include if your API requires authentication
    'Content-Type': 'application/json',
  },
});

// Generic type for Strapi response
interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Strapi Provider Functions
export const useStrapi = <T>(contentType: string) => {
  const queryClient = useQueryClient();

  // Fetch all items (GET /api/{contentType})
  const useFetchAll = () => {
    return useQuery<StrapiResponse<T>>({
      queryKey: [contentType],
      queryFn: async () => {
        const response = await apiClient.get(`/${contentType}`);
        return response.data;
      },
    });
  };

  // Fetch single item by ID (GET /api/{contentType}/{id})
  const useFetchById = (id: string | number) => {
    return useQuery<StrapiResponse<T>>({
      queryKey: [contentType, id],
      queryFn: async () => {
        const response = await apiClient.get(`/${contentType}/${id}`);
        return response.data;
      },
      enabled: !!id, // Only run if ID is provided
    });
  };

  // Create an item (POST /api/{contentType})
  const useCreate = () => {
    return useMutation({
      mutationFn: async (data: T) => {
        const response = await apiClient.post(`/${contentType}`, { data });
        return response.data;
      },
      onSuccess: () => {
        // Invalidate and refetch the list after creating
        queryClient.invalidateQueries({ queryKey: [contentType] });
      },
    });
  };

  // Update an item by ID (PUT /api/{contentType}/{id})
  const useUpdate = () => {
    return useMutation({
      mutationFn: async ({ id, data }: { id: string | number; data: T }) => {
        const response = await apiClient.put(`/${contentType}/${id}`, { data });
        return response.data;
      },
      onSuccess: (_, variables) => {
        // Invalidate both the list and the specific item
        queryClient.invalidateQueries({ queryKey: [contentType] });
        queryClient.invalidateQueries({
          queryKey: [contentType, variables.id],
        });
      },
    });
  };

  // Delete an item by ID (DELETE /api/{contentType}/{id})
  const useDelete = () => {
    return useMutation({
      mutationFn: async (id: string | number) => {
        const response = await apiClient.delete(`/${contentType}/${id}`);
        return response.data;
      },
      onSuccess: (_, id) => {
        // Invalidate both the list and the specific item
        queryClient.invalidateQueries({ queryKey: [contentType] });
        queryClient.invalidateQueries({ queryKey: [contentType, id] });
      },
    });
  };

  // Fetch items with filters (GET /api/{contentType}?filters...)
  const useFetchWithFilters = (filters: Record<string, any>) => {
    return useQuery<StrapiResponse<T>>({
      queryKey: [contentType, filters],
      queryFn: async () => {
        const response = await apiClient.get(`/${contentType}`, {
          params: { filters },
        });
        return response.data;
      },
    });
  };

  return {
    useFetchAll,
    useFetchById,
    useCreate,
    useUpdate,
    useDelete,
    useFetchWithFilters,
  };
};

// Example usage for a specific content type (e.g., "articles")
export const useArticles = () => useStrapi('articles');
