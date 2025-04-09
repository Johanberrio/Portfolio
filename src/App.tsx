import { About } from "./components/About"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { SocialNetworks } from "./components/SocialNetworks"
import { useState, useEffect, useRef } from "react"
import { ingles, español } from "./components/object"




function App() {

  
  const [query, setQuery] = useState("")
  const [visible, setVisible] = useState(false)
  const [language, setLanguage] = useState("español")

  const content = language === "español" ? español : ingles

  const [phrase, setPhrase] = useState("")

  useEffect(() => {

    const changePhrase = () => {
      const randomIndex = Math.floor(Math.random() * content.phrases.length)
      setPhrase(content.phrases[randomIndex])
    }

    changePhrase()
    const interval = setInterval(changePhrase, 5000)
    return () => clearInterval(interval);
  
  }, [content])

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (visible && inputRef.current){
      inputRef.current.focus()
    }
  }, [visible])

  return (
    <>
    <Header phrase={phrase}
        content={content}
        setLanguage={setLanguage}
        language={language}
        query={query}
        setQuery={setQuery}
        visible={visible}
        setVisible={setVisible}
        inputRef={inputRef}/>
    <h1 className="text-3xl text-white text-center font-bold pb-10 pt-70 sm:pt-70" style={{ fontFamily: "Noto Sans, sans-serif" }}>{content.projects}</h1>
    <div className="flex justify-center items-center">
      <Projects content={content} query={query} >
      </Projects>
    </div>
    <div className="flex flex-col md:pt-20 pt-10 sm:flex-row-reverse">
      <div className="w-full p-5 lg:pl-20 xl:pl-50 2xl:pl-100">
          <About content={content}>
          </About>
      </div>
      <div className="relative top-[-130px] custom-top md:top-[-285px] lg:top-[50px] xl:top-[20px] 2xl:top-[-100px] md:pt-0 md:pl-10 lg:pl-20 xl:pl-20 2xl:pl-40 xl:w-1/2 w-3/4 flex justify-center items-center min-h-screen mx-auto">
        <img src="public/software.webp" className="object-cover clip-triangle" alt="software"></img>
      </div>
    </div>
    <div className="w-full pt-5 pb-11 pl-7 flex flex-cols gap-4 items-center ">
      <SocialNetworks>
      </SocialNetworks>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
