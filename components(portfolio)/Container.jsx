const Container = ({ children, className = "" }) => {
  return (
    <section className={`w-full h-full max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Container;
