import type { GetServerSideProps } from "next";
import { SiteURL } from "../data/site";
import { researchProjects } from "../data/projects";

/** Automatically includes newly added TypeScript project entries. */
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const routes = ["/", "/about", "/people", "/publications", "/talks", "/projects",
    ...researchProjects.map(project => `/projects/${project.slug}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes.map(route => `  <url><loc>${SiteURL}${route}</loc></url>`).join("\n") +
    `\n</urlset>`;
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(xml);
  res.end();
  return { props: {} };
};

export default function Sitemap() { return null; }
