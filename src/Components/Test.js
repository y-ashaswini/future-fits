import { Questions } from "./Questions"

export default function Test() {
    return (<div className="h-full justify-between">
        <div className="flex flex-col items-start gap-4 overflow-y-scroll scrollbar-thumb-zinc-400  scrollbar-track-zinc-200 scrollbar-thin h-full md:p-10 p-4 bg-white rounded-xl">
            {Questions.map((question, key) => {
                return (
                    <>
                        <div key={key} className="flex gap-2 items-start bg-[#7F1D1D] text-white p-8 rounded-md text-xl tracking-wide italic w-full">
                            <span>{question.index}.</span>
                            <span>{question.q}</span>
                        </div>
                        <div className="flex flex-col gap-2 items-start w-full">
                            {question.options.map((option, k) => {
                                return (<div key={k} className="flex gap-1 text-lg justify-start text-white bg-[#FF7A7A] p-4 opacity-80 rounded-md w-full hover:opacity-100 cursor-pointer">
                                    <span>{option.index}.</span>
                                    <span className="">{option.text}</span>
                                </div>)
                            })}
                        </div>
                    </>
                )
            })}
        </div>

    </div>)
}