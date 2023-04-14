import "./About.css";
import clock from "public/images/icons/clock.svg";
import gift from "public/images/icons/gift.svg";
import pack from "public/images/icons/package.svg";
import refresh from "public/images/icons/refresh-cw.svg";
import Image from "next/image";
function About() {
  return (
    <>
      <div className="grid my-24 gap-x-4 grid-cols-4 grid-rows-1">
        <div>
          <Image className="my-3" src={clock} alt="clock icon" />
          <p className="font-bold text-slate-800 my-3 text-lg">
            10 daqiqada oziq-ovqat
          </p>
          <p className="text-sm leading-6 text-slate-600">
            Buyurtmangizni eng qisqa vaqt ichida o`zingizga yaqin FreshCart
            pikap do`konlaridan ostonanggacha yetkazing.
          </p>
        </div>
        <div>
          <Image className="my-3" src={gift} alt="clock icon" />
          <p className="font-bold text-slate-800 my-3 text-lg">
            Eng yaxshi narxlar va takliflar
          </p>
          <p className="text-sm leading-6 text-slate-600">
            Mahalliy supermarketga qaraganda arzonroq narxlar, uni to`ldirish
            uchun ajoyib cashback takliflari. Eng yaxshi narxlar va takliflarni
            oling.
          </p>
        </div>
        <div>
          <Image className="my-3" src={pack} alt="clock icon" />
          <p className="font-bold text-slate-800 my-3 text-lg">
            Keng assortiment
          </p>
          <p className="text-sm leading-6 text-slate-600">
            Oziq-ovqat, shaxsiy parvarish, maishiy, non, sabzavotli va
            sabzavotli bo`lmagan va boshqa toifadagi 5000 dan ortiq
            mahsulotlardan tanlang.
          </p>
        </div>
        <div>
          <Image className="my-3" src={refresh} alt="clock icon" />
          <p className="font-bold text-slate-800 my-3 text-lg">Oson Qaytish</p>
          <p className="text-sm leading-6 text-slate-600">
            Mahsulotdan qoniqmaysizmi? Uni ostonada qaytaring va bir necha soat
            ichida pulni qaytarib oling. Hech qanday savol berilmagan siyosat.
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
