---
sidebar_position: 0
title: Tech Tips
description: Writing LaTeX Math Equations
---
import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';
import Head from '@docusaurus/Head';

#Latex

$$
I = \int_0^{2\pi} \sin(x) dx
$$

Let $f:[a,b] \to \R$ be Riemann integrable. Let $F:[a,b]\to\R$ be $F(x)=
\int_{a}^{x}f(t)dt$. Then $$F$$ is continuous, and at all $x$ such that $f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.

Intented audience:  **Developers**.

## Links to topics here



 Created React Page[link](/mac/my-react-pages)


 [Created Markdown Page](/mac/my-markdown-page)


 [Link to created ml document](ml)

 [Markdown MDX import](/mac/someOtherDoc)

[Pandas MultiIndex](/pandas/multiindex)

[Pandas subplots](/pandas/subplots)

:::note

Data

:::

[Awesome Quant](https://github.com/wilsonfreitas/awesome-quant#data-sources)

:::info

Check the Pages Plugin API Reference documentation for an exhaustive list of options.

:::
:::tip

You can also create TypeScript pages with the .tsx extension (helloReact.tsx).

:::
:::caution

You can also create TypeScript pages with the .tsx extension (helloReact.tsx).

:::


## Generate a new site

Generate a new Docusaurus site using the **classic template**:

```shell
npm init docusaurus@latest my-website classic
```

## Start your site

Run the development server:

```shell
cd my-website

npx docusaurus start
```

Your site starts at `http://localhost:3000`.

Open `docs/intro.md` and edit some lines: the site **reloads automatically** and displays your changes.

<Tabs groupId="author-frontmatter">
  <TabItem value="single" label="Single author">

```md title="my-blog-post.md"
---
authors:
  name: Joel Marcey
  title: Co-creator of Docusaurus 1
  url: https://github.com/JoelMarcey
  image_url: https://github.com/JoelMarcey.png
---
```

  </TabItem>
  <TabItem value="multiple" label="Multiple authors">

```md title="my-blog-post.md"
---
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: S??bastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
---
```

  </TabItem>
</Tabs>


<img
  src={require('/static/img/docusaurus.png').default}
  alt="Example banner"
/>

import myImageUrl from '/static/img/docusaurus.png';

<img src={myImageUrl} alt="Example banner" />

import DocusaurusSvg from '/static/img/undraw_docusaurus_mountain.svg';

<DocusaurusSvg className="themedDocusaurus" />;