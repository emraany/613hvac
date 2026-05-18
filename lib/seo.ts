import type { Metadata } from "next";
import { site } from "./site";

const baseUrl = `https://${site.domain}`;

type BuildArgs = {
  title: string;
  description?: string;
  path?: string;
};

export function buildMetadata({ title, description, path = "/" }: BuildArgs): Metadata {
  const fullTitle = title.includes(site.shortName)
    ? title
    : `${title} | ${site.shortName} — Ottawa Heating & Cooling`;
  const desc = description ?? site.description;
  const url = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(baseUrl),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: site.shortName,
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
  };
}
