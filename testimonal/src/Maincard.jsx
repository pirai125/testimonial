import Donesymbol from "/src/images/Done_ring_round_fill.svg"
import Star from "/src/images/Star_fill.svg"

export default function Maincard(){

    return(
        <div className="max-w-xl p-4  ml-10 bg-thingray">
            <img src={Star} alt="Revie icon" className="p-2 mb-2 rounded-full border-2  border-yellow " />
            <h1 className="font-sora text-4xl font-semibold mb-2">Reviewers</h1>
            <p className="font-sora text-xl text-gray mb-8">Reviewers is where people can access guidelines, checklists, and other tools to assist them in reviewing papers or manuscripts. It provides a structured approach to ensure that the review process is thorough, efficient, and consistent.</p>
            <ul>
                <li className="flex"><img src={Donesymbol} alt="Done_ring_round" /><p className="font-sora text-sm text-gray m-2">Checklist to Review an Academic Paper</p></li>
                <li className="flex"><img src={Donesymbol} alt="Done_ring_round" /><p className="font-sora text-sm text-gray m-2">Peer Review Checklist</p></li>
                <li className="flex"><img src={Donesymbol} alt="Done_ring_round" /><p className="font-sora text-sm text-gray m-2">Checklist for Editors, Reviewers, and Authors of SPIE Journals</p></li>
            </ul>
        </div>
    )
    
}