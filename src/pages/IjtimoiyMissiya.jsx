import { useEffect, useState } from "react";

export default function IjtimoiyMissiyah() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="conteaner">
      <br />
      <br />
      <br />
      <h1 className="mis">Ijtimoiy missiya</h1>
      <br />
      <div className="bosh-pej2">
        <h1 className="h1">
          Nabi univers deyarli 150 yil oldin ijtimoiy maqsadlar uchun asos
          solingan. Bizning vazifamiz talabalarni etakchilik hayotiga va
          halollik bilan hissa qoshishga orgatish orqali dunyoga hissa
          qoshishdir.
        </h1>
      </div>
      {data.slice(32, 33).map((item, index) => (
        <div className="combined-container" key={item.id}>
          <img
            src={item.image}
            alt={`Image ${item.id}`}
            className={`image-${index + 34}`}
          />
        </div>
      ))}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="ich-pej1">
        {data.slice(33, 34).map((item, index) => (
          <div className="combined-container" key={item.id}>
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className={`image-${index + 35}`}
            />
          </div>
        ))}
        <div className="ich-yoni">
          <h1 className="biz">Biz kimmiz</h1>
          <p className="le">
            Fakultetimiz, talabalarimiz va xodimlarimizni harakatga keltiradigan
            narsa bu imkoniyatlar ruhi, boshqa odamlarning farzandlariga foyda
            keltirish uchun yagona farzandi xotirasiga Stenfordni yaratgan
            kashshof asoschilarimizdan meros bulib qolgan merosdir. Stenfordda
            biz utmishimizdan saboq olamiz, lekin kelajakka etibor qaratamiz va
            doimiy ravishda dunyoni yaxshiroq joyga aylantirishning yangi
            usullarini qidiramiz. Biz oliy ta’lim gullab-yashnayotgan jamiyatni
            qo‘llab-quvvatlashda muhim rol o‘ynashiga qattiq ishonamiz.
            Kollejlar va universitetlar nafaqat talabalarni uzlari tanlagan
            yulga tayyorlaydilar, balki ular fuqarolar rahbarlari va muammolarni
            hal qiluvchilarning keyingi avlodini yaratishga yordam beradi. Oliy
            ta’lim muassasalari jamiyatimizda faqat bilimlarni yaratish va
            tarqatishga bag‘ishlangan o‘ziga xos va doimiy vazifani bajaradi.
            Dunyo oliy uquv yurtlarini uz ichiga olgan matoning kengligi va
            boyligi insoniyatning uzoq muddatli taraqqiyoti va farovonligining
            ajralmas qismidir.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1  className="kirish">Kirish</h1>
      <div className="ich-pej2">
        <div className="tex2">
          <h1 className="le1">Ertangi dunyo fuqarolarini tarbiyalash</h1>
          <p className="le1">
            Stenford talabalarga katta goyalar bilan shugullanish, kontseptual
            va intizom chegaralarini kesib utish va fikr va tajriba
            xilma-xilligini qamrab oladigan global fuqarolar bolish
            imkoniyatini beradi. Biz talabalarga ettita maktab va bir nechta
            sohalarda keng va chuqur akademik dasturlarni taklif qilamiz,
            jumladan, sanat va gumanitar fanlar, tabiiy va ijtimoiy fanlar,
            muhandislik, barqarorlik, tibbiyot, huquq, talim va biznes.
            Universitetning mukammalligi va innovatsiya madaniyati uni
            talabalarga yangi goyalarni kashf qilish va qabul qilish,
            muvaffaqiyatli martaba va xizmat hayotiga tayyorgarlik kurish uchun
            bilim va vositalarni taklif qiladigan dunyodagi eng yaxshi
            professor-uqituvchilarni jalb qilish va saqlab qolish uchun uziga
            xos tarzda joylashtiradi. Umumiy manfaatga erishish uchun kuchli
            axloqiy tamoyillarga bulgan ehtiyoj bizning talim takliflarimizda
            urnatilgan. Stenfordning taniqli bitiruvchilar tarmogi va yuqori
            darajada ishtirok etgan bitiruvchilar hamjamiyati talabalarga
  
          </p>
        </div>
  
        {data.slice(34, 35).map((item, index) => (
          <div className="combined-container" key={item.id}>
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className={`image-${index + 36}`}
            />
          </div>
        ))}

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /><br />
      <br />
      <br />
      <br />
      <div className="bosh-pej8">
 
</div>
    </div>
  );
}
