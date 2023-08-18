import CityCard from "@/components/cards/CityCard/CityCard";
import {FC} from "react";

import s from "./index.module.scss"
const HomePagePopular : FC = () => {

    const popular = [
        {
            name: "Spain",
            imageURL: "https://s3-alpha-sig.figma.com/img/c2ce/6d45/5c429eb9b6a6545dab9c89854ad5ab42?Expires=1692576000&Signature=AOQaWnJXKY54Jy8AQdMJ7-72wJw~q0IpfHTCNo6Ri71dm8PXpO4m~IWV5Gk7GYsAEDzyo443GOXPmtEBoSYcwo4xpO4qITb2Yi1CY77RfDFmrXmjLORbiRVrfK1WNhBoYFxHgTUquSXkFagBuLxE-tqexP40d8fyH~pC859VW0pqoT3r99jQE9wvDVFuNRp95gaTrBzJB6xpIThTI8lpVhL1vfw1iR9ccLQg3YnDbCAu-JFpa8JJMRjQNoLewGY5l7AQCecaFB35xvM7TVFp196j10cwNTswWf9aRbIXc5uucy0Wg-N~a-Y35ItQRUne1IghQokj3FXIOIQHIVHDBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            name: "London",
            imageURL: "https://s3-alpha-sig.figma.com/img/d2fe/d552/b0e2dd07a553b887c3286e3cf503fb80?Expires=1692576000&Signature=jv1axgCx85z8sII4xTuf9zOF7JuPWEUJCyllg1Af8kA4xllD9HGTo0oB3~DHnf2wbaTifydBjahLO~esr9JZJdU~tcCGHKL6AhOQm7ZvZTAv4dn9BT2jbmkdisHMNIpge~ZOad6FTXlCNaTuegp8HquSWE8EdRskULFOou8vok6b1fzLqlIwkiPZEYxUcDTMbw9SZsNTvbljgvIYPmyX~jBY76r9Wxcm02o9Kje84Qo~gIaZxGBRjts~2Q2B9pSiA1gMXVWY-DPmZEmwFV-dokrZW0~~C5~G1sx-a5Vt41AxwWmdD2HPaFf-Tpmq6X0ZBBNVhc435AeVXh0sSOkP7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            name: "Lisbon",
            imageURL: "https://s3-alpha-sig.figma.com/img/962c/7dc2/740c25d67b198ee7e1fb0ef72352c4f2?Expires=1692576000&Signature=Fx0N~2azBQJPN4UJS0en43e71NQmhCIqqU0UTu5Y-q83-FDSk7HbnG2~BCsNREK9l3PoFoEokZP8hQKI0tUxalzZF1djjpuUTz-IGw6Ynv7u9SrK-7De9jjyhkQ7-UMYVHqFs3bjjyGgVU5GUycJchgLBPzeGMn0RY7YpGjPFz4Oa8YZ4yM3HIkNPceeyWMqDfrPPjFe8-rVdTok~DDvR2BAVWdjfrXaWtGiw4dOkrQkOgyoCPBoHTNGz-alIjSeI9ciLFCqMBqNjNB6L-KjiW2fiumXsj9spe2Wm2WSpB2QhG2-3cA1ubyzCi-B96bdnS60bZ7S0uCUJLO3YRGAug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            name: "Croatia",
            imageURL: "https://s3-alpha-sig.figma.com/img/45fa/2fc2/38af8e7230b50c47b4551cb446c1ce47?Expires=1692576000&Signature=Cy-dHVZH1ESFQ9vm~A5Q~hulrN0FFr5s2uvj8F8VZplxgwKg~UNp3fJKtjzWy4dyuE-83mZU8jOhZ4ZTyx6Zht6TFWImXiWPwAiYvugK155RPFVVcbxclp9p2f14AEx66U5LDNP25Dpe5rTUUTT8BNOGHfnLeCdMK0dDh2ftPNbUgoeGVLc7tMsZn2pWCfGqOAImW3ek4upn0iZAPHYNTSfdo1OxYGlqYf2wdrEI2scO~dnDFESKCXM97UnV9dLpO5NX5PJLK~IL-L8MZjH-PUMcdw8Y8SaIW1c42wvoo~yS-EHeGvj79jhSchTCF2kclj5j~8nALyFh4bjCwoHYBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            name: "Bratislava",
            imageURL: "https://s3-alpha-sig.figma.com/img/b446/ac8e/8304c812264b5af929005891a42841a9?Expires=1692576000&Signature=XHnvl-HKDudZd8gf-mhsBaGeXHAiXF9hhMZ85fSMei0k4f5E4c3-5645cym2g1Ja4rwB3UjwA9yMe1K0sgFQ4B~oZ5tJcvsj845Ij~uzw-XwSckLItEQkNZmHyoH~hRXvxUmeiQzeGjiMThzmyDvjOon2S3DJ7L0PCu1~6gSGFHiOgHa~74~3SKnTwTCuwPuO32LDeFqxmqC6cC0yqcyaJp7N8eMYbEH~UC~IfJZVusaCwpkAw6prk70bxCyp1Fcu9pASQp3wOrL48790bt1yDnydxVAYfYAPzmQ9Tp8qC02lstpef5fzopjezygw7wMKKdSV-X-7KMWXDibhDZz9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            name: "Copenhagen",
            imageURL: "https://s3-alpha-sig.figma.com/img/5767/31e2/01c284a7161709c35b80ce7a2ba38de9?Expires=1692576000&Signature=fEzx01rVXB8qw2PEiRd5YdDZgCQbkPRSJga3rqhYUE6ArbM92HeAMUW3T1zshYQAsacttHaVtoZU~UQsRCzm~5RtguVmBku3W8RBdXGAYC1McR9j7jFY0qdLFczMTU2GBvQQzJ51IYzf9i4JOQUW-IB4Qss-GIrhWE7gw~DysV5p2NHqKjuZxI7wL5yJbUEHQSWbydPK0ENLn242ZDitYirDCV-B~hg~vGkKyRvNRkXvr5Wxb996AMQrQQupYJ6kr2NqtPaSEU7janH1ccmfV739t3o4I5TN9mOmbvDu3qa5A2-hz0li4QaI1pbIEh5COyN~nnKQJRvLkiM2-ZyASA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
    ]

    return (
        <section className={s.home__popular} id="popular">
            <h3 className={s.popular__title}>Popular destinations</h3>
            <div className={s.popular__grid}>
                {popular.map((city,idx)=>{return <CityCard name={city.name} key={idx} imageURL={city.imageURL} className={`${s.grid__city}`}/>})}
            </div>
        </section>
    );
};

export default HomePagePopular;