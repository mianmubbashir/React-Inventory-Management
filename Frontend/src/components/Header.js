export default function Header() {
  return (
    <header aria-label="Site Header" className=" bg-teal-800 ">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8 ">
        <div className="flex items-center gap-4">
          <div className="flex ">
            <span className="inline-block h-7 w-50 rounded-lg text-white text-2xl font-bold ">
             The Lead Commerce
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
