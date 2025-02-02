import { Footer } from "../../components/footer/Footer.jsx";
import { Header } from "../../components/header/Header.jsx";

export const TemplatePageDisplay = ({ children, query, setQuery }) => {
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      {children}
      <Footer />
    </>
  );
};
