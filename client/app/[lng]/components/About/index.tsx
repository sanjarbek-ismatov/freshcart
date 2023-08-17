import "./About.css";
import clock from "public/images/icons/clock.svg";
import gift from "public/images/icons/gift.svg";
import pack from "public/images/icons/package.svg";
import refresh from "public/images/icons/refresh-cw.svg";
import Image from "next/image";
import { getTranslation } from "@internalization";
import { FourGrid } from "@/app/components";

function About() {
  const t = getTranslation("en");
  return (
    <FourGrid>
      <div>
        <Image className="my-3" src={clock} alt="clock icon" />
        <p className="font-bold text-slate-800 my-3 text-lg">
          {t["ten-minute"]}
        </p>
        <p className="text-sm leading-6 text-slate-600">{t["short-deliver"]}</p>
      </div>
      <div>
        <Image className="my-3" src={gift} alt="clock icon" />
        <p className="font-bold text-slate-800 my-3 text-lg">
          {t["best-recommends"]}
        </p>
        <p className="text-sm leading-6 text-slate-600">
          {t["cashback-suggestions"]}
        </p>
      </div>
      <div>
        <Image className="my-3" src={pack} alt="clock icon" />
        <p className="font-bold text-slate-800 my-3 text-lg">
          {t["wide-assortment"]}
        </p>
        <p className="text-sm leading-6 text-slate-600">{t["products-5000"]}</p>
      </div>
      <div>
        <Image className="my-3" src={refresh} alt="clock icon" />
        <p className="font-bold text-slate-800 my-3 text-lg">
          {t["easy-return"]}
        </p>
        <p className="text-sm leading-6 text-slate-600">{t.satisfaction}</p>
      </div>
    </FourGrid>
  );
}

export default About;
