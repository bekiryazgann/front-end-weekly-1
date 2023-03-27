import {FaTimes, TbTrashFilled} from "react-icons/all";

function App() {
    return (
        <>
            <div className="rounded-2xl bg-white h-[520px] w-[420px] text-black flex flex-col">
                <div className="px-8 pt-8 flex justify-between items-center">
                    <h3 className="font-bold text-lg"> Edit Section </h3>
                    <div>
                        <FaTimes />
                    </div>
                </div>
                <div className="px-8 flex-1">
                    Helllo
                </div>
                <div className="py-8 border-t-2 border-[#F3F3F5]">
                    <div className="px-8 flex items-center justify-between">
                        <div className="">
                            <button className="flex items-center">
                                <TbTrashFilled />
                                <span className="ml-2.5"> Remove </span>
                            </button>
                        </div>
                        <div className="flex-1 flex items-end justify-end">
                            <button className="bg-[#F3F5F7] text-black rounded-full px-4 py-2 block">
                                Cancel
                            </button>
                            <button className="bg-[#049669] text-white rounded-full px-4 py-2 block ml-2.5">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
