import Button from "../Button/button";
import {ReactComponent as LinesOne} from '../../images/lines1.svg'
import {ReactComponent as LinesTwo} from '../../images/lines2.svg'
import IndicatorsImg from '../../images/indicators.svg'

const TokenInfo = (props) => {
    const {noOfTokens} = props;
  return (
    <section className="w-full flex flex-col lg:block bg-white text-black dark:bg-indigo-1000 dark:text-white lg:h-[848px] pt-[56vw] sm:pt-[35vw] lg:py-0 pb-36 overflow-hidden">
        <div className="order-3">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mx-auto pt-10 lg:w-[822px] mt-28 lg:mt-0">
                <div className="font-semibold text-center lg:text-left">
                    <h4 className="text-2xl lg:text-[34px] leading-none mb-2 lg:mb-0">
                        {`$${noOfTokens}`}
                        <span className="text-[#179C64] capitalize">Dividends</span>
                    </h4>
                    <small className="text-[#5C5C5C] text-base lg:text-lg leading-none inline-block w-[262px] lg:w-auto">Paid out to Hatom Token Holders over 3 years</small>
                </div>
                <a href="https://maiar.exchange/swap" target="_blank" rel="noreferrer" className="relative cursor-pointer hover:scale-105 transition-transform">
                   <Button btnName="Buy Hatom Tokens" />
                </a>
            </div>
        </div>
        <div className="lg:mt-[100px]">
            <div className="container">
                <h2 className="font-semibold text-3xl text-center lg:text-left lg:text-[40px] leading-[1.25] block lg:inline-block w-72 mx-auto lg:w-auto">
                    <span className="text-blue"> Features</span>
                    { " of Hatom Token" }
                </h2>
                <div className="mt-12">
                    <div className="relative">
                        <div className="hidden xl:block absolute left-1/2 top-3 -right-52 -translate-x-1/2">
                            <LinesOne></LinesOne>
                        </div>
                        <div className="hidden lg:block xl:hidden absolute left-1/2 top-3 -translate-x-1/2">
                            <LinesTwo></LinesTwo>
                        </div>
                        <div className="lg:hidden absolute left-1/2 -translate-x-1/2 -top-[248px] indiactors-container" >
                            <img src={IndicatorsImg} alt="Guides"></img>
                        </div>
                        <div className="flex flex-col items-center text-center lg:text-left gap-14 justify-between w-[295px] mx-auto">
                            <div className="lg:absolute left-0 top-0">
                                <div className="space-y-6 leading-tight lg:h-[163.95px] lg:text-sm xl:text-base">
                                    <h2 className="text-[32px] font-semibold leading-[1.25]">Earn</h2>
                                    <p className="opacity-80 tracking-wider dark:opacity-40 max-w-[295px], lg:max-w-[340px]">Stake your Hatom tokens to earn a share of the protocol's revenue. Dividends are paid in EGLD, USDC, MEX, HTM, and RIDE.</p>
                                </div>
                            </div>
                            <div className="lg:absolute left-0 -bottom-[400px]">
                                <div className="space-y-6 lg:mt-[100px] lg:text-sm xl:text-base">
                                    <h2 className="text-[32px] font-semibold leading-[1.25]">Vote</h2>
                                    <p className="opacity-80 tracking-wider dark:opacity-40 lg:max-w-[300px]">Decide which token should be listed next, and what upgrade or feature should be integrated into the protocol.</p>
                                </div>
                            </div>
                            <div className="lg:absolute right-0 top-0 block3">
                                <div className="space-y-6 leading-tight xl:pr-10 lg:w-[250px] xl:w-[330.3px] lg:text-sm xl:text-base block3">
                                    <h2 className="text-[32px] font-semibold leading-[1.25]">{ ' Supply  &  Borrow '  }</h2>
                                    <p className="opacity-80 tracking-wider dark:opacity-40 ">Hatom token holders can use the HTM Money Market to :</p>
                                    <ul className="opacity-80 space-y-6 pl-8 -ml-0.5 tracking-wider text-left">
                                        <li className="relative before:absolute before:-left-[30px] before:top-1 before:w-2 before:h-2 before:rounded-full before:bg-[#179C64] dark:opacity-40">Supply HTM and earn interest on their deposit.</li>
                                        <li className="relative before:absolute before:-left-[30px] before:top-1 before:w-2 before:h-2 before:rounded-full before:bg-[#179C64] dark:opacity-40">Use HTM as collateral and take a loan of any available crypto asset.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TokenInfo;
