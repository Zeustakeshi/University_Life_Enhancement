import { useState } from "react";
import { SiteMenuAdmin } from "../../../Common/Configs/SiteMenuAdmin";
import ItemNavBar from "./ItemNavBar";
import { IcHouse } from "../../../Common/Icons/Icons";

function SideBarAdmin() {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  const handleMenuClick = (index: number) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index); // Đóng nếu đã mở, mở nếu chưa
  };

  return (
    <div className="bg-white min-w-64 h-screen col-span-2 rounded-lg p-4 flex flex-col">
      <div className="px-[40px] flex justify-center items-center">
        <img src={`https://picsum.photos/200/100`} alt="G-EASY English Logo" className="h-12 mr-4" />
        <ul>
          <li className="text-[25px] font-bold text-black">Auction</li>
          <li className="text-[16px] font-bold text-gray-600 mr-6">Admin</li>
        </ul>
      </div>
      <div id="menu" className="flex flex-col space-y-2 my-5">
        {SiteMenuAdmin.map((item, index) => (
          <ItemNavBar
            key={index+0}
            content={item.content}
            icon={item.icon}
            href={item.href}
            submenu={item.submenu}
            isOpen={activeMenuIndex === index}
            onClick={() => handleMenuClick(index)}
          />
        ))}
      </div>
      <div className="mt-auto flex flex-col">
        <div className="flex justify-start">
          <span className="text-textsidebar font-semibold text-[20px] text-red-500">
            Support
          </span>
        </div>
        <ItemNavBar content={"Get Started"} href="/" icon={<IcHouse />} />
        <ItemNavBar content={"Setting"} href="/" icon={<IcHouse />} />
      </div>
      <div className="w-full border border-black my-5"></div>
      <div className="flex flex-col space-y-5">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABRFBMVEUzcYAmHRf////0s4LioXbz+v/0xKT0zLAAAAA0dIQxcH/8uYb4toQmGREmHBUrbX0lFQoWZXYAAAYiGhX9uoceFxMNDAwhaXkTEA760bQrREkqOz4yanf0//8lEwUdbYDg6Orw9PUwYm4vWWPtrn4RAADK19tFfIp/oaopNDUtT1eedFVVPy/+zKsgFQ27zNFtlZ8nJSJKNym2hmLSmnA4KiDhm2ynvsSJqLDX4eQqP0OXsrkoKiknIyDDj2hcRDJwWUmHioFbfIAYCQBThZGvw8mCYEZxUz0kCQCMZ0sxJRyzmoGcgm+Qc1+6lHzZrpGsinPbqoKkpKXs1chgXlxvb26FhYRFLR2Lf2+lgGPDoIGPjYFqVkhtgoCllYFTeoDEmHi3uLjE1t3v5d9EPz3rtJBPTEqRk5K/wcFkaGepqql+fHr06ZQTAAAVNElEQVR4nM2d+VvbxtbHZdkQbZZX2S4Y443NJsZ4YTUkDQ4UskC4kPe9adM0tzThJv//73dGsmTtnk3A93nubeOoZj6cmbOMpDkcH7lq1dXXu4d7693xeG1N5DhxbW3c7e4d7m6t7tei//FclF9e3TrsrnGZTLFYTKVSEhQHBP8J/gw+zRTF8frhVjXKQURFWN3aG0O0lAEVKMAKQDPjvcgwoyCsvu5yGcAWiuYCTRUzXHc3CkrmhKvrIiadnVJaX2U9IKaEta1uMUNEN6XMFLtbTP0PQ8KtLqHxvKbsbrEbFivC/XXgVajpTAHvs77PaGRsCF+P6SanH2Rm7TWTsTEgrO5liozxdEnFzB4D50pNuN/NsJudbqUyXerJSkm4P46Qz2AcUzJSEUZqP1aMFITVh+AzGLsU65GYsLZOwCcaImBcJ84CSAl3saMfAKs3WgsbG6NFyUaLSJwq7j4o4f4aZnwQxXJrI5lOJ6EORPjnxsLGUSy2PVpcaNQRvkwqimQpKxHhegYz/on1USWpqjFDyQWuNaqkwQdQyd8WG0hfJ2XWH4hwNYU5QcXyRsWkMxABrvnvarKOvC5TKQIz4hMSGDCZjAVJTaMDkpkRl3BVwvagZacBnUo38DxrkcMNjpiEh6gGFOumixQ3gi0YUzdww4eUOYyQsDYuIo5DPPht1JD0odcrwYBwGR5tHDTKOJTFMVZsxCFcRY6BYqMCVlhyo1Uvi60QE+qMKogisYMGF5HDwSBEnqHWzARjr6hHIavQZsp0chHZ52DNVHTCLuoM1Qmn0QAFcAJ5UEb9AcUuc8LaGgYgJ7bSiFz22SpheJzUGupiRCSs4qWhoriNajpLyUUsn5oqItYbaISrGFFehDln62CGf/GxYQxkb1jRH83fIBFuYfgYsX6wDXJObEDDLx1gZDhSBmnPEYVwN4PMx7WObDknvpKVRQw7ZlAqKgTCQ3TAhpqmwDMYMTJxDiVqzCZEB+QWwzJQVKk4qSoC4kxCdEBpRLD4vIDJZAXHinu0hOhrkIMOhh5we2FhlESO/AhWnEH4Gn0NLiy2Gi0Gs3SjJXIYhDMRwwm30C0I42CLxo1aVkymW1g1Yyb8/kYo4SoGINAGfqrmz5gelXEYw0N/GGEVZ79CLMdYOJoJI07IAKE/rO4PIaxh7RiWkYsIJES87ZtiSBoeQriGlWzHWAJCRBxvk1ojIeziAIqL7KaooeQIq9IIrhcDCTFSGWPXgileOo3pUYuBMSOIEM+NiiOmczR5UK6DDBAvZgQ51ADCGt5t+XolmWQRCy1E4EvrSayt1EBvE0A4xivpW6ODVoulr1ErAG8By4ipMQ7hIc6mDPwFiqK0wXSiqjjpt6GApehLiJnLcDDek1T1oYgx7Oc7/JeiL+GM5wl9VGYcDmPQ3eAaUZJQCdfxb19vsw6HQJU67ih8o6IPIU5BYUjE31lDUHID+4a/396UDyH+A07w5gvzWQqMiJO46ZKKKIT4c1TcANU90u0JPOGvRC7lvYPqIdzHnqNcebFVL/ttcufoCNUk9lA4byHlIVwjeAhPFP18aUkbUiLi3iDmYGSeRbiLGesN+RSHOaHdPC5Q4IHsu7KI/3CR57kbFyFe1WvJuwhzuYGsNAv2DzABFySQfuMPxZOfuggJQqH/nXphoMTj+Z6Flev1MA2aPhBBLog/GrezcRJW8d0M3Ef07kCVTvPxeFxpl8wPtLN8Wys5r5lh1TR+PNSVqYYQYtX1JqDfowiFZhwSJgTLhpt5uXmWtUGV2kNtBiLBMuQ8mY2DkCBScH6LEFoMEsZla5rmLmQwa49LU6hSO34xA7GCt3FqyhkxHIR4VaEh3xvahb6iEyp9a/GVoFWV5qb1AfgtJGa4HzVN5PeclaKdkMiEkt/9NEGfpFDW0stC1xNX5NOsadVhXu5nvf/tlA86VHoj2gmJTLjgk3TnLpQJoHxuIppmzbctRPCHF8HzVD1Kgv+RrcSxPyHZKvRLubUXsmnDpkmonU4+k48n7qeQiCuDYCOqG2D+Y+2aTmU3oo2QyJE20nDfyE14ahHK7cnCyw3Nz+RjAwvOW9MV+ZhSTYL5gV8j6rK70ykhWSxcTKrpVsOFWGqbsxSsPDM5na5Nua9bsXCsWBGz7QyVutJlcZuQ0B4Tp4R7ROlMGt5hcBOaa04nNCei7UNjLcIPlERWt29e83pV8MX138hmqT2xmRISrcJypVIXPQ/n2QmteWqbunH5rDS5SobzEyY8XiOCykIkTGuAEb2Er0mKCrHxGwjKHn/qIAQOUx99bmj/8CI3IYTeVOjLCa/LSWLeDHao+NpDSFIXgnAPE6sZhPH4po5oRMTp3DUITzU9uEyznykhWTA0JK25CclChdjS/38WofICWsjuf+L505J+FXQ1AviXaeCcEuJvYthkBQyTkKhsMjlnEYK1mAWm6uXtn+UMwn4hC+sQxV0tq/BRPgpCy9eYhDRvEHoIHdYyEAebWW0aL3Ro4VgnFHQP5I796pFKR2htu00It4g2L9AJ40r++Czr/FgvkpV+37BsU3B+h7pBR8gVtxyEJPlMAGEhFyudy25CmHTHEw6znup/VCbUiosw2UpTrUMrrzEIa0R+xiK0x8Nsv6dpZz6EHg2ajj8Kzs3HdKNC40uBMjUbIdUkNZJTc4Ke55uaLfNGFUhutKHd2aTLR2T1r6VJSOToJ6mD0CgYhp51OJPwWBiCcnFqxkp5kZJwMk05ak8KVE+b+9u5ngz9ooALCDxOr6nIg4KNsIW/H+xUcUqIf0fUqXJFE4YXcFzGBo0ySEAXIstyPp+XZSXIovAS/QpwiQIntllYxWIX/7fcIKwrpoSrFiFNuNeVPU3kz/QaT2jnjaHHB+3zs83hcLh51j6Oy15IcMlxe3LFeX+gE8bNDFx7kW/+P5Vz4MygrxOSbLzatfzvvGJWeiCLhjtO5xfZQqEgFEoFQShktdOE2/fIiVMtC/8SXAGuzF60m0p8Uk1BhyUr8ptlumEZ9zAgIVHta/+mV7K1rQayzGNZPi6UNEHovXwL9a4nlErCadxuRqV5Bj/svTOvKGil0rGsNMF6htsiRlb+mXJu6XUwR1o42bT8STHTrot+FtQQx0KuNHz/7JeJnl++K5VKFwl7aRErlU7eXpoXPJ9/PyzlhOP4UNOMya5ndJ8ojajHC446VgBCPXTDtAsk123g8XMx4d0vvzybaH5+/vn8SyFXsKonZVDICS+f2a+Yf/5OyF1saqUXfTjbBT3faVIS6vECEnKUy1DSRw6rdZDM5E/BbNVeWqM3xj///ErIaWYS0wT2uvrFecH885eg/NCG8TicC1n9KxW6cQEug5B6Ga4ZhJuavlMhA6cqPHv2zA3wrlA6Aw4JCLjdlbfuXwEQyNuGICi+0IywCgi/UP7u4ULkaFM2QPjFIATVOky5wYL0mhAi9nKF4wFUP6v1fvH8CqAR4USGTnlSnFATwvqCI9xksxMaNjRHBpxq6cqP8L0QK2ShCrHCG58L5q/0sh865ZIxnxWirRWbUns64Zj6+ByDcLL1opyXhEs/gPnpPoXPLAa6FPTf0CBbaBvRk3YdctJYJ6RchsCXTmJ4TysYOy7CpR/g8+mttqEfICQ8B7+sZvbCjCqUvlTfVOSoHQ0g/GAY8TiLStjztTEklGHYOZ7cm/tAT1gFhKu06Z8R8XUjCsZGvX2WTgHmVas2UoNsCD1M06yfqSO+nnxzhM+XOAjfTH7nA53Q4Wnm7QCxHMhBhQJICC79LgCeBlqvaYZNhTYx1Z894agzGuCxfjdvnLX1EQraHz4AIBhow35TafZjmi2c2C74w7kbF1d+px/aOiCk9ciTzHuSUBseR/A1obapV4pyHFxgGdFxQc9RgVBn3vrWN0eds0E5qj+lPw35NsKLnDDJvZWEYHlTh42zzp1kmX5oIG/jatTL0HKmFuJQM9POKQCwW9u6R9oG9jQS7yngFTCh82toE2+oYo2jDxZTV2MOLZHNCW9hcWEN//JCE86nm/r5c0EbXtovgKVFIeH8GnpXCsMFRx8swHr+1VnBg8ioCb03euEHBv/88qVgs6BpReHlpXkBKA8LWmHg3OqQ6R0NDBccbd4NJa259iiUxBAQCH+8vXr//grW+IWLgfOS/HGsAGt8eMHbPwRBy/YSrr0cmTbv1gm3OPpwyHkWItyK6veyhYKgq5Adtj37bUq8PcyaFxSym333ZhWDjIaDAZE7ZHFu3vKfnk1uJT/on77oDYe9s/bAZ6sNbrYN2me9i2HvxWk/kffey/mTBWHqkKOtnXRJnA8C3A2FBW/ofql+ge8VTCYpqJ846r1SXS5vykBMPClMajj66hBK4uJsEZUmm0NfpTEjQi71pQk359nggW/68IXNuZrsCDlp+fPvnz+xQFTegG9aZjWsMUefeJtKpZZfYd839JH8ZZndscvSGkNCzicukpiQSRw0BQgp79E55U7fiExIXzPZxZSPgxv8tEZkUlFEKHojyr+yPpyYsRVpjch2FXKQj6mnoTciaxOy9qUcrTtlbkJAyCriW19JFRPlV6yHM+a6rA/9p0nCGeyQuiR1OfrtUrdSxM4mgkiR6rKpD51f+pl0njIO9vpg9tjU+E75VPxogEyqeqdAjc9kn8YlMn/K3I9CFXeZ7LW5JXEES1Fpsth9d6u4xWS/1KPUKwJCRjWvU8VVJnveXi1jexv5cyQZd6bK0T0eHKhlzOxN/jWakqJY4wiOakESHmJUgPDeE4P7h/4CiMiLMSpA4/4h+6RmouVXiDuMSjyaNcjpT7Zx2GdCYXz9F6S4qLDaOfRR8RAQRhEQJ5JSn2YvRvkT64ZmNhW3mDxPE6Ll32daMaolqEt/nob+magwLV/NAIwgF7Upw+i5thClfk0kQvgSCeYbT3ZNnmtjXz/Zf8arnUQgI/ibHdZFvUOTZxMjdDVAUkJX04PXNP4i0sZmk+dLI3U13PIg4cPYnPAlBtEuwyqb57xDtfxXYqqmIdsnf0VJqL9wweJZ/VAtv0+E6X2UhNaz+rTvW4Rq+SqU8CpKQut9i2hj/p+hhJGGQ+udGer3nsL0iITT957o310L0YxZGiWh7d21KCPiI3qazPT9QxZPYPpKKqbEv0IJ/xJTkTQT5qw38lm8Bxyo1Nr+9fdQwETi+/U+3uHv6D/d/h5wNPGiOJ5bmvu6Ewq48xVcg9ywDu/HbzF7Hz/oJ3SX5ubmlv4VhrjzL/0anI5nyHK8jx/FNM0c8nNQS38nghh3En8v6dfgnXGPJueZCuy9qZTZNQChLv0Rdy6tK/hd3N6fM+U6F4NnTCgV/zMFDJipxgw1Ef/DGNF9tgnToA/7bu7bRg9nqg/i385L9om6PQfKcz4N2RlDHsEjR8uNhdFPfs6hpdo/Tsadf2pLzkv4nxutRpljhek5Y4jB1rfeNO9gpMJexis3cy6ApWd2xJ1n7r+eu1lJwnadAFNiQOk9J4oyJEK61qJaSZqdm0/u3Dayz9Sdv91/Wbs7Md5qA5iV0QLsvUpF6HPWF8WmIhhMY2E77exw0Tmqeig+GIw7Hzz01aOO7b+FXUm3F+ocBaXPeW3EW26i1FhMp739Ozonq67FODenz9SdZ+6P+dWVjvs/B5TqIkaDWadSez6EZOcmivXFZEC7NVW4dyPCsOEIEgbgveB7oDuEPKgTGdL33ESCvEaUWtshDR1V4dqJuLTE1/7h+SUnIn/tD2hAVkYtfEP6n32JHTDE8oLP5HRI+MhbbPxc9f76dlS4u72+r85NOfmPQuh3qOlkC6c/KZT9OGjiM2jF8sEsPoh4yy/BFbB6/fNbRxBWTnKxTmdFEDrffl6vwmEs8bfhgLohkwtYdnScBk14jrDILVSQelqs3Pz4eLMC2Ry+RO2cwA9vPv64WUH4FmhHjPUYeI4wuhHFBnIbuQ5gCzI15PQ40SDGbeTWOsFnQaMb8YBFw1FMqZUFxNGFnOeN5k7F8lEUTVdmK4nWFjHsTHakmCjWqTviEiMitUXM1EIIERIbsfEIM9QUSlvElKu7LG5/C7H+iIAoiLP6W8w8Q6LMsoEcCWJshgmL7r6rnj4z4fcw/Jp1PKxmnL0rebpZYvYK8utl8cAK7wKF0CsodMfm8U04w4hFhH5PPB/yiJL0yKsQSk2GjM+nt5wPYchJmHVGPY2plA4+E9OvPyBW7zzP8fKPomTgya0+Pckw+x+KbPtUEiqwpx56/8PAeSo+vieFSgcQYvSw5Pf84375aRAGxAucPqQBHavtJyI/pvwbzuH1kvXPT3275jyCfJsmSCm8fsC+S/FpOJoAV4Pb09m/L3cUrTgJpB75ALqbAs4m5L13np+Io4n59EgqEvRW93qbp+JofLKalKeiQCJ0dx9/GhkNlDurCfQyMwj5qvPGczRdf0nkcqaSq+MhOqHLoYqjp+FoYHcPB2GgG51NyL+2I4qPtsfmlqraCTPufQscQn7Xhlh+Ko7G6UxnAM4itIfFJ1EcGrI50+BAiEg4RXw6rhS4Giszzfin2ziEFuLTcaU2ZzobEIHQRHwqWSmUmZnOnKJohKa7iaB7OqnUkYjiZJAJ+S0Y+qWn42iMrutSZgtl8EiEIPRLT2EzeCpQ5ktFz+YvBSFfTaWeTN4Nla6npLBUDZ+Qr609kQLfULI1Dkm2iQh5/r8zn5l4QAm3yONGJ+S/Bz/Y88BShe/ow8Yg5O8FxAcnIlZHuMcYNQ4hX71Defglaq3cIfoYAkKe//joM1UVPuINGZOQvy+dPCrgSQlnhpIQ8rX/PqIZVQwfSkwIzLjyWGY8OcE1IBkhz98+ilPtCD9JBktEyK9urzz0VFVXRqEbTowJYfg/eUhG9US4JhwpKSFfe8ipCiYoahrKjpDn9789EGNHuMGK8cwIwXJ8CEbAh1YIRkFoMEa5HtWO8I3MwbAiBIw30fkc4F/o7MeEEOTjHwXUp7Wx1FkRflKsP4aEQD/uBMZ5Dpieo2ti/2kXG0IwWW9ZGhKY74YgQfMVK0KgrzcAksGSBHjffjAxny6GhCAL+HEj0Pkd9QTgXTNYfVMxJQSq3d9qhKZUgfFWbr+ys54h1oRQ+z9uOu7XgGYIviTU+XZNHRp8FAUh1P7XnyNBWFnpzDKn8QbU3c8fUdBBRUUIVdv/+v3m7gSCnpycAFbVeEkY/rPTOTlZAWjC9rfvPyizlnBFSWioVlu9//H948/bb3ej7SMAeHS0ffft5ufH71/vV2usV51X/wNzN8KKcLXvsgAAAABJRU5ErkJggg==" 
          className="h-10 w-10 rounded-full" alt="" />
        <div className="flex flex-col space-y-3">
          <p className="text-black font-semibold">Admin</p>
          <p className="text-gray-500 font-semibold">admin@abcauction.com</p>
        </div>
      </div>
    </div>
  );
}

export default SideBarAdmin;