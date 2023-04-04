export default function Header() {
  return (
    <header aria-label="Site Header" className=" bg-teal-800 position-sticky">
      <div class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
        <div class="flex items-center gap-4">
          <div className="flex ">
            <span class="inline-block h-7 w-50 rounded-lg bg-teal-200 font-bold text-lg">
              {" "}
              The Lead Commerce
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
