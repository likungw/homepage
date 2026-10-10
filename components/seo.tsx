import { DefaultSeo } from "next-seo";
import { FullName, SiteURL, siteSeoDescription } from "../data/site";

const config = {
  title: `${FullName}`,
  description: siteSeoDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SiteURL,
    site_name: FullName,
    images: [
      {
        url: `${SiteURL}/og.png`,
        alt: FullName,
      },
    ],
  },
  twitter: {
    handle: "@KunLi90358191",
    site: "@KunLi90358191",
    cardType: "summary_large_image",
  },
};

export default function SEO() {
  return <DefaultSeo {...config} />;
}
