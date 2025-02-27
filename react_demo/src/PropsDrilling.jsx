export const ParentComponent = () => {
  return (
    <section
      className={`p-4 h-lvh w-lvw font-sans font-display tracking-wider flex flex-col items-center justify-center bg-gray-900 text-white`}
    >
      <h1>Component A</h1>
      <ChildComponent data="React JS" />
    </section>
  );
};
const ChildComponent = ({ data }) => {
  return (
    <section className="p-4 h-lvh w-lvw font-sans font-display tracking-wider flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1>Component B</h1>
      <GrandChildComponent data={data} />
    </section>
  );
};

const GrandChildComponent = ({ data }) => {
  return (
    <section className="p-4 h-lvh w-lvw font-sans font-display tracking-wider flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1>Component C</h1>
      <p>Hello, I Love {data}</p>
    </section>
  );
};
