import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO: FC<Props> = ({ description, lang, meta, title, author }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            lang
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaLang = lang || site.siteMetadata.lang;
  const metaTitle = title || site.siteMetadata.title + ` | online resume`;
  const metaAuthor = author || site.siteMetadata.author;

  return (
    <Helmet
      htmlAttributes={{
        metaLang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${metaTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta || [])}
    />
  );
};

interface Props {
  description?: string;
  lang?: string;
  meta?: IMeta[];
  title?: string;
  author?: string;
}

interface IMeta {
  name: string;
  content: string;
  property?: undefined;
}

export default SEO;
