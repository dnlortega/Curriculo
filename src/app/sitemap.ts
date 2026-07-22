import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://daniel-ortega.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Você pode adicionar mais páginas aqui se decidir ter rotas diferentes como /blog, /projetos, etc.
  ];
}
