import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { profile } from "../data/profile";

export function PricingDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (open) ref.current?.showModal();
    else ref.current?.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 m-auto w-[calc(100%-40px)] max-w-sm rounded-3xl border border-neutral-200 bg-white p-7 text-neutral-950 shadow-xl backdrop:bg-black/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
    >
      <div className="mb-7 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">Discuss project pricing</h2>
        <button
          autoFocus
          type="button"
          onClick={onClose}
          aria-label="Close pricing"
          className="grid size-8 cursor-pointer place-items-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          <X size={19} />
        </button>
      </div>
      <a
        href={`mailto:${profile.email}?subject=Project%20pricing%20enquiry`}
        className="block rounded-full bg-neutral-900 px-5 py-3 text-center text-sm text-white dark:bg-white dark:text-neutral-950"
      >
        Request a quote
      </a>
    </dialog>
  );
}
