import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CornerDownLeft, FileText, Search } from "lucide-react";
import { introduction, customization, components } from "../../mocks/docs";

const pages = [
  ...introduction.map((p) => ({ ...p, group: "Getting started" })),
  ...customization.map((p) => ({ ...p, group: "Customization" })),
  ...components.map((p) => ({ ...p, group: "Components" })),
];

/** Command palette over every documentation page. Open it with Ctrl/Cmd + K. */
const SearchPalette = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const input = useRef(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? pages.filter((p) => p.name.toLowerCase().includes(q)) : pages;
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      input.current?.focus();
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  if (!open) return null;

  const go = (page) => {
    if (!page) return;
    navigate(page.url);
    window.scrollTo({ top: 0 });
    onClose();
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") go(results[active]);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 px-4 pt-[15vh] backdrop-blur-sm" onMouseDown={onClose}>
      <div
        role="dialog"
        aria-label="Search documentation"
        className="fade-up w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-700 dark:bg-neutral-900"
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <div className="flex items-center gap-3 border-b border-neutral-200 px-4 dark:border-neutral-700">
          <Search size={18} className="text-neutral-400" />
          <input
            ref={input}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search docs..."
            className="h-14 w-full bg-transparent text-neutral-800 outline-none placeholder:text-neutral-400 dark:text-white"
          />
          <kbd className="rounded border border-neutral-300 px-1.5 text-xs text-neutral-500 dark:border-neutral-700">Esc</kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-8 text-center text-sm text-neutral-500">No results for &quot;{query}&quot;</li>}
          {results.map((page, i) => (
            <li key={page.url}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => go(page)}
                ref={(el) => i === active && el?.scrollIntoView({ block: "nearest" })}
                className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left ${i === active ? "bg-corporative/10 text-corporative" : "text-neutral-700 dark:text-neutral-300"}`}
              >
                <span className="flex items-center gap-3">
                  <FileText size={16} />
                  {page.name}
                </span>
                <span className="flex items-center gap-2 text-xs text-neutral-400">
                  {page.group}
                  {i === active && <CornerDownLeft size={14} />}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPalette;
