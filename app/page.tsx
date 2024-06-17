import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-full">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Ahmad&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Zaini&nbsp;</h1>
        <h1 className={title()}>Nijar&nbsp;</h1>
        <br />
        <h1 className={title({ size: "xs" })}>Software Engineer</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Laravel, Next, Express, Php, Go, Typescript
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.getCv}
        >
          Download CV
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <div className="flex flex-wrap items-center justify-center gap-2">
            Explore my personal profile as a
            <Code className="ml-2" color="primary">
              Software Engineer
            </Code>
          </div>
        </Snippet>
      </div>
    </section>
  );
}
