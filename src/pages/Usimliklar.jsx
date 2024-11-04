import { useEffect, useState } from "react";

export default function Usimliklar() {
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
      <h1 className="usm">Usimliklar</h1>
      <br />
      <br />
      <br />
      <br />
      <div className="us-pej1">
        <div className="tur1">
          <div className="oqi">
            {data.slice(43, 44).map((item, index) => (
              <div className="combined-container" key={item.id}>
                <img
                  src={item.image}
                  alt={`Image ${item.id}`}
                  className={`image-${index + 45}`}
                />
              </div>
            ))}
            <div className="oqi-tagi">
              <p className="pa">3256*A</p>
              <h1 className="chinor">Shlesingeri qizil chinor</h1>
              <p className="iml">Ilmiy nomi</p>
              <p className="hi">
                Schlesingeri barcha qizil chinorlarning eng erta kuz rangini
                namoyish etadi. Bu, shuningdek, 19 - asr oxirida Garvard
                universitetining Arnold arboretumi tomonidan kiritilgan birinchi
                navlardan biri edi .
              </p>
            </div>
          </div>
        </div>

        <div className="tur2">
          <div className="oqi">
            {data.slice(44, 45).map((item, index) => (
              <div className="combined-container" key={item.id}>
                <img
                  src={item.image}
                  alt={`Image ${item.id}`}
                  className={`image-${index + 46}`}
                />
              </div>
            ))}
            <div className="oqi-tagi2">
              <p className="pa">3256*A</p>
              <h1 className="chinor">Ginkgo</h1>
              <p className="iml">Ilmiy nomi</p>
              <p className="hi">
                20-asr boshlarida amerikalik va evropalik botaniklar ginkgo
                yetishtirishda keng tarqalgan boʻlsa-da, tabiatda yoʻq boʻlib
                ketganiga ishonishgan. Ushbu ginkgo Xitoyda ushbu turning bir
                necha taxminiy yovvoyi populyatsiyalaridan biridan yigilgan.
              </p>
            </div>
          </div>
        </div>

      </div>
<br />
<br />
<br />
<br />
<br />
      <div className="us-pej1">
<div className="t-4-bur">
{data.slice(45, 46).map((item, index) => (
              <div className="combined-container" key={item.id}>
                <img
                  src={item.image}
                  alt={`Image ${item.id}`}
                  className={`image-${index + 47}`}
                />
              </div>
            ))}
            <br />
            <br />
            <br />
            <h1 className="ma">Maple kolleksiyasi</h1>
</div>
<div className="t-4-bur">
{data.slice(46, 47).map((item, index) => (
              <div className="combined-container" key={item.id}>
                <img
                  src={item.image}
                  alt={`Image ${item.id}`}
                  className={`image-${index + 47}`}
                />
              </div>
            ))}
            <br />
            <br />
            <br />
            <h1 className="ma">Livvent <br /> butasi</h1>
</div>
<div className="t-4-bur">
{data.slice(47, 48).map((item, index) => (
              <div className="combined-container" key={item.id}>
                <img
                  src={item.image}
                  alt={`Image ${item.id}`}
                  className={`image-${index + 48}`}
                />
              </div>
            ))}
            <br />
            <br />
            <br />
            <h1 className="ma">Gullar kolleksiyasi</h1>
</div>
<div className="t-4-bur">
{data.slice(48, 49).map((item, index) => (
              <div className="combined-container" key={item.id}>
                <img
                  src={item.image}
                  alt={`Image ${item.id}`}
                  className={`image-${index + 48}`}
                />
              </div>
            ))}
            <br />
            <br />
            <br />
            <h1 className="ma">Maple kolleksiyasi</h1>
</div>
      </div>

      <br />
      <br />
    </div>
  );
}
