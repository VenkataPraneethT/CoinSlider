import MainPage from "../Main/main";
import TokenInfo from "../TokenInfo/tokenInfo";
import ArticlesPage from "../Articles/articles";
import Subscribe from "../Subscribe/subscribe";
import Footer from "../Footer/footer";
import DisclaimerPage from "../Disclaimer/disclaimer";

const HomePage = () => {
  const dividendsCount = '9,449,627.26'
  return (
    <div>
      <div className="w-full block relative h-[auto]">
        <MainPage />
      </div>
      <TokenInfo noOfTokens={dividendsCount}/>
      <ArticlesPage />
      <Subscribe />
      <DisclaimerPage />
      <Footer />
    </div>
  );
};

export default HomePage;
