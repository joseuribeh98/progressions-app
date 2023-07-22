import { useQuery } from 'react-query';
import axios from 'axios';

export const useTasks = () => {
  return useQuery('tasks', async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/tasks`);
    return data;
  });
};

export const useTask = (id) => {
    return useQuery(['task', id], async () => {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/tasks/${id}`);
        return data;
    });
}