import { Questions } from "./Questions"

export default function Test() {
    return (<div className="h-full justify-between">
        <div className="flex flex-col items-start gap-8 overflow-y-scroll scrollbar-thumb-[#f0ebd8] scrollbar-track-[#0d1321] scrollbar-thumb-rounded-xl scrollbar-thin h-full md:p-10 p-4  rounded-xl">
            {Questions.map((question, key) => {
                return (
                    <>
                        <div key={key} className="flex gap-2 items-start bg-[#f0ebd8] text-[#0d1321] p-4 rounded-md text-2xl tracking-wide italic w-full">
                            <span>{question.index}.</span>
                            <span>{question.q}</span>
                        </div>
                        <div className="flex flex-col gap-2 items-start w-full">
                            {question.options.map((option, k) => {
                                return (<div key={k} className="flex gap-1 text-lg justify-start text-[#f0ebd8] bg-[#1d2d44] p-4 opacity-70 rounded-md border-[1px] border-[#f0ebd8] w-full hover:opacity-100 cursor-pointer">
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