import React from "react";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

export const RunnerDetails = ({show, handleClose}) => {
    return (
        <>
        <Transition apear show={show} as={Fragment}>
                <Dialog onClose={handleClose} className="relative z-50">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-400"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    </Transition.Child>
                    
                    <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-400"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <Dialog.Panel className="flex flex-col space-y-2 divide-y divide-slate-700 w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Deactivate account</Dialog.Title>
                                    <div className="flex flex-row">
                                        <p>First</p>
                                        <p>Second</p>
                                        <p>Third</p>
                                        <p>Forth</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <p>First</p>
                                        <p>First</p>
                                        <p>First</p>
                                        <p>First</p>
                                    </div>
                                <div>
                                    <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={() => handleClose()}>Deactivate</button>
                                </div>
                                <div>
                                    <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={() => handleClose()}>Cancel</button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}