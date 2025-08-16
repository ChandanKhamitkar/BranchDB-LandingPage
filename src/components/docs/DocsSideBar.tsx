'use client';
import React, { useState, useEffect, useRef } from "react";
import { documentationSections } from "@/lib/docs/sidebar";
import { onest } from "@/lib/fonts";

export default function DocsSideBar() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Close on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close when clicking outside the top bar + dropdown
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (open && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <>
      {/* Mobile top bar */}
      <div ref={wrapperRef} className="lg:hidden relative w-full">
        <div className="flex items-center justify-start p-4 border-b border-b-neutral-800">
          <div className="flex items-center gap-3">
            <button
              aria-expanded={open}
              aria-controls="docs-dropdown"
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                )}
              </svg>
            </button>

            <div className={`${onest.className} text-white font-semibold select-none`}>Menu</div>
          </div>

          <div className="ml-auto w-6" />
        </div>

        {/* Dropdown */}
        <div
          id="docs-dropdown"
          role="menu"
          aria-hidden={!open}
          className={`absolute left-4 right-4 mt-2 z-40 transform origin-top transition-all duration-150 ${
            open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div
            className="w-full bg-black/50 backdrop-blur-xl border border-neutral-700/50 rounded-xl text-gray-300 custom-scrollbar h-fit overflow-auto p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`${onest.className} text-white font-bold`}>Docs</div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-y-4">
              {documentationSections.map((sectionItem, sec_index) => (
                <div key={sec_index} className="flex flex-col gap-y-2">
                  <p className="font-bold text-sm text-white tracking-wide">{sectionItem.sectionTitle}</p>
                  <div className="flex flex-col pl-3">
                    {sectionItem.sectionItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.anchorLink}
                        onClick={() => setOpen(false)}
                        className="py-1 text-sm hover:text-white transition-colors duration-150"
                      >
                        {item.itemName}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop / large screens sidebar */}
      <aside
        id="docs-sidebar-desktop"
        className={`hidden lg:block h-screen w-64 overflow-y-scroll overflow-x-hidden custom-scrollbar text-gray-400 p-6 ${onest.className} border-r border-r-neutral-700`}
      >
        <div className="flex flex-col gap-y-6">
          {documentationSections.map((sectionItem, sec_index) => (
            <div key={sec_index} className="flex flex-col gap-y-2">
              <p className="font-bold text-lg text-white tracking-wide">{sectionItem.sectionTitle}</p>
              <div className="flex flex-col pl-4">
                {sectionItem.sectionItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.anchorLink}
                    className="py-1 text-sm hover:text-white transition-colors duration-150"
                  >
                    {item.itemName}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
