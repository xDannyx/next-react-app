export default function GameLayout({ children }) {
  return (
    <section>
      <nav></nav>
      <h5>
        Hello, here is the root layout for whole game section. You will see this
        header everytime, because this layout is shared across all pages in
        /game path.
      </h5>
      {children}
    </section>
  );
}
