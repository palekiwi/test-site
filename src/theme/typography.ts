import { css } from "styled-components";
import { lineHeight } from "./index";
import { rem } from "./utils";
import { tablet } from "./media";
import { fonts } from "./index";

export const base = css`
  margin: 0;
  margin-bottom: 1.5rem;
  font-family: ${fonts.sans};
  font-weight: 400;
  color: inherit;
`;

// Hero or blog post title
export const canon = css`
  ${base}
  font-size: ${rem(32)};
  line-height: ${lineHeight(0)};

  ${tablet(css`
    font-size: ${rem(44)};
  `)}
`;

// Article title or section header
export const trafalgar = css`
  ${base}
  font-size: ${rem(24)};
  line-height: ${lineHeight(1)};

  ${tablet(css`
    font-size: ${rem(32)};
  `)}
`;

// Primary headline on indexes
export const paragon = css`
  ${base}
  font-size: ${rem(22)};
  line-height: ${lineHeight(1)};

  ${tablet(css`
    font-size: ${rem(28)};
  `)}
`;

// Sub header, blockquote
export const doublePica = css`
  ${base}
  font-size: ${rem(20)};
  line-height: ${lineHeight(2)};

  ${tablet(css`
    font-size: ${rem(24)};
  `)}
`;

// Headline title or subtitle
export const greatPrimer = css`
  ${base}
  font-size: ${rem(18)};
  line-height: ${lineHeight(2)};

  ${tablet(css`
    font-size: ${rem(20)};
  `)}
`;

// Article body copy only
export const bodyCopy = css`
  ${base}
  font-size: ${rem(16)};
  line-height: ${lineHeight(3)};
`;

//Index links, titles & headlines, citations
export const pica = css`
  ${base}
  font-size: ${rem(16)};
  line-height: ${lineHeight(2)};
`;

// Index body copy & image captions, related links
export const longPrimer = css`
  ${base}
  font-size: ${rem(15)};
  line-height: ${lineHeight(3)};

  ${tablet(css`
    font-size: ${rem(14)};
  `)}
`;

// Time stamps and bylines
export const brevier = css`
  ${base}
  font-size: ${rem(14)};
  line-height: ${lineHeight(3)};

  ${tablet(css`
    font-size: ${rem(13)};
  `)}
`;

// small header capitals
export const minion = css`
  ${base}
  font-size: ${rem(12)};
  line-height: ${lineHeight(3)};

  ${tablet(css`
    font-size: ${rem(12)};
  `)}
`;
