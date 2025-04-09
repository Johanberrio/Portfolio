export function Projects({content, query}: {content: any, query : string}){


    const cards = [
        {
            title: content.card_1_title,
            description: content.card_1,
            image: 'public/tablet.png',
            link: "https://www.google.com",
            tags: "Kotlin / Android Studio",
        },
        {
            title: "Intranet Taurus Services",
            description: content.card_2,
            image: 'public/intranet.png',
            link: "https://github.com/SimplixityTech/intranet-base",
            tags: "Python / HTML / CSS / Javascript / MYSQL / PostgreSQL",
        },
        {
            title: content.card_3_title,
            description: content.card_3,
            image: 'public/carritodecompras.png',
            link: "https://phenomenal-gecko-107185.netlify.app/",
            tags: "React / TypeScript / HTML / CSS",
        },
    ];

    const filteredCards = cards.filter(card =>
        `${card.title} ${card.description} ${card.tags}`
            .toLowerCase()
            .includes(query.toLowerCase())
    );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl p-4 ">
            {filteredCards.map((card, idx) => ( 
                <div key={idx} className="material-card relative" style={{ fontFamily: "Noto Sans, sans-serif" }}>
                    <img src={card.image} alt="Conversor de moneda" className="w-full h-56 object-cover rounded-lg"></img>
                    <br></br>
                    <a href={card.link} className="block bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 pb-13">
                        <h2 className="text-lg font-semibold text-[#001525]">{card.title}</h2>
                        
                        <p className="text-[#001525]">{card.description}</p>
                    </a>
                    <br></br> 
                    <br></br> 
                    <span className="tag mt-3 absolute bottom-3">{card.tags}</span>
                </div>
            ))}
        </div>  
            
    )
}