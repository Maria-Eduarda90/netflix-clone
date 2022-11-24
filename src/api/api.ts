import { MovieProps } from './../pages/home/index';

export const API_KEY = import.meta.env.VITE_SOME_KEY;
export const API_BASE_URL = "https://api.themoviedb.org/3";

const basicFecth = async (endpoint: string) => {
  const req = await fetch(`${API_BASE_URL}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
    getHomeList: async () => {
        return [
          {
            slug: "originals",
            title: "Originais do Netflix",
            items: await basicFecth(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
          },
          {
            slug: "trending",
            title: "Recomendados para voçê",
            items: await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
          },
          {
            slug: "toprated",
            title: "Em alta",
            items: await basicFecth(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
          },
          {
            slug: "action",
            title: "Ação",
            items: await basicFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
          },
          {
            slug: "comedy",
            title: "Comédia",
            items: await basicFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
          },
          {
            slug: "horror",
            title: "Terror",
            items: await basicFecth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
          },
          {
            slug: "romance",
            title: "Romance",
            items: await basicFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
          },
          {
            slug: "Documentary",
            title: "Documentarios",
            items: await basicFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
          },
        ];
    }
}