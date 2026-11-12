"use client";

import React, { useState } from "react";
import { useSound } from "@/hooks/useSound";
import PixelIcon from "@/components/icons/PixelIcon";

interface EventFaqProps {
  items: { q: string; a: string }[];
  columns?: 1 | 2;
}

export default function EventFaq({ items, columns = 1 }: EventFaqProps) {
  const [open, setOpen] = useState<number | null>(null);
  const { playClick } = useSound();

  return (
    <div className={`ev-faq ev-faq--${columns}`}>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className={`ev-faq__item${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="ev-faq__q"
              aria-expanded={isOpen}
              aria-controls={`ev-faq-a-${index}`}
              onClick={() => {
                playClick();
                setOpen(isOpen ? null : index);
              }}
            >
              <span>{item.q}</span>
              <PixelIcon name="chevronRight" className="ev-faq__chev" />
            </button>
            <div id={`ev-faq-a-${index}`} className="ev-faq__a" hidden={!isOpen}>
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
