const Section = ({ title, children }) => (
  <section>
    <h2 className="display-6">{title}</h2>
    {children}
  </section>
);

export default Section;
