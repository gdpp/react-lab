import { useEffect, useState } from "react";

type Props = {
    value: number;
}

export const CoinsCounter = () => {
    const [coins, setCoins] = useState(0)
    
    const addCoin = () => {
        setCoins(coins + 1);
    }

    const removeCoin = () => {
        setCoins(coins - 1);
    }

    useEffect(() => {
        console.log("Coins changed: ", coins);
    }, [coins]);

    return (
        <section className="flex flex-col max-w-1/2 mx-auto p-4 mt-4 bg-amber-50 rounded-lg shadow-md items-center">
            <h2 className="text-3xl font-bold text-amber-500">Coin Counter</h2>
            <CoinText value={coins} />
            <div className="flex gap-4">
                <button onClick={addCoin} className="border-gray-400 bg-gray-100 text-center rounded p-2">Get Coin</button>
                <button onClick={removeCoin} className="border-gray-400 bg-gray-100 text-center rounded p-2">Spend Coin</button>
            </div>
        </section>
    )
}

export const CoinText = ({value}: Props) => {
    return (
        <p className="text-2xl font-bold">{value}</p>
    )
}
