
import Starfil from "/src/images/Star_fill_gray.svg"
import Star from "/src/images/Star_fill.svg"


export default function Card({cardinfo}){

    

    return(
        <div className="w-full  mx-12 flex flex-col">
            {
                cardinfo.map(
                    card =>(

                        <div key={card.id} className="max-w-80  bg-white mt-8 mb-10 p-4 shadow-lg rounded-lg">
                           

                            <div className="flex " >
                            <img className="w-24 py-2 pr-2"src={card.img} alt={card.alt} />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={card.id === 1? Starfil : Star } alt="" />
                            </div>
                             <h1 className="font-sora font-semibold text-xl">{card.name}</h1>
                             <p className="font-sora text-gray text-base pt-2">{card.review}</p>
                        </div>
                    )
                )
            }

           

        </div>
    )
}