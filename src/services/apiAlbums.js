import supabase from './supabase';

export async function getAlbums() {
  const { data, error } = await supabase.from('albums').select('*');

  if (error) {
    console.error(error);
    throw new Error('Album could not be loaded');
  }

  return data;
}
