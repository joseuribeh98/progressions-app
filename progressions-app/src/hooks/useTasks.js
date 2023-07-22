import { useQuery } from 'react-query';
import axios from 'axios';

export const useTasks = () => {
  return useQuery('tasks', async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/tasks`);
    if (response.status !== 200) {
      throw new Error('Problem fetching tasks');
    }
    return response.data;
  });
};
