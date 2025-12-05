import { useGetEthereumPriceQuery, useGetBitcoinPriceQuery } from "./cryptoApi";
import "./CryptoWallet.css";

const CryptoWallet = () => {
    // Используем RTK Query хуки для получения данных
    const {
        data: ethereumData,
        error: ethereumError,
        isLoading: ethereumLoading,
    } = useGetEthereumPriceQuery();

    const {
        data: bitcoinData,
        error: bitcoinError,
        isLoading: bitcoinLoading,
    } = useGetBitcoinPriceQuery();

    return (
        <div className="crypto-wallet">
            <h2 className="crypto-wallet__title"> Crypto Wallet</h2>
            <div className="crypto-wallet__cards">
                {/* Bitcoin Card */}
                <div className="crypto-card">
                    <div className="crypto-card__header">
                        <h3 className="crypto-card__name">Bitcoin</h3>
                    </div>
                    <div className="crypto-card__content">
                        {bitcoinLoading && (
                            <div className="crypto-card__loading">Загрузка...</div>
                        )}
                        {bitcoinError && (
                            <div className="crypto-card__error">
                                Ошибка загрузки данных
                            </div>
                        )}
                        {bitcoinData && (
                            <div className="crypto-card__price">
                                <span className="crypto-card__amount">
                                    €{bitcoinData.bitcoin.eur.toLocaleString("de-DE", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Ethereum Card */}
                <div className="crypto-card">
                    <div className="crypto-card__header">
                        <h3 className="crypto-card__name">Ethereum</h3>
                    </div>
                    <div className="crypto-card__content">
                        {ethereumLoading && (
                            <div className="crypto-card__loading">Загрузка...</div>
                        )}
                        {ethereumError && (
                            <div className="crypto-card__error">
                                Ошибка загрузки данных
                            </div>
                        )}
                        {ethereumData && (
                            <div className="crypto-card__price">
                                <span className="crypto-card__amount">
                                    €{ethereumData.ethereum.eur.toLocaleString("de-DE", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoWallet;
