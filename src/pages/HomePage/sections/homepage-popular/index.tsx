import CityCard from "@/components/cards/CityCard/CityCard";
import {FC} from "react";

import s from "./index.module.scss"
const HomePagePopular : FC = () => {

    const popular = [
        {
            name: "Spain",
            imageURL: "https://s3-alpha-sig.figma.com/img/c2ce/6d45/5c429eb9b6a6545dab9c89854ad5ab42?Expires=1691366400&Signature=hgP9wipXT4XY5ODfMoWAOHDKsJY5KCw3tbTC~BfmYkB6QCbS5pkj2XdSyAHly781Bl~FWPS7H1KjxAfbXm0LsLuEvKLVi2IQoIShiJOvbJR9UHPaEUe86rcFMeZxh00qXpJ-v7dS9hHpEekeuTH5WTyNxyb~SFCwLqW7mkvHQsZo3BY7jMxg0XW~9934D8iYqd9VVt30Zplf9fqRajoQ9HNW1SeITfnjKzupZogHie0UnM8cGTl5qij6bV4bsRfdjgrJUWOETMs5gyH-U6T7VbsihQpktEpgqvm3TC79SaVhYdhFvTK7goC6cMQjZIE6EIsjTiYK-6XfGVsl6N2HVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            name: "London",
            imageURL: "https://s3-alpha-sig.figma.com/img/d2fe/d552/b0e2dd07a553b887c3286e3cf503fb80?Expires=1691366400&Signature=jPqcX~DMmgeeSFBTasZTC6FD-6MvjNmnOHROa0VSGqAOeYSXpsB2ZT5xVOLy3B9qV-ANgNhZeQquxX0F2KLaym4KdcKKayBGOhVipqRc4cSnhlk2Cv8uaNulzJLd7bcEZ2Xoao4jpQJQ92Mtjp-pCICaogZbCw-ISk4WpYU5Xsj9etX6F9z8bp4tPsO8axF8j1MdhkScTfknrHkUFrAJg7vYxgqL2GrgYt9OSITJ18nxtrIYcl3N2HQRZDhr-bCYoH2HHHT8REGjc8OJzBWeep1gdqHjiY31fHkgkzJvZHrwqD6t7X3oJzt32Wz6KxIUhXvv5~KGGIPTM8CzjZcz5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            name: "Lisbon",
            imageURL: "https://s3-alpha-sig.figma.com/img/962c/7dc2/740c25d67b198ee7e1fb0ef72352c4f2?Expires=1691366400&Signature=gQSOHNgVcnMiuH1IUoPzEpgnSj2CumKxAuLlgEAaVpltLTvUOmr5lPAcRNsZVgG544-8DY3UW5VLQ0cVNIdzAxSO~QD1PB99oIbCcBZUbdq9nWe~Op9AGOQVS41d4-it-EOR7E8JuWoBE6gGfZy00W7GvsWvvSndA1ZEVy1AS057CPMiZFFDwxOrrm0-JQAXU2CiK-nnso20ERP4Fovzx~xxfyoRPcBF6LmVx4wd1c-w-A41t3UxqojtZRlV7a9IUTQKDVH6AphS3BCrk3oXVDqxH~Od36neSX~EnDq4BYb9MD-ZJLbbec0tWtG2-Bw9cAApzzvaQopM3yIjxx783Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            name: "Croatia",
            imageURL: "https://s3-alpha-sig.figma.com/img/45fa/2fc2/38af8e7230b50c47b4551cb446c1ce47?Expires=1691366400&Signature=Q~EotRuMsmwL~7cqmZ6g~KMJ67UYyhUGX9cnVpNTfg3v0z7dkeRHV2vVPMXMgxz~Sy-N5k8z458CircFV6wpNupXg0kdRppvyw9G9cvYBsrleWQRDT1gNVstc-uuMAh73Xg8sx9324Bylf7G~ivBKkpyf6WXM31qGSN4780cDX2GHLlc6EuTySQ84LMAd8ItvAsD9G5C3aTkaLNcC-V4-td-L4ofdzSwZVkBQyBHEsTdcr6Fik-UVkr0~Mt8Z7~8W0adaHMx1X4nd58hOg~MrImiz8bHBWG67JFjzUkzkiVBAYJKEWVBQkGEtmfgdTFLKrQ70zjy7RA1pXD4PAwhxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            name: "Bratislava",
            imageURL: "https://s3-alpha-sig.figma.com/img/5767/31e2/01c284a7161709c35b80ce7a2ba38de9?Expires=1691366400&Signature=MtrlooOqTGrHoACPOpb0ch6LFA9gKwGyz11zpcVfVHbHqu4mICGqM~by6tbIUnqqCYAYiJbvRGNe3Q0bzsfTVaTaeZvLUfRiBA9-QjA3e1lGEXN6c69uf0CSP8G-EY8DS-O7f~iucnpZHVL3YzyFP0EXziOlwsO2DCFCUbMWYig5pY8nhohEMIK-wYJz7SpXEQmKojKl20sX4jnIODo3ZtX5OC4sjJgsLX2icz~kBTtySENzsXCQRxVkLWNvHq2moUGltaNm6TzlqCasPIastIScQ5dri-JFO2VEXA3yjUopOcc-reWyKM3j2i7fkSz605tM4JkuqfHfd9Uu45F-lA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            name: "Copenhagen",
            imageURL: "https://s3-alpha-sig.figma.com/img/5767/31e2/01c284a7161709c35b80ce7a2ba38de9?Expires=1691366400&Signature=MtrlooOqTGrHoACPOpb0ch6LFA9gKwGyz11zpcVfVHbHqu4mICGqM~by6tbIUnqqCYAYiJbvRGNe3Q0bzsfTVaTaeZvLUfRiBA9-QjA3e1lGEXN6c69uf0CSP8G-EY8DS-O7f~iucnpZHVL3YzyFP0EXziOlwsO2DCFCUbMWYig5pY8nhohEMIK-wYJz7SpXEQmKojKl20sX4jnIODo3ZtX5OC4sjJgsLX2icz~kBTtySENzsXCQRxVkLWNvHq2moUGltaNm6TzlqCasPIastIScQ5dri-JFO2VEXA3yjUopOcc-reWyKM3j2i7fkSz605tM4JkuqfHfd9Uu45F-lA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
    ]

    return (
        <section className={s.home__popular} id="popular">
            <h3 className={s.popular__title}>Popular destinations</h3>
            <div className={s.popular__grid}>
                {popular.map((city,idx)=>{return <CityCard name={city.name} imageURL={city.imageURL} className={`${s.grid__city}`}/>})}
            </div>
        </section>
    );
};

export default HomePagePopular;