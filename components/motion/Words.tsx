import { Fragment } from "react";
import type { CSSProperties, ElementType } from "react";

interface WordsProps {
  text: string;
  as?: ElementType;
  /** "load": CSS animation on load (works without JS). "reveal": starts when the nearest [data-reveal] becomes .is-visible. */
  trigger: "load" | "reveal";
  className?: string;
}

/**
 * Splits text on spaces into masked word spans that rise into place.
 * Real space text nodes are kept between words, so assistive tech reads a normal sentence.
 * Server-renderable (no hooks); markup is identical on server and client.
 */
export function Words({ text, as: Tag = "span", trigger, className }: WordsProps) {
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <Tag className={`fx-words fx-words--${trigger}${className ? ` ${className}` : ""}`}>
      {words.map((w, i) => (
        <Fragment key={i}>
          {i > 0 ? " " : null}
          <span className="fx-w" style={{ "--i": Math.min(i, 7) } as CSSProperties}>
            <span className="fx-w__in">{w}</span>
          </span>
        </Fragment>
      ))}
    </Tag>
  );
}
