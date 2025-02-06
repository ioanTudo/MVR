import { Footer } from "../Footer/Footer.jsx";
import { Header } from "../Header/Header.jsx";

export const TemplatePageDisplay = ({ children, query, setQuery }) => {
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      {children}
      <Footer />
    </>
  );
};
