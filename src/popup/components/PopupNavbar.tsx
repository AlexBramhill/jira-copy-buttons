import { A } from "@solidjs/router";

interface PopupNavbarProps {
  title: string;
  showBackButton?: boolean;
}

export const PopupNavbar = (props: PopupNavbarProps) => {
  return (
    <div class="flex items-center gap-2 mb-4">
      {props.showBackButton && (
        <A
          href="/"
          class="rounded-md border border-neutral-700 px-2 py-1 text-sm text-neutral-100 transition hover:bg-neutral-800"
          aria-label="Back to home"
        >
          ←
        </A>
      )}
      <h1 class="text-2xl font-bold">{props.title}</h1>
    </div>
  );
};

export default PopupNavbar;
