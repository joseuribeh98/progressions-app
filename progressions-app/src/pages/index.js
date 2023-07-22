import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import axios from 'axios';
import Header from '@/components/Header';
const queryClient = new QueryClient()

export const useTasks = () => {
  return useQuery('tasks', async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/tasks`);
    return data;
  });
};

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
    </QueryClientProvider>
  )
}
