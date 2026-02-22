import client from './client';

export const getMyProfile = async () => {
  const response = await client.get('/user/profile'); 
  return response.data;
};