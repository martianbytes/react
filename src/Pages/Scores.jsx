import { useReducer, useState } from "react"

const Scores = () => {

    const [increase, setIncrease] = useState('INCREASE');
    

    const initialScores = [
        {
            id: 1,
            score: 0,
            name: "Rahul"
        },
        {
            id: 2,
            score: 0,
            name: "Robin"
        }
    ]

    const reducer = (state, action) => {
        switch(action.type) {
            case "INCREASE":
                initialScores.map((player)=>{
                    if(player.id === action.id) state.score++;
                })
                break;
            case "DECREASE":
                initialScores.map((player)=>{
                    if(player.id === action.id) state.score--;
                })
        }

    }

    const handleMainBtnClick = () => {
        setIncrease(prev=>prev==='INCREASE'?"DECREASE":"INCREASE");
    }

    const handleScore = () => {
        const [score, dispatch] = useReducer(reducer, initialScores);
        const handleIncrease = (player) => {
            dispatch({type: increase, id: player.id})
        }
    }
    return (
        <div>
            <div className="h-screen bg-amber-200 flex flex-col gap-30 justify-center items-center ">
                <div>
                    <button onClick={handleMainBtnClick} className="bg-amber-400 hover:bg-amber-300 active:bg-amber-200 px-8 py-4 rounded-xl shadow-xl">{increase==='INCREASE'?"Decrease":"Increase"}</button>
                </div>
                <div className="flex justify-around gap-10 w-full flex-wrap ">
                    <section className="bg-cyan-400 w-100 px-10 py-5 rounded-2xl h-100 flex flex-col gap-10">
                        <p>Name</p>
                        <p>Score</p>
                        <button className="bg-amber-400 hover:bg-amber-300 active:bg-amber-200 px-8 py-4 rounded-xl shadow-xl">Update Score</button>
                    </section>
                    <section className="bg-cyan-400 w-100 px-10 py-5 rounded-2xl h-100 flex flex-col gap-10">
                        <p>Name</p>
                        <p>Score</p>
                        <button className="bg-amber-400 hover:bg-amber-300 active:bg-amber-200 px-8 py-4 rounded-xl shadow-xl">Update Score</button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Scores