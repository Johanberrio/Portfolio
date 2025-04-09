import { RefObject  } from "react";
import { IoIosSearch } from "react-icons/io";



export function Header({phrase, content, language, setLanguage, query, setQuery, visible, setVisible, inputRef}: {phrase: string , content: any, language: string, setLanguage: (lang: string) => void, query : string, setQuery : (query : string) => void,  visible: boolean, setVisible: (vi: boolean) => void, inputRef: RefObject<HTMLInputElement  | null> }){



    return (

        
        
        <header className="bg-[#292a2a] flex flex-col sm:flex-row text-white justify-center sm:justify-between fixed top-0 w-full z-9999">
            <div className="flex items-center -pt-2 -ml-11 mt-3">
                <img src="public/Logo.png" className="w-50 h-50 -mr-15 relative top-[-60px]"></img>
                <h3 className="font-bold leading-tight relative top-[-60px]" style={{ fontFamily: "Noto Sans, sans-serif" }}>{content.portfolio}</h3>    
            </div>
            <div className="flex gap-x-3 absolute pl-4 pt-45 lg:text-xl text-xs " style={{ fontFamily: "Noto Sans, sans-serif" }}>
                    <span onClick={() => setLanguage("ingles")} className={`cursor-pointer ${language === "ingles" ? "font-bold" : "font-normal"}`}>{content.span_english}</span>
                    <span onClick={() => setLanguage("español")} className={`cursor-pointer ${language === "español" ? "font-bold" : "font-normal"}`}>{content.span_spanish}</span>
            </div>
            <div className="flex flex-col-2 sm:pt-2 top-2 absolute right-[10px] sm:right-[20px] md:right-[40px] lg:right-[40px] xl:right-10" style={{ fontFamily: "Noto Sans, sans-serif" }}>
                    <IoIosSearch className="z-50 text-3xl text-white cursor-pointer" onClick={() => setVisible(true)} />
                
                {
                    visible && (<input type="text" ref={inputRef} className="border-2 border-white " value={query} onChange={(e) => setQuery(e.target.value)}>
                    </input>)
                }
            </div>
            <div className="relative top-[-120px] lg:top-[40px] xl:top-[-30px] xl:mt-15 sm:top-[50px]">
                <h1 className="md:text-4xl lg:text-5xl text-3xl pr-5 text-right font-bold sm:pr-20 md:pr-10 sm:pt-10" style={{ fontFamily: "Noto Sans, sans-serif" }}>Johan Berrio</h1>
                <h2 className="md:text-xl text-xs pr-5 sm:pr-20 text-right md:pr-10  font-bold text-[#919091]" style={{ fontFamily: "Noto Sans, sans-serif" }}>{content.job}</h2>
                <h3 className="pt-3 sm:text-xs text-xs xl:text-xl font-semibold pr-4 italic sm:pr-20 md:pr-10 text-right -mb-30">
                    "{phrase}"
                </h3>
            </div>
        </header>
        
    )
}